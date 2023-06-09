import { useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { MENU_LIST } from "@/const/index";
import { useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];
function Aside() {
  const navigate = useNavigate();
  const items: MenuItem[] = MENU_LIST;
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
