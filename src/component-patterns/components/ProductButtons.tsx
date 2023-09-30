import { useCallback, useContext, useEffect, useState } from "react";

import { ProductContext } from "./ProductCard";
import { ButtonsProps } from "../interfaces/interfaces";

export const ProductButtons = ({ className, styles }: ButtonsProps) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);
  const isMaxReached = useCallback(
    () => !!maxCount && counter >= maxCount,
    [counter, maxCount]
  );

  return (
    <div
      className={`${className} grid grid-cols-3 w-fit pt-4 my-0 mx-auto`}
      style={styles}
    >
      <button className=" rounded-r-none" onClick={() => increaseBy(-1)}>
        <span>-</span>
      </button>
      <div className="bg-stone-950 w-full h-full grid place-items-center">
        <span className="p-none m-none">{counter}</span>
      </div>
      <button
        className="rounded-l-none disabled:bg-gray-500 disabled:text-black disabled:opacity-40"
        onClick={() => increaseBy(+1)}
        disabled={isMaxReached()}
      >
        <span>+</span>
      </button>
    </div>
  );
};
