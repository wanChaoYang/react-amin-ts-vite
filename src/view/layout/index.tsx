import { Outlet } from "react-router-dom";
import "./index.scss";
import { Aside } from "./components";
function Layout() {
  return (
    <div className="container">
      <aside>
        <Aside />
      </aside>
      <section>
        <header>头部</header>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}
export default Layout;
