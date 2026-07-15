import { Accordion } from "@/components/luna/Accordion";
import { BonusImage } from "@/components/luna/BonusImage";
import { Button } from "@/components/luna/Button";
import { Card } from "@/components/luna/Card";
import { DecorativeCrescent } from "@/components/luna/DecorativeCrescent";
import { DecorativeMoon } from "@/components/luna/DecorativeMoon";
import { LeadForm } from "@/components/luna/LeadForm";
import { Section } from "@/components/luna/Section";
import { SectionHeading } from "@/components/luna/SectionHeading";
import {
  calmaSteps,
  cycleSteps,
  faqs,
  fitItems,
  imagineItems,
  includes,
  navItems,
  notFitItems,
  outcomes,
  policySections,
  pricing,
  programPhases,
} from "@/lib/luna-content";

const checkoutUrl =
  process.env.NEXT_PUBLIC_LUNA_CHECKOUT_URL || "https://pay.hotmart.com/S106748079U";
const instagramUrl = "https://www.instagram.com/karolina.totena";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-luna-paper text-deep-brown">
      <Header />
      <main>
        <Hero />
        <PainSection />
        <CycleSection />
        <ReframeSection />
        <ImagineSection />
        <StorySection />
        <WelcomeSection />
        <MethodSection />
        <OutcomesSection />
        <ProgramSection />
        <FitSection />
        <IncludesSection />
        <PricingSection />
        <BonusSection />
        <ContactSection />
        <FaqSection />
        <ClosingSection />
        <PoliciesSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/50 bg-soft-cream/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="font-serif text-2xl font-semibold tracking-[0.22em] text-deep-brown"
        >
          LUNA
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cacao/80 transition hover:text-deep-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cacao"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button href={checkoutUrl} className="hidden px-4 py-2 text-xs sm:inline-flex">
          Entrar a LUNA
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-12 sm:pb-24 lg:min-h-[calc(100vh-4rem)]">
      <DecorativeMoon size="lg" className="-right-28 top-12 opacity-70 sm:right-0 lg:right-12" />
      <DecorativeCrescent
        className="right-[-7rem] top-16 sm:right-[-3rem] lg:right-8"
        opacity={0.2}
      />
      <StarField />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10 max-w-3xl pt-8">
          <p className="mb-8 inline-flex rounded-full border border-line bg-white-warm/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
            Programa online · 12 semanas · Edición fundadora
          </p>
          <h1 className="font-serif text-[5.5rem] font-medium leading-none tracking-[0.12em] text-deep-brown sm:text-[8rem] lg:text-[10rem]">
            LUNA
          </h1>
          <p className="mt-1 font-script text-4xl text-taupe sm:text-5xl">
            Vive en ciclo. Crea desde tu energía.
          </p>
          <p className="mt-8 max-w-2xl font-serif text-3xl leading-tight text-deep-brown sm:text-4xl">
            El programa de 12 semanas para mujeres que están cansadas de sentirse agotadas, perder la motivación y no lograr ser constantes, aunque saben que tienen mucho más potencial.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cacao/85">
            No estás rota. Solo necesitas comprender mejor tu energía para dejar de luchar contra ti misma y empezar a avanzar con más claridad, calma y coherencia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={checkoutUrl}>Entrar a LUNA</Button>
            <Button href="#incluye" variant="secondary">
              Ver todo lo que incluye
            </Button>
          </div>
          <p className="mt-5 text-sm text-cacao/70">
            Edición fundadora · 15 plazas · Inicio sábado 1 de agosto de 2026
          </p>
        </div>
        <div className="relative z-10 min-h-[26rem] lg:min-h-[34rem]">
          <div className="absolute inset-x-8 bottom-0 top-8 rounded-t-full border border-line/80 bg-white-warm/30 backdrop-blur-sm" />
          <DecorativeCrescent
            className="left-1/2 top-10 -translate-x-1/2"
            opacity={0.18}
            style={{ width: "96px", color: "#E8C8A8", zIndex: 1 }}
          />
          <div className="absolute left-1/2 top-12 h-64 w-px -translate-x-1/2 bg-line" />
          <div className="absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 rounded-full border border-taupe/45" />
          <BotanicalLine className="absolute bottom-14 left-1/2 h-72 w-48 -translate-x-1/2 text-taupe/55" />
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <Section className="bg-white-warm/45">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <SectionHeading title="No estás rota. Nunca lo estuviste." />
        <div className="space-y-7 text-lg leading-9 text-cacao/90">
          <p>Durante años has intentado ser más disciplinada. Has probado agendas, métodos de productividad, rutinas, hábitos y aplicaciones. Has prometido que esta vez sería diferente, pero siempre ocurre lo mismo.</p>
          <p>Hay días en los que puedes con todo. Te levantas llena de energía. Empiezas proyectos. Trabajas con ilusión. Sueñas en grande.</p>
          <p>Y, de repente… todo cambia. Te cuesta concentrarte. Pierdes energía. La motivación se apaga. Empiezas a posponer y aparece la frustración de sentir que no estás expresando todo tu potencial.</p>
          <blockquote className="rounded-lg border-l-2 border-taupe bg-soft-cream/70 p-6 font-serif text-3xl leading-tight text-deep-brown">
            “Y vuelves a hacerte la misma pregunta: ¿qué me pasa?”
          </blockquote>
        </div>
      </div>
    </Section>
  );
}

