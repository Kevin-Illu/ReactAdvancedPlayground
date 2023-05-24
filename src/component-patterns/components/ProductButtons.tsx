import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.btn} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div>{counter}</div>
      <button className={styles.btn} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
