import Image from "next/image";
import styles from "./TestimonalCard.module.css";
import React from "react";
import { TestimonalCardProps } from "../../../types/TestimonalCard";

const TestimonalCard: React.FC<TestimonalCardProps> = ({ data, ...props }) => {
  return (
    <div className={`${styles.testimonal_card}`} {...props}>
      <div className='flex flex-col p-8'>
        {/* Header with Icon */}
        <div className='flex-row justify-start items-start py-4'>
          {/* Header Icon */}
          <div className='mr-2'>
            <Image src={data.header.headerIconSrc} alt={data.header.headerIconAlt} />
          </div>
          {/* Header Text */}
          <div className='font-bold text-2xl'>{data.header.headerText}</div>
        </div>
        {/* Description */}
        <div className='font-normal text-2xl'>{data.description}</div>
        {/* Testimonal Owner */}
        <div className='flex-row justify-start items-start pt-4'>
          {/* Testimonal Owner Avatar */}
          <div className='mr-4 rounded-full'>
            <Image src={data.testimonalOwner.avatar.avatarSrc} alt={data.testimonalOwner.avatar.avatarAlt} />
          </div>
          {/* Testimonal Owner Info */}
          <div className='flex-col '>
            {/* Testimonal Owner Name */}
            <div className='text-lg'>{data.testimonalOwner.fullName}</div>
            {/* Testimonal Owner Position */}
            <div className='text-base text-[#475569]'>{data.testimonalOwner.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCard;
