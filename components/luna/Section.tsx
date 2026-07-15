import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden py-16 sm:py-20 ${className}`}>
      <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
