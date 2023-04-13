import { useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { routers } from "@/router/index";
import { useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];
function Aside() {
  const navigate = useNavigate();
  const routerList: any = routers[0];
  const children = routerList.children;
  const items: MenuItem[] = children;
  const [current, setCurrent] = useState("home");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <Menu
      defaultSelectedKeys={["home"]}
      defaultOpenKeys={["kon"]}
      mode="inline"
      theme="dark"
      items={items}
      onClick={onClick}
      selectedKeys={[current]}
    />
  );
}

export default Aside;
