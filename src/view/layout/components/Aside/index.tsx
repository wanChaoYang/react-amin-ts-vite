import React, { useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { routers } from "@/router/index";
import { useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];
function Aside() {
  const navigate = useNavigate();
  const items: MenuItem[] = routers as any;
  const [current, setCurrent] = useState("home");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    const keyPath = e.keyPath;
    const path = keyPath.reverse().join("/");
    navigate(`/${path}`);
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
