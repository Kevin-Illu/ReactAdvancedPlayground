import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import { TitleProps } from "../interfaces/interfaces";

export const ProductTitle = ({ title, className, styles }: TitleProps) => {
  const { product } = useContext(ProductContext);
  return (
    <p className={`${className} py-4`} style={styles}>
      {title ? title : product.title}
    </p>
  );
};
