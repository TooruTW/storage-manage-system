import ButtonContainer from "@/components/views/Home/ButtonContainer";
import Layout from "@/components/layout";
import Home from "@/components/views/Home";
import LoginForm from "@/components/views/Home/LoginForm";
import Dashboard from "@/components/views/Dashboard";
import DatabaseView from "@/components/views/DatabaseView";
import InventoryTable from "@/components/views/DatabaseView/InventoryTable";
import ExampleTable from "@/components/views/DatabaseView/ExampleTable";
import InboundTable from "@/components/views/DatabaseView/InboundTable";
import OutboundTable from "@/components/views/DatabaseView/OutboundTable";

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
        element: <Dashboard />,
      },
      {
        path: "/database",
        element: <DatabaseView />,
        children: [
          {
            path: "inventory",
            element: <InventoryTable />,
          },
          {
            path: "inbound",
            element: <InboundTable />,
          },
          {
            path: "outbound",
            element: <OutboundTable />,
          },
          {
            path: "consignment",
            element: (
              <div className="p-4 text-center text-gray-500">
                寄庫管理功能開發中...
              </div>
            ),
          },
          {
            path: "customer",
            element: (
              <div className="p-4 text-center text-gray-500">
                客戶管理功能開發中...
              </div>
            ),
          },
          {
            path: "supplier",
            element: (
              <div className="p-4 text-center text-gray-500">
                進貨商管理功能開發中...
              </div>
            ),
          },
          {
            path: "example",
            element: <ExampleTable />,
          },
        ],
      },
      {
        path: "/create",
        element: <div>Create</div>,
      },
    ],
  },
];
