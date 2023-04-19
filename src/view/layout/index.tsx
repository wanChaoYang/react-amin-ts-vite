import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import { Aside } from "./components";
import store from "@/redux";

function Layout() {
  const [count, setCount] = useState<number>(0);
  store.subscribe(() => {
    console.log("订阅查看数据变化", store.getState());
    const store_data = store.getState();
    // setCount(() => store_data.count);
  });
  return (
    <div className="container">
      <aside>
        <Aside />
      </aside>
      <section>
        <header>头部--{count}</header>
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}
export default Layout;
