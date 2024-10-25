"use client";

import styles from "./page.module.css";
import Image from "next/image";
import googlePlayBadge from "@/public/google-play-badge.svg";
import appStoreBadge from "@/public/app-store-badge.svg";
import youtubeBadge from "@/public/youtube-icon.svg";
import facebookBadge from "@/public/facebook-icon.svg";
import twitterBadge from "@/public/twitter-icon.svg";
import instagramBadge from "@/public/instagram-icon.svg";
import linkedinBadge from "@/public/linkedin-icon.svg";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function FooterSection() {
  return (
    <div className={styles.container}>
      <div className='flex flex-col md:flex-row justify-center items-start mx-4 py-12 gap-12 border-b-[1px] border-[#334155]'>
        {/* Products */}
        <div className='flex w-72 flex-col justify-start items-center'>
          <div className='self-start font-medium text-base text-[#E2E8F0] py-3'>Products</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Pricing</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Overview</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Browse</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Accessibility</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Five</div>
        </div>
        {/* Solutions */}
        <div className='flex w-72 flex-col justify-start items-center'>
          <div className='self-start font-medium text-base text-[#E2E8F0] py-3'>Solutions</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Brainstorming</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Ideation</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Wireframing</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Research</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Design</div>
        </div>
        {/* Support */}
        <div className='flex w-72 flex-col justify-start items-center'>
          <div className='self-start font-medium text-base text-[#E2E8F0] py-3'>Support</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Contact Us</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Developers</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Documentation</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Integrations</div>
          <div className='self-start font-normal text-base text-[#E2E8F0] py-3'>Reports</div>
        </div>
        {/* Get the App */}
        <div className='flex w-72 flex-col justify-start items-center gap-2'>
          <div className='self-start font-medium text-base text-[#E2E8F0]'>Get the App</div>
          <Image
            className='self-start'
            width={119.66}
            height={40}
            src={appStoreBadge}
            alt='Download on the App Store'
          />
          <Image className='self-start' width={135} height={40} src={googlePlayBadge} alt='Get it on Google Play' />
          <div className='self-start font-medium text-base text-[#E2E8F0] mt-12 mb-3'>Follow Us</div>
          <div className='self-start flex flex-row justify-start items-end gap-4'>
            <Image className='w-6 h-6' width={24} height={24} src={youtubeBadge} alt='Youtube' />
            <Image className='w-6 h-6' width={24} height={24} src={facebookBadge} alt='Youtube' />
            <Image className='w-6 h-6' width={24} height={24} src={twitterBadge} alt='Youtube' />
            <Image className='w-6 h-6' width={24} height={24} src={instagramBadge} alt='Youtube' />
            <Image className='w-6 h-6' width={24} height={24} src={linkedinBadge} alt='Youtube' />
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full md:flex-row content-end items-center px-4 py-6 gap-12'>
        <div className='w-2/3 font-normal text-base text-[#E2E8F0]'>Collers @ 2023. All rights reserved.</div>
        {/* GroupF */}
        <div className='flex flex-row flex-grow items-start md:gap-8'>
          <div className='font-normal text-base text-[#E2E8F0]'>Terms</div>
          <div className='font-normal text-base text-[#E2E8F0]'>Privacy</div>
          <div className='font-normal text-base text-[#E2E8F0]'>Contact</div>
          {/* with icon */}
          <div className='flex flex-row justify-center items-center gap-2'>
            <GlobeAltIcon color='#FFF' className='w-6 h-6' />
            <div className='font-normal text-base text-[#E2E8F0]'>EN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
