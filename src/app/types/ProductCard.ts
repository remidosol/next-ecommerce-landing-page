export type ProductCardData = {
  header: {
    headerImageSrc: string;
    headerImageAlt: string;
  };
  title: string;
  description: string;
};

export type ProductCardProps = {
  data: ProductCardData;
  className?: string;
};
