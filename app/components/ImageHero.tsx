import Image from "next/image";

type ImageHeroProps = {
  src: string;
  alt: string;
  height?: number; // px
  priority?: boolean;
  overlay?: boolean; // optional dark overlay if you add text later
};

export default function ImageHero({
  src,
  alt,
  height = 520, // change this to make it more massive
  priority = false,
  overlay = false,
}: ImageHeroProps) {
  // Responsive height: smaller on mobile, larger on desktop
  // Use Tailwind classes for responsive heights
  return (
    <section className="w-full">
      <div
        className="relative w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />

        {overlay && (
          <div className="absolute inset-0 bg-black/20" />
        )}
      </div>
    </section>
  );
}
