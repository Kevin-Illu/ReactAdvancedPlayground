import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../component-patterns/components/";

const product = {
  id: "1",
  title: "Coffe Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div className="container">
      <h1>Shopping Page</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image img="./coffee-mug.png" />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
