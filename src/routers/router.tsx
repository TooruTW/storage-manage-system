import Layout from "../components/layout";
import Home from "../components/views/Home";


export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <div>About</div>,
      },
      {
        path:"/database",
        element: <div>Database</div>,
      },
      {
        path:"/create",
        element: <div>Create</div>,
      }
    ],
  },
];
