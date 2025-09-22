import { Link, Outlet } from "react-router-dom";
import { useFetchTest } from "./hooks/useFetchTest";
import { useEffect } from "react";

function App() {
  const { data, isLoading } = useFetchTest();
  useEffect(() => {
    if (isLoading) return;
    console.log(data);
  }, [data, isLoading]);

  return (
    <div className="bg-gray-500 w-full h-full min-h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-bold underline">This is Tailwind Test</h1>
      <div className="flex gap-4">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
