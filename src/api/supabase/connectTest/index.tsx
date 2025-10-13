import supabase from "..";

const connecTest = async () => {
  console.log("🔄 開始測試 Supabase 連線...");

  try {
    // 使用 Supabase 的內建測試：獲取當前用戶資訊
    // 這個 API 不需要任何表格就能測試連線
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("❌ Supabase 連線失敗:", error);
      return { success: false, error };
    }

    console.log("✅ Supabase 連線成功！");
    console.log("📦 連線狀態:", {
      connected: true,
      session: data.session ? "已登入" : "未登入（正常）",
      timestamp: new Date().toLocaleString("zh-TW"),
    });

    return { success: true, data };
  } catch (err) {
    console.error("❌ 發生錯誤:", err);
    return { success: false, error: err };
  }
};

const getDataTest = async () => {
  const { data, error, status } = await supabase.from("test_table").select("*");
  if (error) {
    console.error("Fetch error", status, error);
    return;
  }
  console.log("Rows", data);
};

export { connecTest, getDataTest };
