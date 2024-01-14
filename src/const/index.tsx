import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
export const MENU_LIST = [
  { label: "首页", key: "home", icon: <HomeOutlined /> },
  {
    label: "商品管理",
    key: "goods",
    icon: <AppstoreOutlined />,
    children: [
      { label: "商品管理", key: "goodsMgt" },
      { label: "订单管理", key: "orderMgt" },
      { label: "添加商品", key: "addGoods" },
    ],
  },
  { label: "个人中心", key: "user", icon: <SettingOutlined /> },
  { label: "聊天室", key: "chatRoom", icon: <SettingOutlined /> },
];
