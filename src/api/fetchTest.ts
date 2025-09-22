const url = "https://jsonplaceholder.typicode.com/todos/1";

export const fetchTest = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // 重新拋出錯誤，讓 React Query 處理
  }
};
