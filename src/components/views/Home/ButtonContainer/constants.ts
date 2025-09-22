const unLoginButtonList = [
  {
    label: "登入",
    onClick: () => {
      console.log("open login form");
    },
  },
];

const loginButtonList = [
  {
    label: "儀表板",
    onClick: () => {
      console.log("open dashboard");
    },
  },
  {
    label: "資料庫",
    onClick: () => {
      console.log("open database");
    },
  },
  {
    label: "新增",
    onClick: () => {
      console.log("open create");
    },
  },
  {
    label: "登出",
    onClick: () => {
      console.log("open logout");
    },
  },
];

export { unLoginButtonList, loginButtonList };
