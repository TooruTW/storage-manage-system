import App from "../App";


export const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  }

];
