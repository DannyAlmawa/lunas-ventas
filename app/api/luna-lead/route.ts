import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { message: "No hemos podido leer tu consulta. Revisa los datos e inténtalo de nuevo." },
      { status: 400 }
    );
  }

  const name = toText(payload.name);
  const email = toText(payload.email);
  const whatsapp = toText(payload.whatsapp);
  const message = toText(payload.message);
  const honeypot = toText(payload.website);

  if (honeypot) {
    return NextResponse.json({ message: "Consulta recibida correctamente." });
  }

  if (!name) {
    return NextResponse.json(
      { message: "Indica tu nombre para poder responderte." },
      { status: 400 }
    );
  }

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Indica un email válido para poder responderte." },
      { status: 400 }
    );
  }

  const lead = {
    name,
    email,
    whatsapp,
    message,
    source: "luna-sales-page",
    createdAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.LUNA_LEADS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({
      message:
        "Consulta recibida en modo desarrollo. Configura LUNA_LEADS_WEBHOOK_URL para enviarla a tu sistema.",
      lead,
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status}`);
    }

    return NextResponse.json({
      message: "Tu consulta se ha enviado correctamente. Te responderé pronto.",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "No hemos podido enviar tu consulta ahora mismo. Inténtalo de nuevo en unos minutos.",
      },
      { status: 502 }
    );
  }
}

function toText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
