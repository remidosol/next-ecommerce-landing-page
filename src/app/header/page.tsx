"use client";

import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import OutlinedButton from "@/components/Buttons/OutlinedButton/OutlinedButton";
import styles from "./page.module.css";
import useDimensions from "@/hooks/useDimensions";

export default function Header() {
  const { windowDimensions } = useDimensions();

  return windowDimensions.width < 768 ? (
    <div className={styles.container}>
      <div className={styles.big_text}>Collers</div>
      <Bars3BottomLeftIcon color='#78350F' className='w-6 h-6 self-center m-0 p-0' />
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.big_text}>Collers</div>
      <div className={styles.group}>
        <div className={styles.normal_text}>Products</div>
        <div className={styles.normal_text}>Solution</div>
        <div className={styles.normal_text}>Pricing</div>
        <div className={styles.normal_text}>Resources</div>
        <div className={styles.normal_text}>Log In</div>
        <OutlinedButton className={styles.sign_up_button}>
          <div className={styles.normal_text}>Sign up now</div>
        </OutlinedButton>
      </div>
    </div>
  );
}
