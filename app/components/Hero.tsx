import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden bg-[#fbf6f7] m-0">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto h-full max-w-7xl px-6">
        <div className="grid h-full items-center md:grid-cols-2">
          {/* Left stays in the container */}
          <div className="relative z-10 max-w-xl">
            <h1 className="font-serif text-3xl leading-tight text-neutral-900 md:text-5xl">
              INDULGE IN
              <br />
              LUXURY NAIL AND WAX
              <br />
              TREATMENTS
            </h1>

            <p className="mt-4 text-sm text-neutral-700">
              @ New York Nails by Quynh Pham
            </p>

            <div className="mt-6">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded bg-pink-200 px-5 py-2.5 text-xs font-medium tracking-wide text-neutral-900 shadow-sm transition hover:bg-pink-300"
              >
                VIEW SERVICES
              </Link>
            </div>
          </div>

          {/* Right image bleeds to the right edge */}
          <div className="relative z-10 hidden h-full md:block"></div>
        </div>
      </div>

      {/* Right image positioned relative to section to bleed to edge */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[60vw] overflow-hidden md:block">
        <Image
          src="/FingerNails.png"
          alt="Nail set close-up"
          fill
          priority
          className="object-cover object-right"
        />
      </div>
    </section>
  );
}
