import ButtonContainer from "@/components/views/Home/ButtonContainer";
import Layout from "@/components/layout";
import Home from "@/components/views/Home";
import LoginForm from "@/components/views/Home/LoginForm";

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
        path: "/dashboard",
        element: <div>About</div>,
      },
      {
        path: "/database",
        element: <div>Database</div>,
      },
      {
        path: "/create",
        element: <div>Create</div>,
      },
    ],
  },
];
