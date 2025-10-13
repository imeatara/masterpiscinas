import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function CarouselGallery({ slides = [] }) {
  return (
    <Carousel opts={{ loop: true }} className="w-full">
      <PhotoProvider>
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <PhotoView key={i} src={s.src?.src || s.src}>
                <figure className="relative rounded-2xl overflow-hidden">
                  <img
                    src={s.src?.src || s.src}
                    alt={s.alt || ""}
                    width={1920}
                    height={1080}
                    className="w-full h-[18rem] sm:h-[24rem] md:h-[32rem] lg:h-[40rem] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  {s.alt && (
                    <figcaption className="bottom-0 absolute bg-black/25 backdrop-blur-sm px-4 md:px-8 py-3 w-full text-white text-sm sm:text-base">
                      {s.alt}
                    </figcaption>
                  )}
                </figure>
              </PhotoView>
            </CarouselItem>
          ))}
        </CarouselContent>
      </PhotoProvider>

      <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10" />
      <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white shadow-md rounded-full w-10 h-10" />
    </Carousel>
  );
}
