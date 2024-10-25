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
    <div className='flex box-border flex-col justify-center items-start rounded-[20px] isolate border-[5px] border-solid border-white bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_15px_rgba(0,0,0,0.07)] z-10'>
      {/* Top Bar */}
      <div className='flex flew-row justify-center items-center p-4 gap-[5px] bg-white z-10'>
        <div className='w-3 h-3 bg-[#E11D48] rounded-full'></div> {/* Red Circle */}
        <div className='w-3 h-3 bg-[#FBBF24] rounded-full'></div> {/* Yellow Circle */}
        <div className='w-3 h-3 bg-[#22C55E] rounded-full'></div> {/* Green Circle */}
      </div>
      {/* Video */}
      {/* <div className='flex justify-center items-center z-10'></div> */}
      <div className='flex absolute justify-center items-center self-center w-36 h-36 rounded-full bg-[#121619BF] z-20'>
        <PlayIcon color='#FFF' className='w-24 h-24 z-20' />
      </div>
      <Image className='rounded-b-[20px]' src={imageSrc} width={width} height={height} alt='Video Image' />
    </div>
  );
};

export default VideoWindow;
