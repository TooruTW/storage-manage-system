import Layout from "../components/layout";


export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
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
