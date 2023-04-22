import { Outlet } from "react-router-dom";
import "./index.scss";
import { Aside, Head } from "./components";

function Layout() {
  return (
    <div className="container">
      <aside>
        <Aside />
      </aside>
      <section>
        <header>
          <Head />
        </header>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}
export default Layout;
