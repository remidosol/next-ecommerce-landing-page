"use client";

import { PlayCircleIcon } from "@heroicons/react/20/solid";
import ButtonWithIcon from "@/components/Buttons/ButtonWithIcon/ButtonWithIcon";
import OutlinedButton from "@/components/Buttons/OutlinedButton/OutlinedButton";
import Header from "@/header/page";
import styles from "./page.module.css";
import Image from "next/legacy/image";
import snickerImage from "@/public/snicker-transparent.png";
import HeroFooterItem from "./HeroFooterItem";
import trophySvg from "@/public/trophy.svg";
import tunnelSvg from "@/public/tunnel.svg";
import tvSvg from "@/public/tv.svg";

export default function HeroSection() {
  return (
    <div className='z-0'>
      <Header />
      {/* Middle Part */}
      <div className={styles.middle_container}>
        {/* Writing Part */}
        <div className={styles.middle_left_container}>
          <div className='font-extrabold text-[56px] md:text-7xl text-[#0F172A] sm:text-[56px]'>
            Collectible Snickers
          </div>
          <div className='font-normal text-lg text-[#0F172A]'>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu
            imperdiet ipsum ultrices amet.
          </div>
          <div className='flex flex-row gap-4 max-h-14'>
            <OutlinedButton className={styles.sign_up_button}>
              <div className='font-medium text-xl leading-6 px-4 py-8'>Sign up now</div>
            </OutlinedButton>
            <ButtonWithIcon className={styles.watch_demo_button} Icon={() => <PlayCircleIcon width={20} height={20} />}>
              <div className='font-medium text-base leading-6 px-2 py-3'>Watch Demo</div>
            </ButtonWithIcon>
          </div>
        </div>
        {/* Snickers Visuals Part */}
        <div className={styles.middle_right_container}>
          <div className={styles.snicker_square}></div>
          <Image className='absolute min-w-[486px] min-h-[388px] mb-[35px]' src={snickerImage} alt='Snicker' />
        </div>
      </div>
      {/* Footer Part */}
      <div className={styles.footer_container}>
        <HeroFooterItem
          title='Nibh viverra'
          content='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
          Icon={() => {
            return (
              <div className='flex z-0'>
                <div className='absolute clip_square_diagonal ml-4 -mt-11 w-[60px] h-[60px] rounded-lg bg-[#0369A1] opacity-50 z-0'></div>
                <Image className='z-10' src={trophySvg} alt='Trophy' />
              </div>
            );
          }}
        />
        <HeroFooterItem
          title='Cursus amet'
          content='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
          Icon={() => {
            return (
              <div className='flex z-0'>
                <div className='absolute clip_half_diagonal transform rotate-180 ml-3 -mt-4 w-12 h-12 rounded-lg bg-[#15803D] opacity-50 z-0'></div>
                <Image className='z-10' src={tunnelSvg} alt='Tunnel' />
              </div>
            );
          }}
        />
        <HeroFooterItem
          title='Ipsum fermentum'
          content='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '
          Icon={() => {
            return (
              <div className='flex z-0'>
                <div className={styles.pink_circle_shape}></div>
                <Image className='z-10' src={tvSvg} alt='TV' />
              </div>
            );
          }}
        />
      </div>
      <div className='absolute right-0 bottom-0 top-56 h-[830px] w-[1428px] bg-[#FEF3C7] clip_half_diagonal_rectangle z-0'></div>
    </div>
  );
}