function CycleSection() {
  return (
    <Section>
      <SectionHeading
        align="center"
        title="El ciclo que te hace sentir que estás desaprovechando tu potencial"
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {cycleSteps.map((step, index) => (
          <Card key={step} className="relative min-h-32 p-5 text-center">
            <p className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-line font-serif text-xl text-taupe">
              {index + 1}
            </p>
            <p className="text-sm font-medium text-cacao">{step}</p>
          </Card>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-3xl space-y-5 text-center text-lg leading-8 text-cacao/85">
        <p>Empiezas a pensar que quizá eres inconstante. Que no tienes suficiente fuerza de voluntad. Que nunca lograrás terminar lo que empiezas.</p>
        <p>Vuelves a intentarlo desde el impulso, hasta que tu energía cae otra vez.</p>
        <p>Y cuanto más se repite el ciclo, más difícil se vuelve confiar en ti, aunque en el fondo sepas que tienes mucho más dentro.</p>
      </div>
    </Section>
  );
}

function ReframeSection() {
  return (
    <Section className="bg-soft-cream/70">
      <DecorativeMoon size="md" className="-left-20 top-12 opacity-45" />
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading
          align="center"
          title="¿Y si el problema nunca hubiera sido tu falta de disciplina?"
        />
        <div className="mt-8 space-y-6 text-lg leading-9 text-cacao/85">
          <p>¿Y si simplemente nadie te hubiera enseñado cómo funciona realmente tu energía?</p>
          <p>Vivimos en un mundo que espera que las mujeres rindan igual todos los días. Pero tu cuerpo no funciona así.</p>
          <p>Tu energía cambia. Tus necesidades cambian. Tu capacidad de crear, descansar, planificar o comunicar también cambia.</p>
          <p>Y eso no significa que estés rota. Significa que eres una mujer con una naturaleza cíclica.</p>
          <p>Cuando dejas de luchar contra ella y aprendes a comprenderla, todo empieza a cambiar. No porque fuerces más. Sino porque empiezas a hacer lo que necesitas en el momento adecuado.</p>
        </div>
        <p className="mt-9 font-script text-5xl text-taupe">No es falta de potencial, es desconexión de tu energía.</p>
      </div>
    </Section>
  );
}

function ImagineSection() {
  return (
    <Section>
      <SectionHeading title="Imagina por un momento…" />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {imagineItems.map((item) => (
          <Card key={item} className="p-5">
            <p className="text-base leading-7 text-cacao/85">{item}</p>
          </Card>
        ))}
      </div>
      <p className="mt-10 font-serif text-3xl text-deep-brown">Eso es lo que quiero que experimentes.</p>
    </Section>
  );
}

function StorySection() {
  return (
    <Section className="bg-white-warm/45 luna-grain">
      <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-80">
          <div className="absolute inset-0 rounded-lg border border-line bg-soft-cream/70" />
          <DecorativeMoon size="md" className="left-1/2 top-10 -translate-x-1/2 opacity-65" />
          <BotanicalLine className="absolute bottom-8 left-1/2 h-64 w-44 -translate-x-1/2 text-taupe/50" />
        </div>
        <div>
          <SectionHeading title="Mi historia" />
          <div className="mt-7 space-y-5 text-lg leading-9 text-cacao/85">
            <p>Durante años pensé que había algo malo en mí.</p>
            <p>Empezaba proyectos con muchísima ilusión. Me volcaba por completo. Trabajaba hasta agotarme. Después perdía la motivación, abandonaba o me quedaba a medias. Y volvía a sentir que me había fallado.</p>
            <p>Intenté organizarme mejor. Dormir más. Cambiar mis hábitos. Leer más. Ser más constante. Pero siempre terminaba exactamente en el mismo lugar.</p>
            <p>Todo cambió el día que dejé de preguntarme: “¿Qué me falta?” Y empecé a preguntarme: “¿Cómo funciono realmente?”</p>
            <p>Ese camino me llevó a descubrir mi naturaleza cíclica. Comprendí que no necesitaba forzarme más. Necesitaba comprenderme mejor.</p>
            <p>Y de ese descubrimiento nació LUNA. Hoy quiero compartir ese camino contigo.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WelcomeSection() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading align="center" title="Bienvenida a LUNA" />
        <div className="mt-7 space-y-6 text-lg leading-9 text-cacao/85">
          <p>LUNA es un programa de transformación de 12 semanas creado para mujeres que desean dejar de sentirse agotadas, recuperar claridad y aprender a sostener la constancia desde una relación más honesta con su energía y su naturaleza cíclica.</p>
          <p>A través del Método CALMA aprenderás a comprender cómo funciona tu energía, reconocer tus patrones, tomar mejores decisiones y construir una forma de avanzar que puedas sostener sin dejarte a ti misma por el camino.</p>
        </div>
        <Button href={checkoutUrl} className="mt-8">Entrar a LUNA</Button>
      </div>
    </Section>
  );
}

function MethodSection() {
  return (
    <Section id="metodo" className="bg-soft-cream/65">
      <SectionHeading
        align="center"
        title="El Método CALMA"
        subtitle="Una metodología práctica para volver a ti, comprender tu energía y sostener lo que quieres crear sin apagar tu motivación."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {calmaSteps.map((step) => (
          <Card key={`${step.letter}-${step.title}`} className="p-5">
            <p className="font-serif text-6xl text-taupe">{step.letter}</p>
            <h3 className="mt-4 font-serif text-2xl text-deep-brown">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-cacao/85">{step.text}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href={checkoutUrl}>Entrar a LUNA</Button>
      </div>
    </Section>
  );
}

function OutcomesSection() {
  return (
    <Section>
      <SectionHeading title="¿Qué conseguirás al terminar LUNA?" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {outcomes.map((outcome) => (
          <CheckItem key={outcome}>{outcome}</CheckItem>
        ))}
      </div>
    </Section>
  );
}

function ProgramSection() {
  return (
    <Section id="programa" className="bg-white-warm/45">
      <SectionHeading title="Un viaje de 12 semanas para volver a ti" />
      <div className="mt-12 space-y-5">
        {programPhases.map((phase) => (
          <details
            key={phase.name}
            className="group rounded-lg border border-line bg-soft-cream/55 p-5 open:bg-white-warm/65"
            open={phase.roman === "I"}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cacao">
              <span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-taupe">
                  Fase {phase.roman}
                </span>
                <span className="mt-1 block font-serif text-3xl capitalize text-deep-brown">
                  {phase.name.toLowerCase()}
                </span>
              </span>
              <span className="text-3xl text-taupe group-open:rotate-45">+</span>
            </summary>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {phase.modules.map((module) => (
                <div key={module.title} className="rounded-lg border border-line/70 bg-white-warm/45 p-5">
                  <h3 className="font-serif text-2xl text-deep-brown">{module.title}</h3>
                  {module.quote ? <p className="mt-2 italic text-taupe">“{module.quote}”</p> : null}
                  <p className="mt-3 text-sm leading-7 text-cacao/85">{module.objective}</p>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}

function IncludesSection() {
  return (
    <Section id="incluye">
      <SectionHeading title="Todo lo que recibirás dentro de LUNA" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {includes.map((item) => (
          <Card
            key={item}
            className={
              item.includes("Sesión individual") ||
              item.includes("Acceso de por vida") ||
              item.includes("grabaciones")
                ? "border-taupe bg-moon/30"
                : ""
            }
          >
            <CheckItem compact>{item}</CheckItem>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href={checkoutUrl}>Entrar a LUNA</Button>
      </div>
    </Section>
  );
}

function BonusSection() {
  return (
    <Section className="py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-lg border border-taupe/45 bg-champagne/25 p-6 sm:p-10">
        <DecorativeCrescent
          className="right-6 top-6"
          opacity={0.16}
          style={{ width: "120px" }}
        />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-taupe/40 bg-white-warm/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
              Bonus fundador
            </p>
            <h2 className="font-serif text-4xl text-deep-brown sm:text-5xl">
              Además, te llevas este regalo
            </h2>
            <h3 className="mt-5 font-serif text-3xl text-cacao">
              Agenda LUNA – Edición Fundadora
            </h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cacao/85">
              Como alumna de esta edición recibirás también acceso a la Agenda LUNA, creada para ayudarte a aplicar el Método CALMA durante todo el año, integrando planificación cíclica, journaling y seguimiento de tu energía en un solo lugar.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm rounded-lg border border-line bg-white-warm/60 p-4 shadow-glow">
            <DecorativeCrescent
              className="-left-5 -top-5"
              opacity={0.28}
              style={{ width: "72px", color: "#E8C8A8", zIndex: 1 }}
            />
            <span aria-hidden="true" className="absolute -right-3 top-10 text-taupe/45">✦</span>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-line bg-soft-cream">
              <BonusImage />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FitSection() {
  return (
    <Section>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="font-serif text-4xl text-deep-brown">Este programa es para ti si…</h2>
          <div className="mt-7 space-y-4">
            {fitItems.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
          </div>
        </Card>
        <Card>
          <h2 className="font-serif text-4xl text-deep-brown">Este programa no es para ti si…</h2>
          <div className="mt-7 space-y-4">
            {notFitItems.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
          </div>
        </Card>
      </div>
    </Section>
  );
}

function PricingSection() {
  return (
    <Section id="inversion" className="bg-soft-cream/75">
      <div className="mx-auto max-w-4xl">
        <SectionHeading align="center" title="Tu inversión" />
        <Card className="mt-10 p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-taupe">
                Edición Fundadora
              </p>
              <p className="mt-4 font-serif text-7xl text-deep-brown sm:text-8xl">{pricing.price}</p>
              <div className="mt-6 space-y-3 text-cacao/85">
                {pricing.options.map((option) => <p key={option}>{option}</p>)}
              </div>
            </div>
            <div className="space-y-4">
              {pricing.details.map((detail) => <CheckItem key={detail}>{detail}</CheckItem>)}
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Button href={checkoutUrl}>Entrar a LUNA</Button>
                <Button href={instagramUrl} variant="secondary">
                  Escribirme por Instagram
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function PoliciesSection() {
  return (
    <Section id="politicas" className="bg-soft-cream/55 py-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-medium text-deep-brown sm:text-3xl">
            Políticas y condiciones importantes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-cacao/70">
            Resumen de acceso, convivencia, responsabilidad y alcance educativo del programa.
          </p>
        </div>
        <div className="mt-6 text-sm">
          <Accordion items={policySections} />
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contacto">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <SectionHeading
          title="¿Tienes dudas antes de entrar?"
          subtitle="Escríbeme y te responderé con claridad para que puedas decidir desde un lugar tranquilo."
        />
        <Card>
          <LeadForm />
        </Card>
      </div>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section id="faq" className="bg-white-warm/45">
      <div className="mx-auto max-w-4xl">
        <SectionHeading align="center" title="Preguntas frecuentes" />
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
      </div>
    </Section>
  );
}

function ClosingSection() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-4xl leading-tight text-deep-brown sm:text-6xl">
          Tal vez no necesitas seguir forzándote ni seguir pensando que el problema eres tú.
        </p>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-lg leading-9 text-cacao/85">
          <p>Tal vez necesitas comprender mejor tu energía, respetar tus ritmos y construir una forma de avanzar que sí puedas sostener.</p>
          <p>Bienvenida a LUNA. No estás rota. Estás lista para volver a ti.</p>
        </div>
        <Button href={checkoutUrl} className="mt-9">Entrar a LUNA</Button>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-soft-cream px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-cacao/75 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[0.18em] text-deep-brown">LUNA</p>
          <p className="mt-2">Método CALMA</p>
          <p className="mt-2 max-w-xl">Programa educativo y de desarrollo personal. No sustituye atención médica o psicológica.</p>
        </div>
        <nav className="flex flex-wrap gap-4" aria-label="Legal">
          <a href={instagramUrl} className="underline-offset-4 hover:underline">Instagram</a>
          <a href="/terminos-y-condiciones" className="underline-offset-4 hover:underline">Términos y condiciones</a>
          <a href="#" className="underline-offset-4 hover:underline">Política de privacidad</a>
          <a href="#contacto" className="underline-offset-4 hover:underline">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}

function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-soft-cream/92 p-3 backdrop-blur-xl sm:hidden">
      <Button href={checkoutUrl} className="w-full">
        Entrar a LUNA · 197 €
      </Button>
    </div>
  );
}

function CheckItem({ children, compact = false }: { children: React.ReactNode; compact?: boolean }) {
  return (
    <div className={`flex gap-3 ${compact ? "items-start" : "items-start rounded-lg border border-line/60 bg-white-warm/35 p-4"}`}>
      <span aria-hidden="true" className="mt-1 text-taupe">✦</span>
      <p className="text-sm leading-7 text-cacao/88 sm:text-base">{children}</p>
    </div>
  );
}

function StarField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-taupe/45">
      <span className="absolute left-[12%] top-[16%]">✦</span>
      <span className="absolute left-[72%] top-[18%] text-xs">✦</span>
      <span className="absolute left-[88%] top-[48%] text-sm">✦</span>
      <span className="absolute left-[18%] top-[72%] text-xs">✦</span>
    </div>
  );
}

function BotanicalLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 260" fill="none" aria-hidden="true">
      <path d="M80 244C82 190 80 126 80 18" stroke="currentColor" strokeWidth="1.4" />
      <path d="M80 174C50 156 37 133 35 106C60 112 75 135 80 174Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M81 128C112 112 124 90 122 63C98 70 84 94 81 128Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M80 213C111 197 126 175 128 148C102 153 86 177 80 213Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M80 86C56 73 45 55 45 33C65 38 77 58 80 86Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
