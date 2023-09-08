import { useState } from "react";
import {
  IShoppingCart,
  Product,
  ProductInCart,
} from "../component-patterns/interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCart>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prevShoppingCart) => {
      if (count == 0) {
        const { [product.id]: deletedItem, ...rest } = prevShoppingCart;
        return rest;
      }

      return {
        ...prevShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
