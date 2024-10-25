"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import styles from "./page.module.css";
import VideoWindow from "./VideoWindow";
import Image from "next/image";
import OutlinedButton from "@/components/Buttons/OutlinedButton/OutlinedButton";
import WindowShapes from "./WindowShapes";
import { whyJoinUsSentences } from "@/data";

//
export default function WhyJoinUsSection() {
  return (
    <section>
      <div className={styles.container}>
        {/* Why Join us Section */}
        <div className={styles.inner_container}>
          <div className={styles.why_join_us}>
            <div className='font-extrabold text-[56px] text-[#0F172A]'>Why join us</div>
            <div className='flex flex-col justify-start items-start'>
              {whyJoinUsSentences.map((sentence, index) => (
                <div key={index} className='flex flex-row justify-center items-center gap-1 py-[6px]'>
                  <CheckIcon color='#15803D' width={24} height={24} className='w-6 h-6' />
                  <div className='font-normal text-base md:text-xl text-[#0F172A]'>{sentence}</div>
                </div>
              ))}
            </div>
            <OutlinedButton className={styles.sign_up_button}>
              <div className='font-medium text-xl leading-6 px-4 py-8'>Sign up now</div>
            </OutlinedButton>
          </div>
          {/* Video Section */}
          <WindowShapes>
            <VideoWindow
              imageSrc={
                "https://s3-alpha-sig.figma.com/img/4884/8512/db2b7a8550bf0cb7642ab1c51682f47c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HHGVgfMJRerdw165vrC3hjqFml3~Jo0Xs5w4SbTHrFqB~IRAWtF5t1yahp8U5J~8fJIkFdcDhE9l4vZVWFfOW635iZ6oDXmqGudCXeerVzCzh7uYELOXiNJwVwJVQp2QGoUFcZkI40-DtK0tldjmx75BdbZbEotQNoHHkzM-XWrhfs8jQ92BtP~bXJXDJZKOLDJxVt45mDEbKEpG8aMYCl2c-PYHO2vb9xemutbLvvAy4JDmhefycBrkA~AuN88qSPVxZRsAxKIVXe~I1~rBCp6wxao1Nj8l7IsmWNL-nx5RDcnsjHjUOO9jqe3tUWjGzYkz0f0~s3xbcVvUENVCNg__"
              }
              width={520}
              height={309}
            />
          </WindowShapes>
        </div>
      </div>
    </section>
  );
}
