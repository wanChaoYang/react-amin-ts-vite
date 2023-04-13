export const MENU_LIST = [
  { label: "首页", key: "home" },
  {
    label: "商品管理",
    key: "goods",
    children: [
      { label: "商品管理", key: "goodsMgt" },
      { label: "订单管理", key: "orderMgt" },
      { label: "添加商品", key: "addGoods" },
    ],
  },
  { label: "个人中心", key: "user" },
];
