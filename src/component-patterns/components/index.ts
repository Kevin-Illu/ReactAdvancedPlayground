import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
import { ProductButtons } from "./ProductButtons";

export { ProductImage } from "./ProductImage";
import { ProductImage } from "./ProductImage";

export { ProductTitle } from "./ProductTitle";
import { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
