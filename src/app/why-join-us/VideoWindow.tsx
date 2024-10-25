import { PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import WindowShapes from "./WindowShapes";

type VideoWindow = {
  imageSrc: string;
  height: number;
  width: number;
};

const VideoWindow: React.FC<VideoWindow> = ({ imageSrc, height, width }) => {
  return (
    <div className='flex box-border flex-col justify-center items-start rounded-[20px] isolate border-[5px] border-solid border-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_15px_rgba(0,0,0,0.07)] z-10'>
      {/* Top Bar */}
      <div className='flex relative bg-transparent z-0'>
        {/* Pink Rounded Rectangle */}
        <div className='absolute w-[218px] h-[218px] left-[1100px] top-[314px] bg-[#BE185D] opacity-75 rounded-[50px] z-0'></div>

        {/* Yellow Rectangle */}
        <div className='absolute w-[666.28px] h-[217.93px] left-[605px] top-[410.95px] bg-[#FDE68A] transform rotate-[-45deg] z-0'></div>

        {/* Brown Square */}
        <div className='absolute w-[90px] h-[90px] left-[660px] top-[98px] bg-[#B45309] opacity-75 rounded-[30px] z-0'></div>

        {/* Blue Circle */}
        <div className='absolute w-[59px] h-[60px] left-[1118px] top-[-15px] bg-[#0369A1] opacity-75 rounded-full z-0'></div>

        {/* Green Circle */}
        <div className='absolute w-[85px] h-[86px] left-[750px] top-[373px] bg-[#15803D] opacity-75 rounded-full z-10'></div>

        {/* Pink Square */}
        <div className='absolute w-[74px] h-[74px] left-[1063px] top-[393px] bg-[#A21CAF] opacity-75 rounded-[30px] z-0'></div>
      </div>
      <div className='flex flew-row justify-center items-center p-4 gap-[5px] bg-white z-10'>
        <div className='w-3 h-3 bg-[#E11D48] rounded-full'></div> {/* Red Circle */}
        <div className='w-3 h-3 bg-[#FBBF24] rounded-full'></div> {/* Yellow Circle */}
        <div className='w-3 h-3 bg-[#22C55E] rounded-full'></div> {/* Green Circle */}
      </div>
      {/* Video */}
      <div className='flex justify-center items-center z-10'>
        <div className='flex absolute justify-center items-center w-36 h-36 rounded-full bg-[#121619BF] z-20'>
          <PlayIcon color='#FFF' className='absolute w-24 h-24 z-20' />
        </div>
        <Image className='rounded-b-[20px]' src={imageSrc} width={width} height={height} alt='Video Image' />
      </div>
      {/* <WindowShapes /> */}
    </div>
  );
};

export default VideoWindow;
