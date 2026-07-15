"use client";

import Image from "next/image";
import { useState } from "react";

export function BonusImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-md border border-line bg-soft-cream p-8 text-center">
        <p className="font-serif text-4xl tracking-[0.12em] text-deep-brown">LUNA</p>
        <p className="mt-3 font-script text-4xl text-taupe">Agenda fundadora</p>
        <p className="mt-5 max-w-56 text-sm leading-6 text-cacao/75">
          Imagen preparada para public/luna/luna_journal_cover.png
        </p>
      </div>
    );
  }

  return (
    <Image
      src="/luna/luna_journal_cover.png"
      alt="Agenda LUNA Edición Fundadora"
      fill
      className="object-contain p-2"
      sizes="(min-width: 1024px) 360px, 82vw"
      onError={() => setFailed(true)}
    />
  );
}
