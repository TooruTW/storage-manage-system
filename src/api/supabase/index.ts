import { createClient } from "@supabase/supabase-js";

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

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
