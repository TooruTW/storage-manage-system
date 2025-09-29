import ButtonContainer from "@/components/views/Home/ButtonContainer";
import Layout from "@/components/layout";
import Home from "@/components/views/Home";
import LoginForm from "@/components/views/Home/LoginForm";
import Dashboard from "@/components/views/Dashboard";
import DatabaseView from "@/components/views/DatabaseView";

export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
        children: [
          { index: true, element: <ButtonContainer /> },
          { path: "login", element: <LoginForm /> },
        ],
      },
      {
        path: "/dashboard/:timeRange/:category",
        element: <Dashboard/>,
      },
      {
        path: "/database/:tab",
        element: <DatabaseView/>,
      },
      {
        path: "/create",
        element: <div>Create</div>,
      },
    ],
  },
];
