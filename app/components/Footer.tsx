import Link from "next/link";
import FooterSubscribeForm from "./FooterSubscriberForm";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#fbf6f7] px-4 pt-10 md:px-6 md:pt-14">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div className="grid gap-8 md:grid-cols-3 md:items-start md:gap-10">
          {/* Brand */}
          <div>
            <div className="font-serif text-base text-neutral-900 md:text-lg">
              New York Nails
            </div>
            <p className="mt-2 max-w-xs text-xs leading-5 text-neutral-600">
              Luxury nails treatments. Book online or contact us for more
              information.
            </p>
          </div>

          {/* Nav + Social */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-1 md:gap-8 md:justify-self-center">
            <nav className="text-xs text-neutral-700">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-neutral-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-neutral-900">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-neutral-900">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-neutral-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-neutral-900">
                    FAQs
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4 text-neutral-700">
              {/* Replace hrefs with your real links */}
              <a
                href="https://instagram.com/newyorknails_E17"
                target="_blank"
                rel="noreferrer"
                className="text-xs hover:text-neutral-900"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-neutral-300/60" />

        {/* BOTTOM */}
        <div className="relative z-10 flex flex-col gap-4 py-6 text-xs text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">© {new Date().getFullYear()} New York Nails. All Rights Reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-5">
            <Link href="/privacy" className="hover:text-neutral-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900">
              Terms of Services
            </Link>
            <Link href="/legal" className="hover:text-neutral-900">
              Legal Info
            </Link>
          </div>

          <p className="text-center text-neutral-500 md:text-left">
            Powered by <span className="text-neutral-700">Plexdi</span>
          </p>
        </div>
      </div>

      {/* BIG WORDMARK */}
      <div className="pointer-events-none select-none">
        <p className="mt-2 border-t border-neutral-300/60 py-6 text-center font-serif text-3xl leading-none text-neutral-900/90 sm:text-5xl md:py-10 md:text-[86px]">
          New York Nails
        </p>
      </div>
    </footer>
  );
}
