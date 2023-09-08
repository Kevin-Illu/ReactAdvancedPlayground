import { ProductCard } from "../component-patterns/components/";
import { products } from "../component-patterns/data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div className="container">
      <h1>Shopping Page</h1>

      <div className="w-full flex flex-row gap-4 pt-8 items-start justify-between">
        <div className="grid grid-cols-3 col-span-4 gap-4">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              value={shoppingCart[product.id]?.count || 0}
              onChange={onProductCountChange}
            >
              <ProductCard.Image />
              <ProductCard.Title className="text-center capitalize text-xl" />
              <ProductCard.Buttons />
            </ProductCard>
          ))}
        </div>

        <div className="col-start-6 p-2 flex flex-col gap-4">
          {Object.entries(shoppingCart).map(([id, product]) => (
            <ProductCard
              key={id}
              product={product}
              className="w-[9.5rem]"
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductCard.Image />
              <ProductCard.Buttons />
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};
