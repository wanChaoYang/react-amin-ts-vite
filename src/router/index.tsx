import { useRoutes, Navigate } from "react-router-dom";
import Login from "@/view/login";
import Home from "@/view/home";
import User from "@/view/user";
import Layout from "@/view/layout";
import GoodsMgt from "@/view/GoodsMgt";
import OrderMgt from "@/view/orderMgt";
import AddGoods from "@/view/addGoods";
import Error from "@/view/error/404";
export const routers: Array<object> = [
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/login",
    element: <Login />,
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
      { path: "home", element: <Home />, meta: { title: "首页", key: "home" } },
      {
        path: "orderMgt",
        element: <OrderMgt />,
        meta: { title: "定单页", key: "orderMgt" },
      },
      {
        path: "addGoods",
        element: <AddGoods />,
        meta: { title: "添加商品", key: "addGoods" },
      },
      {
        path: "goodsMgt",
        element: <GoodsMgt />,
        meta: { title: "商品管理", key: "goodsMgt" },
      },
      { path: "user", element: <User />, meta: { title: "我的", key: "user" } },
    ],
  },
  {
    path: "/404",
    element: <Error />,
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
