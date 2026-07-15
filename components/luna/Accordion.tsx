"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-line rounded-lg border border-line bg-white-warm/40">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-base font-medium text-deep-brown transition hover:bg-white-warm/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-cacao"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <span aria-hidden="true" className="text-2xl font-light text-taupe">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-panel-${index}`}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-7 text-cacao/85 sm:text-base"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
