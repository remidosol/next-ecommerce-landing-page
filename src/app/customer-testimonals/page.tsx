"use client";

import { SliderNextButton, SliderPrevButton } from "@/app/components/Buttons/SliderButtons/SliderPrevNextButtons";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./page.module.css";
import TestimonialSlider from "./TestimonalSlider";
import useDimensions from "../hooks/useDimensions";

export default function TestimonalsSection() {
  const { windowDimensions } = useDimensions();
  const options: EmblaOptionsType = { loop: false, align: "start", skipSnaps: false };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section>
      <div className={styles.container}>
        <div className='flex flex-row m-20 justify-end items-center md:gap-12'>
          <div className='flex flex-grow text-[56px] leading-[62px] font-extrabold text-[#0F172A]'>
            Because they love us
          </div>
          {windowDimensions.width > 748 ? (
            <>
              <SliderPrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <SliderNextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </>
          ) : (
            <></>
          )}
        </div>
        <TestimonialSlider emblaRef={emblaRef} options={options} />
        <div className='absolute bottom-0 top-[3060px] w-[95%] left-0 ml-10 right-10 -mr-10 h-96 bg-[#FDE68A] z-0'></div>
      </div>
    </section>
  );
}
