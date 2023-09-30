import { createContext } from "react";

import { useProduct } from "../../hooks/useProduct";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  value,
  onChange,
  className,
  styles,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div
        className={`${className} p-2 max-w-[16rem] h-fit bg-stone-700 rounded-lg`}
        style={styles}
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount || undefined,
          product,
          increaseBy: increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
