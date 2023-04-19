/**
 * 路由懒加载react18的做法
 * 项目小用懒加载看出提高多少性能，项目大了之后感觉比较明显
 */
import React from "react";
import { Spinner } from "../components/index";
const lazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Component />
    </React.Suspense>
  );
};

export default lazyLoad;
