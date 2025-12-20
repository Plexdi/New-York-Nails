"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Slide = { src: string; alt: string };

type BookingSectionProps = {
  heading?: string;
  subheading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  slides: Slide[];
};

// 🔧 TUNE THESE (pick the size you like)
const FRAME_H_MOBILE = "h-[260px]";
const FRAME_H_DESKTOP = "md:h-[400px]";
const BAND_TOP = "top-[58%]";
const BAND_H = "h-[320px]";

export default function BookingSection({
  heading = "ELEGANCE\nREDEFINED:\nNAILS & WAX",
  subheading = "Aurora Beauty by Drea",
  body = "At Aurora Beauty by Drea, we offer luxurious nail and wax treatments. Enjoy flawless nail designs, soothing paraffin wax, and expert care in a relaxing atmosphere.",
  ctaLabel = "BOOK AN APPOINTMENT",
  ctaHref = "/booking",
  slides,
}: BookingSectionProps) {
  const safeSlides = useMemo(() => slides.filter((s) => !!s?.src), [slides]);

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);

  const hasSlides = safeSlides.length > 0;
  const current = safeSlides[index] ?? safeSlides[0];
  const prev = safeSlides[(index - 1 + safeSlides.length) % safeSlides.length];

  function goPrev() {
    if (safeSlides.length < 2) return;
    setDir("prev");
    setIndex((i) => (i - 1 + safeSlides.length) % safeSlides.length);
    setAnimKey((k) => k + 1);
  }

  function goNext() {
    if (safeSlides.length < 2) return;
    setDir("next");
    setIndex((i) => (i + 1) % safeSlides.length);
    setAnimKey((k) => k + 1);
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-[#fbf6f7]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24">
        {/* top text row */}
        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10">
          <div>
            <p className="text-xs tracking-wide text-neutral-700">{subheading}</p>
            <h2 className="mt-3 whitespace-pre-line font-serif text-2xl leading-tight text-neutral-900 sm:text-3xl md:mt-4 md:text-5xl">
              {heading}
            </h2>
          </div>

          <div className="md:pt-10">
            <p className="max-w-md text-xs leading-5 text-neutral-700 sm:text-sm sm:leading-6">{body}</p>

            <div className="mt-4 md:mt-6">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded bg-pink-200 px-4 py-2 text-[10px] font-medium tracking-wide text-neutral-900 shadow-sm transition hover:bg-pink-300 md:px-5 md:py-2.5 md:text-[11px]"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>

        {/* stage */}
        <div className="relative mt-8 md:mt-14">
          {/* FULL-BLEED black band */}
          <div className={["absolute inset-x-0", BAND_TOP, BAND_H, "bg-black"].join(" ")} />

          <div className="relative mx-auto max-w-4xl">
            {/* peek image */}
            {hasSlides && prev?.src && (
              <div className="absolute left-[-30px] top-10 hidden h-[240px] w-[220px] overflow-hidden md:block">
                <Image src={prev.src} alt={prev.alt ?? ""} fill className="object-cover" />
              </div>
            )}

            {/* MAIN FRAME (change FRAME_H_* constants above) */}
            <div
              className={[
                "relative z-10 mx-auto mt-6 w-full max-w-3xl shadow-2xl md:mt-10",
                FRAME_H_MOBILE,
                FRAME_H_DESKTOP,
              ].join(" ")}
            >
              <div
                key={animKey}
                className={[
                  "absolute inset-0",
                  "animate-[fadeSlide_420ms_ease-out_forwards]",
                  dir === "next" ? "origin-left" : "origin-right",
                ].join(" ")}
              >
                {hasSlides && current?.src ? (
                  <Image
                    src={current.src}
                    alt={current.alt ?? ""}
                    fill
                    priority
                    // ✅ no cropping (fits all). switch to object-cover if you want no white space.
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="grid h-full place-items-center bg-white text-sm text-neutral-500">
                    No slides provided
                  </div>
                )}
              </div>
            </div>

            {/* arrows */}
            <div className="relative z-20 mx-auto mt-4 flex max-w-3xl items-center justify-center gap-3 md:mt-6">
              <button
                type="button"
                onClick={goPrev}
                disabled={!hasSlides || safeSlides.length < 2}
                className="grid h-9 w-9 place-items-center rounded-full border border-neutral-300 bg-white/90 text-lg shadow-sm backdrop-blur hover:bg-white disabled:opacity-40 md:h-10 md:w-10"
                aria-label="Previous"
              >
                ←
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={!hasSlides || safeSlides.length < 2}
                className="grid h-9 w-9 place-items-center rounded-full border border-neutral-300 bg-white/90 text-lg shadow-sm backdrop-blur hover:bg-white disabled:opacity-40 md:h-10 md:w-10"
                aria-label="Next"
              >
                →
              </button>
            </div>

            {/* space so the band shows */}
            <div className="h-24 md:h-32 lg:h-40" />
          </div>
        </div>
      </div>

      {/* animation keyframes */}
      <style jsx global>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateX(${dir === "next" ? "18px" : "-18px"}) scale(0.99);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
