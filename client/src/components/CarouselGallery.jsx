import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselGallery({ slides }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map((s, i) => (
          <CarouselItem key={i}>
            <figure className="relative shadow rounded-3xl ring-1 ring-neutral-200/60 overflow-hidden">
              <div className="relative h-64 md:h-[28rem]">
                <img
                  src={s.src.src}
                  alt={s.alt}
                  width={1920}
                  height={1080}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-center object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="absolute -inset-10 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(255,255,255,0.25),transparent_70%)] pointer-events-none"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="bottom-0 absolute inset-x-0 flex justify-between items-center gap-4 px-4 md:px-6 py-3 text-white">
                <span className="opacity-90 text-sm/5">{s.alt}</span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
