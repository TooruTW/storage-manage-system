
const unLoginButtonList = [
  {
    label: "登入",
    path: "/home/login",
  },
];

const loginButtonList = [
  {
    label: "儀表板",
    path: "/dashboard/month/purchaseAmount",
  },
  {
    label: "資料庫",
    path: "/database",
  },
  {
    label: "新增",
    path: "/create",
  },
  {
    label: "登出",
    path: "/home",
  },
];

const mobileLoginButtonList = [
  {label: "查價錢", path: "/mobile-database/price"},
  {label: "查成本", path: "/mobile-database/cost"},
  {label: "查客戶", path: "/mobile-database/customer"},
  {label: "查廠商", path: "/mobile-database/supplier"},
  {label: "登出", path: "/logout"},
];

export { unLoginButtonList, loginButtonList, mobileLoginButtonList };
