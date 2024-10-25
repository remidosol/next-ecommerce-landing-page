"use client";

import { productList } from "@/data";
import OutlinedButton from "@/components/Buttons/OutlinedButton/OutlinedButton";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";
import FeatureShapes from "./FeatureShapes";
import styles from "./page.module.css";

export default function FeaturesSection() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_text}>The best of the best</div>
          <div className='flex'>
            <OutlinedButton className={styles.sign_up_button}>Sign up now</OutlinedButton>
          </div>
        </div>
        <div className={styles.product_list}>
          <FeatureShapes />
          {productList.map((productDataItem, idx) => (
            <ProductCard key={idx} data={productDataItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
