import { Navigate, useLocation } from "react-router-dom";
import { matchRoute } from "@/utils/utils";
import { routers } from "@/router/index";
function BeforeRouter(props: { children: JSX.Element }) {
  const token = "455adasjdsijdeejoasasas1"; //模拟在这获取到了token
  const { pathname } = useLocation(); //获取当前路由
  const router = matchRoute(pathname, routers); //递归获取不需要登录权限的路由
  if (router.meta?.unwntedAuth) return props.children; //不需要登录权限的直接返回当前页
  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return props.children;
  }
}
export default BeforeRouter;
