import { useRoutes, Navigate } from "react-router-dom";
import Home from "../view/home";
import User from "../view/user";
import Layout from "../view/layout";
export const routers: Array<object> = [
  // {
  //   path: "/",
  //   element: <Navigate to="/layout/home" />,
  //   label: "首页",
  //   key: "/",
  // },
  {
    path: "/",
    element: <Layout />,
    label: "首页",
    key: "layout/home",
  },
  {
    path: "/layout",
    element: <Layout />,
    label: "控制台",
    key: "layout",
    children: [
      { path: "home", element: <Home />, label: "首页", key: "home" },
      { path: "user", element: <User />, label: "用户", key: "user" },
    ],
  },
];
const GetRouters = () => {
  return useRoutes([...routers]);
};
export default GetRouters;
