import TestimonalCard from "@/components/Cards/TestimonalCard/TestimonalCard";
import { testimonials } from "@/data";
import { EmblaOptionsType } from "embla-carousel";
import { EmblaViewportRefType } from "embla-carousel-react";

type PropType = {
  options?: EmblaOptionsType;
  emblaRef: EmblaViewportRefType;
};

export default function TestimonialSlider({ options, emblaRef }: PropType) {
  return (
    <div className='embla w-[95%] z-10' ref={emblaRef}>
      <div className='embla__container flex justify-center items-center md:gap-6'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%]'>
            <TestimonalCard key={index} data={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}
