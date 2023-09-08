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
      const productInCart: ProductInCart = prevShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prevShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: deletedItem, ...rest } = prevShoppingCart;
      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
