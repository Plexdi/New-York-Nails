import { BOOKING_LINKS } from "../config/bookingLinks";

type Service = {
  bookingKey: keyof typeof BOOKING_LINKS;
  name: string;
  priceFrom: string;
  tags: string[];
};

const services: Service[] = [
  // MANICURE
  { bookingKey: "regularManicure", name: "Regular Manicure", priceFrom: "£15", tags: ["Manicure"] },
  { bookingKey: "gelManicure", name: "Gel Manicure", priceFrom: "£25", tags: ["Manicure", "Gel"] },
  { bookingKey: "gelManicureRemoval", name: "Gel Manicure & Removal", priceFrom: "£28", tags: ["Manicure", "Gel"] },

  // PEDICURE
  { bookingKey: "regularPedicure", name: "Regular Pedicure", priceFrom: "£25", tags: ["Pedicure"] },
  { bookingKey: "gelPedicure", name: "Gel Pedicure", priceFrom: "£32", tags: ["Pedicure", "Gel"] },

  // COMBO
  { bookingKey: "gelManiPedi", name: "Gel Manicure & Pedicure", priceFrom: "£57", tags: ["Manicure", "Pedicure", "Gel"] },
  { bookingKey: "RegularManiPediure", name: "Regular Manicure & Pedicure", priceFrom: "£40", tags: ["Manicure", "Pedicure"] },

  // ACRYLIC
  { bookingKey: "acrylicFullSet", name: "Acrylics Full Set with Gel", priceFrom: "£30", tags: ["Acrylic", "Gel"] },
  { bookingKey: "acrylicInfill", name: "Acrylics Infill with Gel", priceFrom: "£28", tags: ["Acrylic", "Gel"] },
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

        <div className="mt-8 grid gap-4 sm:gap-6 md:mt-10 md:grid-cols-3">
          {services.map((s) => {
            const url = BOOKING_LINKS[s.bookingKey];

            return (
              <div
                key={s.name}
                className="rounded bg-white/60 px-4 py-4 shadow-sm ring-1 ring-pink-100 backdrop-blur-sm sm:px-6 sm:py-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-xs font-medium text-neutral-900 sm:text-sm">{s.name}</h3>

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

                  {url ? (
                    <a
                      href={url}
                      className="self-start inline-flex h-7 items-center justify-center rounded border border-pink-200 bg-white px-3 text-[10px] font-medium tracking-wide text-neutral-900 hover:bg-pink-50 sm:mt-1"
                    >
                      BOOK
                    </a>
                  ) : (
                    <span className="self-start inline-flex h-7 items-center justify-center rounded border border-pink-200 bg-white/50 px-3 text-[10px] font-medium tracking-wide text-neutral-500 sm:mt-1">
                      BOOK
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
