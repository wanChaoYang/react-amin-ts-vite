import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Layout from "@/view/layout";
import lazyLoad from "./lazyLoad";
export const routers: Array<object> = [
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/login",
    element: lazyLoad(React.lazy(() => import("@/view/login"))),
    meta: {
      unwntedAuth: true, //不需要登录权限
      title: "登录页",
      key: "login",
    },
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: lazyLoad(React.lazy(() => import("@/view/home"))),
        meta: { title: "首页", key: "home" },
      },
      {
        path: "orderMgt",
        element: lazyLoad(React.lazy(() => import("@/view/productManagement/orderMgt"))),
        meta: { title: "定单页", key: "orderMgt" },
      },
      {
        path: "addGoods",
        element: lazyLoad(React.lazy(() => import("@/view/productManagement/addGoods"))),
        meta: { title: "添加商品", key: "addGoods" },
      },
      {
        path: "goodsMgt",
        element: lazyLoad(React.lazy(() => import("@/view/productManagement/GoodsMgt"))),
        meta: { title: "商品管理", key: "goodsMgt" },
      },
      {
        path: "user",
        element: lazyLoad(React.lazy(() => import("@/view/user"))),
        meta: { title: "我的", key: "user" },
      },
      {
        path: "chatRoom",
        element: lazyLoad(React.lazy(() => import("@/view/chatRoom"))),
        meta: { title: "聊天室", key: "chat" },
      },
    ],
  },
  {
    path: "/404",
    element: lazyLoad(React.lazy(() => import("@/view/error/404"))),
    meta: { title: "404", key: "404", unwntedAuth: true },
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];
const GetRouters = () => {
  return useRoutes([...routers]);
};
export default GetRouters;
