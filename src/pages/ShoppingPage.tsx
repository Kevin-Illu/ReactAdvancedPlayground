import { ProductCard } from "../component-patterns/components/";
import { products } from "../component-patterns/data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  const product = products[0];

  return (
    <div className="container">
      <h1>Shopping Page</h1>

      <div className="w-full flex flex-row gap-4 pt-8 items-start justify-between">
        <div className="grid grid-cols-3 col-span-4 gap-4">
          <ProductCard
            product={product}
            initialValues={{
              count: 7,
              maxCount: 10,
            }}
            key={product.id}
            // value={shoppingCart[product.id]?.count || 0}
            onChange={onProductCountChange}
          >
            {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
              <>
                <ProductCard.Image />
                <ProductCard.Title className="text-center capitalize text-xl" />
                <ProductCard.Buttons />

                <div className="flex justify-between items-center px-2 pt-2 flex-wrap gap-2">
                  <span className="font-bold text-xl">
                    count: {count} - {maxCount}
                  </span>
                  <div className="flex justify-between w-full gap-2">
                    <button onClick={reset}>Reset</button>
                    {!isMaxCountReached && (
                      <button onClick={() => increaseBy(+2)}>+2</button>
                    )}
                    <button onClick={() => increaseBy(-2)}>-2</button>
                  </div>
                </div>
              </>
            )}
          </ProductCard>
        </div>
      </div>
    </div>
  );
};
