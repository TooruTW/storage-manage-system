const unLoginButtonList = [
  {
    label: "登入",
    path: "/home/login",
  },
];

const loginButtonList = [
  {
    label: "儀表板",
    path: "/dashboard",
    onClick: () => {
      console.log("open dashboard");
    },
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

export { unLoginButtonList, loginButtonList };
