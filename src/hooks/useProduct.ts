import { useEffect, useRef, useState } from "react";
import {
  InitialValues,
  onChangeArgs,
  Product,
} from "../component-patterns/interfaces/interfaces";

interface args {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: args) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    console.log(initialValues?.count, value);
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);

    isMounted.current = true;
  }, [value]);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.maxCount && counter >= initialValues?.maxCount,
    maxValue: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
