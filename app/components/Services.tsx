import Link from "next/link";

type Service = {
  name: string;
  priceFrom: string;
  tags: string[];
};

const services: Service[] = [
  // MANICURE
  {
    name: "Regular Manicure",
    priceFrom: "£15",
    tags: ["Manicure"],
  },
  {
    name: "Gel Manicure",
    priceFrom: "£25",
    tags: ["Manicure", "Gel"],
  },
  {
    name: "Gel Manicure & Removal",
    priceFrom: "£28",
    tags: ["Manicure", "Gel"],
  },

  // PEDICURE
  {
    name: "Regular Pedicure",
    priceFrom: "£25",
    tags: ["Pedicure"],
  },
  {
    name: "Gel Pedicure",
    priceFrom: "£32",
    tags: ["Pedicure", "Gel"],
  },

  // COMBO
  {
    name: "Gel Manicure & Pedicure",
    priceFrom: "£57",
    tags: ["Manicure", "Pedicure", "Gel"],
  },

  // ACRYLIC
  {
    name: "Acrylics Full Set with Gel",
    priceFrom: "£30",
    tags: ["Acrylic", "Gel"],
  },
  {
    name: "Acrylics Infill with Gel",
    priceFrom: "£25",
    tags: ["Acrylic", "Gel"],
  },
];

export default function ServicesPage() {
  return (
    <main id="services" className="bg-[#fbf6f7] px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center font-serif text-2xl tracking-wide text-neutral-900 sm:text-3xl md:text-5xl">
          LUXURY NAIL AND
          <br />
          WAX TREATMENTS
        </h1>

        <div className="mt-8 grid gap-4 sm:gap-6 md:mt-10 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded bg-white/60 px-4 py-4 shadow-sm ring-1 ring-pink-100 backdrop-blur-sm sm:px-6 sm:py-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex-1">
                  <h3 className="text-xs font-medium text-neutral-900 sm:text-sm">
                    {s.name}
                  </h3>

                  {/* TAGS */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-pink-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-2 text-xs text-neutral-700 sm:mt-3">
                    <span className="text-neutral-500">From </span>
                    <span className="font-medium">{s.priceFrom}</span>
                  </p>
                </div>

                <Link
                  href="/booking"
                  className="self-start inline-flex h-7 items-center justify-center rounded border border-pink-200 bg-white px-3 text-[10px] font-medium tracking-wide text-neutral-900 hover:bg-pink-50 sm:mt-1"
                >
                  BOOK
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded bg-pink-200 px-6 py-3 text-[11px] font-medium tracking-wide text-neutral-900 shadow-sm hover:bg-pink-300"
          >
            BROWSE ALL SERVICES
          </Link>
        </div>
      </div>
    </main>
  );
}
