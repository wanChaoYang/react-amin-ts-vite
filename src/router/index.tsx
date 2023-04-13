import { useRoutes, Navigate } from "react-router-dom";
import Login from "@/view/login";
import Home from "@/view/home";
import User from "@/view/user";
import Layout from "@/view/layout";
import GoodsMgt from "@/view/GoodsMgt";
import OrderMgt from "@/view/orderMgt";
import AddGoods from "@/view/addGoods";
export const routers: Array<object> = [
  { path: "/", element: <Navigate to="/login" /> },
  { path: "login", element: <Login /> },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "orderMgt", element: <OrderMgt /> },
      { path: "addGoods", element: <AddGoods /> },
      { path: "goodsMgt", element: <GoodsMgt /> },
      { path: "user", element: <User /> },
    ],
  },
];
const GetRouters = () => {
  return useRoutes([...routers]);
};
export default GetRouters;
