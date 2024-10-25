"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import styles from "./page.module.css";
import Image from "next/image";
import wavesSvg from "@/public/waves.svg";

export default function CollectionSection() {
  return (
    <div className={styles.container}>
      <div className='flex flex-col md:mt-20 md:mx-20 md:gap-8 z-10'>
        <div className='font-extrabold text-[56px] text-[#0F172A]'>Grow your collection</div>
        <div className='font-normal text-lg text-[#0F172A]'>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non
          turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque
          placerat at bibendum quam tellus.
        </div>
      </div>
      <div className='flex flex:col h-[556px] md:flex-row justify-start items-start md:gap-10 md:pb-32 z-10'>
        <div className='font-extrabold text-[56px] text-[#0F172A]'>asdasdsa</div>
        <div className='font-normal text-lg text-[#0F172A]'>asdasads</div>
      </div>
      <Image className='w-full absolute top-[3785px] z-0' src={wavesSvg} width={1440} height={684} alt='Wave' />
    </div>
  );
}
