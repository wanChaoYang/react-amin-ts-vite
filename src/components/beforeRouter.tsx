import { Navigate, useLocation } from "react-router-dom";
function BeforeRouter(props: { children: JSX.Element }) {
  const token = "455adasjdsijdeejoasasas1"; //模拟在这获取到了token
  const { pathname } = useLocation();
  if (pathname === "/login") return props.children;
  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return props.children;
  }
}
export default BeforeRouter;
