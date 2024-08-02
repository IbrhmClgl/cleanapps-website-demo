import "keen-slider/keen-slider.min.css";

import React, { useState } from "react";

import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";
import SliderArrows from "./SliderArrows";
import { refereceImagesArr } from "../data/referenceImagesArr";
import { useKeenSlider } from "keen-slider/react";

function References() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 30 },
      },
    },
    slides: {
      origin: "center",
      perView: 2,
      spacing: 25,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <section
        id="references"
        className={`sm:container mx-auto py-10 px-4 relative`}
      >
        <Heading title="Referenzen" />

        <div
          ref={sliderRef}
          className="keen-slider !max-w-[1010px] mx-auto py-4  md:justify-center"
        >
          {refereceImagesArr &&
            refereceImagesArr.map((img, index) => {
              return (
                <div
                  key={index}
                  className="keen-slider__slide  !w-[150px]   md:!max-w-[200px]  md:!min-w-[200px]  flex  border-[3px] border-bg-page border-solid rounded-2xl   shadow-[0px_0px_15px_1px_#656565]  "
                >
                  <Link
                    rel="preload"
                    as={img.href}
                    href={img.href}
                    legacyBehavior
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="relative text-center flex justify-center "
                    >
                      <Image
                        className="text-center w-full h-full object-contain"
                        src={img.src}
                        blurDataURL={img.src}
                        alt={img.alt}
                        width={200}
                        height={150}
                        // priority={true}
                        placeholder="blur"
                      />
                    </a>
                  </Link>
                </div>
              );
            })}

          {/*---------- Slider library arrows ----------*/}
          {loaded && instanceRef.current && (
            <>
              <SliderArrows
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <SliderArrows
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide === instanceRef.current.track.details.maxIdx
                }
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default References;
