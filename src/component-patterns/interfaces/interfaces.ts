import { ReactElement, type CSSProperties } from "react";

interface Element {
  className?: string;
  styles?: CSSProperties;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductCardProps extends Element {
  product: Product;
  children?: ReactElement | ReactElement[];
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  increaseBy: (value: number) => void;
  counter: number;
  product: Product;
}

export interface TitleProps extends Element {
  title?: string;
}

export interface ImageProps extends Element {
  img?: string | undefined;
}

export interface ButtonsProps extends Element {}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (props: TitleProps) => JSX.Element;
  Image: (props: ImageProps) => JSX.Element;
  Buttons: (props: ButtonsProps) => JSX.Element;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface IShoppingCart {
  [key: string]: ProductInCart;
}
