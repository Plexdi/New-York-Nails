"use client";

export default function FooterSubscribeForm() {
  return (
    <form
      className="mt-4 flex max-w-sm gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Subscribed! (not wired yet)");
      }}
    >
      <input
        type="email"
        required
        placeholder="Email"
        className="h-10 w-full rounded border border-neutral-200 bg-white px-3 text-sm outline-none focus:border-pink-300"
      />
      <button
        type="submit"
        className="h-10 shrink-0 rounded bg-pink-200 px-4 text-[11px] font-medium tracking-wide text-neutral-900 shadow-sm hover:bg-pink-300"
      >
        →
      </button>
    </form>
  );
}
