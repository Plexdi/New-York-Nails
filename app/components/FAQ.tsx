"use client";

import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const faqs: FAQ[] = [
  {
    q: "Do I need to book an appointment?",
    a: "Walk-ins are welcome when we have availability, but we recommend booking to secure your preferred time—especially on weekends.",
  },
  {
    q: "How long do nail treatments usually take?",
    a: "Times vary depending on the service and nail art. We’ll confirm an estimated time when you arrive or when you book.",
  },
  {
    q: "What should I do if I need to cancel or reschedule?",
    a: "Please let us know as early as possible. If you booked online, you can reschedule through the booking link. You can also contact us directly.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#fbf6f7] px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-xl text-neutral-900 sm:text-2xl md:text-3xl">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="mt-8 divide-y divide-neutral-300/60 border-y border-neutral-300/60">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div key={item.q} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="text-sm font-medium text-neutral-900">
                    {item.q}
                  </span>
                  <span className="text-xl leading-none text-neutral-700">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm leading-6 text-neutral-700">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
