"use client";

import Image from "next/legacy/image";
import styles from "./ProductCard.module.css";
import React, { useEffect, useState } from "react";
import ButtonWithIcon from "../../Buttons/ButtonWithIcon/ButtonWithIcon";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { ProductCardProps } from "../../../types/ProductCard";

const ProductCard: React.FC<ProductCardProps> = ({ data, ...props }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 640,
    height: 640,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions.width]);

  return (
    <div className={`${styles.product_card}`} {...props}>
      {/* Product Image */}
      <div className='w-96 h-56'>
        <Image
          src={data.header.headerImageSrc}
          className='w-96 h-56 rounded-t-xl'
          width={394}
          height={220}
          objectFit='cover'
          alt={data.header.headerImageAlt}
        />
      </div>
      <div className='flex flex-col m-8 items-start justify-start'>
        <div className='font-bold text-white text-2xl'>{data.title}</div> {/* Title */}
        <div className='font-normal text-white text-lg'>{data.description}</div> {/* Description */}
        {/* Button with icon */}
        <ButtonWithIcon className={styles.buy_now_button} Icon={() => <ShoppingCartIcon width={24} height={24} />}>
          <div className='mx-4'>Buy Now</div>
        </ButtonWithIcon>
        {/* <div className='flex w-80 h-14 justify-center m-8 py-4 items-center self-center bg-transparent hover:bg-white border-2 border-white rounded-lg'></div> */}
      </div>
    </div>
  );
};

export default ProductCard;
