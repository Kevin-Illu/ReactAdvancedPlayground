import { LazyExoticComponent, lazy } from "react";
// import { FirstPage, SecondPage, ThirdPage } from "../ModuleLazyLoad/pages";

const FirstPage = lazy(() => import("../ModuleLazyLoad/pages/FirstPage"));
const SecondPage = lazy(() => import("../ModuleLazyLoad/pages/SecondPage"));
const ThirdPage = lazy(() => import("../ModuleLazyLoad/pages/ThirdPage"));

type JSXComponent = () => JSX.Element

interface Route {
  to: string;
  path: string;
  nameLink: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

export const routes: Route[] = [
  {
    to: "/FirstPageComposed",
    path: "FirstPageComposed",
    Component: FirstPage,
    nameLink: "First page",
  },
  {
    to: "/SecondPageComposed",
    path: "SecondPageComposed",
    Component: SecondPage,
    nameLink: "Second page",
  },
  {
    to: "/ThirdPageComposed",
    path: "ThirdPageComposed",
    Component: ThirdPage,
    nameLink: "Third page",
  },
];
