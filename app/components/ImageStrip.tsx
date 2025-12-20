import Image from "next/image";

type StripImage = {
  src: string;
  alt: string;
  tag?: string; // optional overlay label
};

type ImageStripProps = {
  images: StripImage[];
};

export default function ImageStrip({ images }: ImageStripProps) {
  return (
    <section id="gallery" className="bg-[#fbf6f7] px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 sm:gap-3">
            {images.map((img) => (
              <div
                key={img.src}
                className="relative h-[100px] w-[140px] shrink-0 overflow-hidden rounded-sm bg-white sm:h-[120px] sm:w-[160px] md:h-[140px] md:w-[200px]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 200px"
                />

                {img.tag && (
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="rounded bg-white/80 px-3 py-1 text-[11px] font-medium text-neutral-900 backdrop-blur">
                      {img.tag}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
