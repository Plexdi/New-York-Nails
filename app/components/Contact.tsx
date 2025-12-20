"use client";

import { useState } from "react";

export default function ContactFormSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="bg-[#fbf6f7] px-4 pb-16 md:px-6 md:pb-20">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-start md:gap-10">
        {/* Left text */}
        <div>
          <p className="text-xs tracking-wide text-neutral-700">
            Aurora Beauty by Drea
          </p>
          <h2 className="mt-4 font-serif text-2xl leading-tight text-neutral-900 sm:text-3xl md:text-4xl">
            GET IN TOUCH
            <br />
            WITH US
          </h2>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Frontend only for now.
            // Later: send to API route / form provider.
            alert("Submitted! (Form not wired yet)");
          }}
          className="rounded bg-white/60 p-4 shadow-sm ring-1 ring-pink-100 backdrop-blur-sm sm:p-6"
        >
          <label className="block">
            <span className="mb-1 block text-[11px] font-medium text-neutral-700">
              Full Name
            </span>
            <input
              type="text"
              required
              className="w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-300"
              placeholder="e.g. Maria Walker"
            />
          </label>

          <label className="mt-4 block">
            <span className="mb-1 block text-[11px] font-medium text-neutral-700">
              Email
            </span>
            <input
              type="email"
              required
              className="w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-300"
              placeholder="e.g. example@gmail.com"
            />
          </label>

          <label className="mt-4 block">
            <span className="mb-1 block text-[11px] font-medium text-neutral-700">
              Message
            </span>
            <textarea
              required
              rows={4}
              className="w-full resize-none rounded border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-300"
              placeholder="Write your message here..."
            />
          </label>

          <label className="mt-4 flex items-center gap-2 text-xs text-neutral-700">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 accent-pink-300"
            />
            <span>
              I agree to the{" "}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            disabled={!agreed}
            className="mt-5 inline-flex items-center justify-center rounded bg-pink-200 px-6 py-3 text-[11px] font-medium tracking-wide text-neutral-900 shadow-sm hover:bg-pink-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </section>
  );
}
