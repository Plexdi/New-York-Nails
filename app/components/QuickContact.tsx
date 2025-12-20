export default function QuickContact() {
    return (
      <section className="bg-[#fbf6f7] px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-serif text-2xl text-neutral-900 sm:text-3xl md:mb-10 md:text-4xl">
            QUICK CONTACT
          </h2>
  
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {/* MAP */}
            <div className="md:col-span-1">
              <div className="overflow-hidden rounded bg-white/60 ring-1 ring-pink-100">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="New York Nails Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.065138220352!2d-0.020772287631806646!3d51.581507505169206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761deb8fbef2e7%3A0xd1f99f976020f2b6!2sNew%20York%20Nails!5e1!3m2!1sen!2suk!4v1766265034781!5m2!1sen!2suk"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
  
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=51.5815075,-0.0207723"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs font-medium tracking-wide text-neutral-900"
              >
                DIRECTIONS →
              </a>
            </div>
  
            {/* OPENING TIMES */}
            <div className="md:col-span-2">
              <h3 className="mb-4 text-sm font-medium text-neutral-900 md:text-base">
                Opening Times
              </h3>
  
              <ul className="space-y-2 text-xs text-neutral-700 sm:text-sm">
                <li className="flex justify-between">
                  <span>Monday</span>
                  <span>10am – 7pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Tuesday</span>
                  <span>10am – 7pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Wednesday</span>
                  <span>Closed</span>
                </li>
                <li className="flex justify-between">
                  <span>Thursday</span>
                  <span>10am – 7pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span>
                  <span>10am – 7pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10am – 7pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>11am – 5pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  