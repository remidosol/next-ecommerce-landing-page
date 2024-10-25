import Image from "next/legacy/image";
import styles from "./TestimonalCard.module.css";
import React from "react";
import { TestimonalCardProps } from "../../../types/TestimonalCard";

const TestimonalCard: React.FC<TestimonalCardProps> = ({ data, ...props }) => {
  return (
    <div className={`${styles.testimonal_card}`} {...props}>
      <div className='flex flex-col p-8 gap-4'>
        {/* Header with Icon */}
        <div className='flex flex-row justify-start items-start py-4'>
          {/* Header Icon */}
          <div className='mr-2'>
            {data.header.headerVisual
              ? data.header.headerVisual
              : data.header.headerIconSrc &&
                data.header.headerIconAlt && <Image src={data.header.headerIconSrc} alt={data.header.headerIconAlt} />}
          </div>
          {/* Header Text */}
          <div className='font-bold text-2xl text-[#475569]'>{data.header.headerText}</div>
        </div>
        {/* Description */}
        <div className='font-normal text-2xl text-[#0F172A]'>{data.description}</div>
        {/* Testimonal Owner */}
        <div className='flex flex-row justify-start items-center pt-4'>
          {/* Testimonal Owner Avatar */}
          <div className='flex w-16 h-16 mr-4 bg-transparent'>
            <Image
              className='rounded-full'
              width={64}
              height={64}
              layout='fixed'
              objectFit='cover'
              src={data.testimonalOwner.avatar.avatarSrc}
              alt={data.testimonalOwner.avatar.avatarAlt}
            />
          </div>
          {/* Testimonal Owner Info */}
          <div className='flex flex-col justify-end'>
            {/* Testimonal Owner Name */}
            <div className='text-lg text-[#0F172A]'>{data.testimonalOwner.fullName}</div>
            {/* Testimonal Owner Position */}
            <div className='text-base text-[#475569]'>{data.testimonalOwner.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCard;
