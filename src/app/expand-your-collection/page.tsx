"use client";

import {
  MagnifyingGlassIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ComputerDesktopIcon,
  SignalIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";
import styles from "./page.module.css";
import Image from "next/image";
import wavesSvg from "@/public/waves.svg";
import VideoWindow from "../why-join-us/VideoWindow";

// https://s3-alpha-sig.figma.com/img/4884/8512/db2b7a8550bf0cb7642ab1c51682f47c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HHGVgfMJRerdw165vrC3hjqFml3~Jo0Xs5w4SbTHrFqB~IRAWtF5t1yahp8U5J~8fJIkFdcDhE9l4vZVWFfOW635iZ6oDXmqGudCXeerVzCzh7uYELOXiNJwVwJVQp2QGoUFcZkI40-DtK0tldjmx75BdbZbEotQNoHHkzM-XWrhfs8jQ92BtP~bXJXDJZKOLDJxVt45mDEbKEpG8aMYCl2c-PYHO2vb9xemutbLvvAy4JDmhefycBrkA~AuN88qSPVxZRsAxKIVXe~I1~rBCp6wxao1Nj8l7IsmWNL-nx5RDcnsjHjUOO9jqe3tUWjGzYkz0f0~s3xbcVvUENVCNg__
// https://s3-alpha-sig.figma.com/img/1c58/67c1/ae5c8652360f15ed8928bae486c8af2a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=foWG2S5G9ojY6Mu5W-n1dKbb0YHwwfbqGI5bdPkQES8uunEJXQAWEnmYJuavf1yu5TuWJHFKCd4D55KVuOPbC7nQRe0Gw-6EAulkf5c6plT-4KS-jC3LglUNzgcI4-iyzOCLMogw5FFNIEZdM-3dr6kg1p9tttojtoMI54fy7rV8LAgaMJcqfqdyJSzZ8T8BTMI51np~NL170MNVj4DSLGtTPQpoPCw4-wzQ4X~-pxcmqHQ4UldnVNjHkPgQ8SRFN61BX9iwm70z0Qrts1x0rJyGw0d-t83z-f1RAdh5Siyl9mwrnCD9VYh2ULiHY~wzUK0B22OkbaPmmNy2dEMlqw__

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
      <div className='flex flex:col md:flex-row justify-between items-start mx-20 md:gap-20 md:pb-32 z-10'>
        <div className='flex justify-start w-64 flex-col md:gap-4'>
          <div className='flex justify-start items-center p-4 rounded-lg bg-white shadow-md'>
            <MagnifyingGlassIcon color='#0F172A' className='w-6 h-6' />
            <div className='pl-4 pr-2 font-medium text-[#0F172A] text-xl'>Bibendum tellus</div>
            <ArrowRightIcon color='#0F172A' className='w-6 h-6' />
          </div>
          <div className='flex justify-start items-center p-4 rounded-lg'>
            <ShieldCheckIcon color='#0F172A' className='w-6 h-6' />
            <div className='pl-4 pr-2 font-medium text-[#0F172A] text-xl'>Cras eget</div>
          </div>
          <div className='flex justify-start items-center p-4 rounded-lg'>
            <RocketLaunchIcon color='#0F172A' className='w-6 h-6' />
            <div className='pl-4 pr-2 font-medium text-[#0F172A] text-xl'>Dolor pharetra</div>
          </div>
          <div className='flex justify-start items-center p-4 rounded-lg'>
            <ComputerDesktopIcon color='#0F172A' className='w-6 h-6' />
            <div className='pl-4 pr-2 font-medium text-[#0F172A] text-xl'>Amet, fringilla</div>
          </div>
          <div className='flex justify-start items-center p-4 rounded-lg'>
            <SignalIcon color='#0F172A' className='w-6 h-6' />
            <div className='pl-4 pr-2 font-medium text-[#0F172A] text-xl'>Amet nibh</div>
          </div>
          <div className='flex justify-start items-center p-4 rounded-lg'>
            <AdjustmentsVerticalIcon color='#0F172A' className='w-6 h-6' />
            <div className='pl-4 pr-2 font-medium text-[#0F172A] text-xl'>Sed velit</div>
          </div>
        </div>
        <VideoWindow
          imageSrc={
            "https://s3-alpha-sig.figma.com/img/4884/8512/db2b7a8550bf0cb7642ab1c51682f47c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HHGVgfMJRerdw165vrC3hjqFml3~Jo0Xs5w4SbTHrFqB~IRAWtF5t1yahp8U5J~8fJIkFdcDhE9l4vZVWFfOW635iZ6oDXmqGudCXeerVzCzh7uYELOXiNJwVwJVQp2QGoUFcZkI40-DtK0tldjmx75BdbZbEotQNoHHkzM-XWrhfs8jQ92BtP~bXJXDJZKOLDJxVt45mDEbKEpG8aMYCl2c-PYHO2vb9xemutbLvvAy4JDmhefycBrkA~AuN88qSPVxZRsAxKIVXe~I1~rBCp6wxao1Nj8l7IsmWNL-nx5RDcnsjHjUOO9jqe3tUWjGzYkz0f0~s3xbcVvUENVCNg__"
          }
          width={759}
          height={421}
          playIcon={false}
        />
      </div>
      <Image className='w-full absolute top-[3785px] z-0' src={wavesSvg} width={1440} height={684} alt='Wave' />
    </div>
  );
}
