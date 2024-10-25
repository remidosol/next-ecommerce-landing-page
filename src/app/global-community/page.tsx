"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import styles from "./page.module.css";
import Image from "next/image";
import worldMap from "@/public/map.svg";
import MarkerWithImage from "./MarkerWithImage";

//
export default function CommunitySection() {
  return (
    <div className={styles.container}>
      <div className='flex self-start absolute left-4 z-10'>
        <div className='absolute w-6 h-6 rounded-full left-[1106px] top-[530px] border-[3px] border-lime-400 box-border'></div>
        <div className='absolute w-6 h-6 rounded-full left-[981px] top-[381px] border-[3px] border-lime-400 box-border'></div>
        <div className='absolute w-4 h-4 rounded-full left-[609px] top-[109px] border-[3px] border-lime-400 box-border'></div>
        <div className='absolute w-4 h-4 rounded-full left-[1082px] top-[371px] border-[3px] border-lime-400 box-border'></div>
        <div className='absolute w-6 h-6 rounded-full left-[780px] top-[474px] border-[3px] border-lime-400 box-border'></div>
        <div className='absolute w-7.5 h-7.5 rounded-full left-[524px] top-[210px] border-[3px] border-lime-400 box-border'></div>
        <div className='absolute w-4 h-4 rounded-full left-[567px] top-[510px] border-[3px] border-lime-400 box-border'></div>
        <div className='absolute w-6 h-6 rounded-full left-[520px] top-[540px] border-[3px] border-lime-400 box-border'></div>
        <div className='absolute w-6 h-6 rounded-full left-[406px] top-[340px] border-[3px] border-lime-400 box-border'></div>
      </div>
      <Image className='flex justify-center content-center self-center py-11 ml-36' src={worldMap} alt='World Map' />
      <MarkerWithImage
        image={
          <Image
            src='https://s3-alpha-sig.figma.com/img/7776/a700/b44096b1fc330e8b20168d89aef4b5e7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLfYSgg-Gzq1CNGN2pEGeU9zCC~OcsK2dKx2BnKnfynK0QjCpuTk~KZvk2lW56AoNgt4p51Tdx~XaWI5L2S8nRN68uFyF2FZk2FSj~0k83~kRcLqCdnQwNRDt7Ym8TZiOZFVjepO22P74b2L3kFLSSVEzGmGzc2XYueUKJQxNQd7FddAXOphZ69NUM9WJs~kJqWx2maEzO6p89k3EHA0H7E4-6LJpDGDVabXH8pWWuoprWRM~rj7nQFY1qI-11vKSp6sG3H1~433-djHHPar5ElYTEmMa0fqYBBV~aks2DSatZ7CINWNf7J3V9aBN28tl~Yn-kbpMItoxm1SuOiaZQ__'
            alt='Cool Shoes'
            width={256}
            height={128}
            className='w-64 h-56 object-cover rounded-md'
          />
        }
      />
    </div>
  );
}
