import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-500 w-full h-full min-h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-bold underline">This is Tailwind Test</h1>
      <div className="flex gap-4">
        <Link to="/test">Test</Link>
        <Link to="/about">About</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
