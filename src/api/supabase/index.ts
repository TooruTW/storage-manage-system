import { createClient } from "@supabase/supabase-js";
import { useAccountStore } from "@/stores/useAccountState";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// 檢查必要的環境變數
if (!supabaseUrl || !supabaseKey) {
  console.error("❌ 缺少必要的 Supabase 環境變數！");
  console.error("VITE_SUPABASE_URL:", supabaseUrl ? "已設置" : "未設置");
  console.error(
    "VITE_SUPABASE_PUBLISHABLE_KEY:",
    supabaseKey ? "已設置" : "未設置"
  );
  throw new Error("Missing required Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// 監聽認證狀態變化（處理 token 刷新、登入、登出等事件）
supabase.auth.onAuthStateChange((event, session) => {
  const accountStore = useAccountStore.getState();

  // 處理不同的事件類型
  switch (event) {
    case "SIGNED_IN":
      // 登入成功
      if (session) {
        accountStore.setLoginState("success");
        if (session.user?.email) {
          accountStore.setUser(session.user.email);
        }
      }
      break;

    case "SIGNED_OUT":
      // 登出
      accountStore.setLoginState("failed");
      accountStore.reset();
      break;

    case "TOKEN_REFRESHED":
      // Token 刷新
      if (session) {
        // Token 刷新成功
        accountStore.setLoginState("success");
      } else {
        // Token 刷新失敗（refresh token 也過期了）
        accountStore.setLoginState("failed");
        accountStore.reset();
      }
      break;

    case "USER_UPDATED":
      // 用戶資訊更新
      if (session) {
        accountStore.setLoginState("success");
        if (session.user?.email) {
          accountStore.setUser(session.user.email);
        }
      }
      break;

    default:
      // 其他事件（如 PASSWORD_RECOVERY 等）
      break;
  }
});

// 在初始化時檢查一次 session 狀態
supabase.auth.getSession().then(({ data, error }) => {
  const accountStore = useAccountStore.getState();

  if (error) {
    console.error("初始化 session 檢查錯誤:", error);
    accountStore.setLoginState("failed");
    return;
  }

  if (data.session) {
    // 有有效的 session
    accountStore.setLoginState("success");
    if (data.session.user?.email) {
      accountStore.setUser(data.session.user.email);
    }
  } else {
    // 沒有 session
    accountStore.setLoginState("failed");
  }
});

export default supabase;
