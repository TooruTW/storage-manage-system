const LoginForm = () => {
  return (
    <div>
      <h2>登入</h2>
      <div>
        <p>請輸入帳號密碼</p>
        <p>如需新增帳號，請聯絡管理員</p>
      </div>
      <div>
        <label>帳號</label>
        <input type="text" />
        <label>密碼</label>
        <input type="password" />
      </div>
      <div></div>
    </div>
  );
};

export default LoginForm;
