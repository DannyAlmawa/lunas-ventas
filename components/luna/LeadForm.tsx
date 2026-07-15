"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/luna-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "No hemos podido enviar tu consulta.");
      }

      setStatus("success");
      setMessage(data.message || "Tu consulta se ha enviado correctamente.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "No hemos podido enviar tu consulta. Inténtalo de nuevo."
      );
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <Field label="Nombre" name="name" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="WhatsApp opcional" name="whatsapp" autoComplete="tel" />
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-cacao">
          Mensaje opcional
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-line bg-white-warm/75 px-4 py-3 text-base text-deep-brown outline-none transition focus:border-cacao focus:ring-2 focus:ring-cacao/20"
        />
      </div>
      <Button className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Enviar mi consulta"}
      </Button>
      {message ? (
        <p
          className={`rounded-lg border px-4 py-3 text-sm leading-6 ${
            status === "success"
              ? "border-taupe/35 bg-moon/25 text-cacao"
              : "border-cacao/25 bg-blush/35 text-deep-brown"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", autoComplete, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-cacao">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-line bg-white-warm/75 px-4 py-3 text-base text-deep-brown outline-none transition focus:border-cacao focus:ring-2 focus:ring-cacao/20"
      />
    </div>
  );
}
