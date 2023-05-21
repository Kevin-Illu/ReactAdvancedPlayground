import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../ModuleLazyLoad/pages/NoLazy";
// import { FirstPage, SecondPage, ThirdPage } from "../ModuleLazyLoad/pages";

const LazyLayout = lazy(() => import("../ModuleLazyLoad/layout/LazyLayout"));
// const FirstPage = lazy(() => import("../ModuleLazyLoad/pages/FirstPage"));
// const SecondPage = lazy(() => import("../ModuleLazyLoad/pages/SecondPage"));
// const ThirdPage = lazy(() => import("../ModuleLazyLoad/pages/ThirdPage"));

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  nameLink: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    nameLink: "DashBoad",
  },
  {
    to: "/noLazyLoad",
    path: "noLazyLoad",
    Component: NoLazy,
    nameLink: "noLazyLoad",
  },
];
