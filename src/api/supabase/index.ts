import { createClient } from "@supabase/supabase-js";

// 調試用：檢查環境變數
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

console.log("=== Supabase 環境變數檢查 ===");
console.log("VITE_SUPABASE_URL exists?", !!supabaseUrl);
console.log(
  "VITE_SUPABASE_URL value (first 20 chars):",
  supabaseUrl?.substring(0, 20) || "undefined"
);
console.log("VITE_SUPABASE_PUBLISHABLE_KEY exists?", !!supabaseKey);
console.log(
  "VITE_SUPABASE_PUBLISHABLE_KEY value (first 20 chars):",
  supabaseKey?.substring(0, 20) || "undefined"
);

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
