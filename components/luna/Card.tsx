import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-line/80 bg-white-warm/45 p-6 shadow-glow backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-taupe/55 ${className}`}
    >
      {children}
    </div>
  );
}
