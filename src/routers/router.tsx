import App from "../App";


export const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/test",
        element: <div>Test</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  }

];
