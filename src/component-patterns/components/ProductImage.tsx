import { useContext } from "react";

import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import { ImageProps } from "../interfaces/interfaces";

export const ProductImage = ({ img = "", className, styles }: ImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${className} rounded-lg`}
      style={styles}
      src={imgToShow}
      alt={"product image"}
    />
  );
};
