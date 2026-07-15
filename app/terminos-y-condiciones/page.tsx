import Link from "next/link";
import { Button } from "@/components/luna/Button";
import { Section } from "@/components/luna/Section";
import { SectionHeading } from "@/components/luna/SectionHeading";
import { policySections } from "@/lib/luna-content";

export const metadata = {
  title: "Términos y condiciones · LUNA",
  description:
    "Políticas importantes, condiciones de acceso, convivencia, devoluciones y alcance educativo del programa LUNA.",
};

const checkoutUrl =
  process.env.NEXT_PUBLIC_LUNA_CHECKOUT_URL || "https://pay.hotmart.com/S106748079U";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-luna-paper text-deep-brown">
      <Section className="pb-10 pt-14">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm text-cacao underline-offset-4 hover:underline"
        >
          Volver a LUNA
        </Link>
        <SectionHeading
          title="Términos y condiciones"
          subtitle="Resumen claro de las políticas importantes del programa LUNA. Esta página recoge la información esencial de acceso, convivencia, responsabilidad, devoluciones y alcance educativo."
        />
        <div className="mt-10 space-y-6">
          {policySections.map((section) => (
            <article
              key={section.question}
              className="rounded-lg border border-line bg-white-warm/55 p-6"
            >
              <h2 className="font-serif text-3xl text-deep-brown">{section.question}</h2>
              <p className="mt-4 text-base leading-8 text-cacao/85">{section.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-line bg-soft-cream/65 p-6">
          <p className="text-base leading-8 text-cacao/85">
            LUNA es un programa educativo y de desarrollo personal. No sustituye atención médica, psicológica, ginecológica, legal ni financiera.
          </p>
          <Button href={checkoutUrl} className="mt-6">
            Entrar a LUNA
          </Button>
        </div>
      </Section>
    </main>
  );
}
