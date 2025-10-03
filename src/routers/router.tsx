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
import ConsignmentTable from "@/components/views/DatabaseView/ConsignmentTable";
import CustomTable from "@/components/views/DatabaseView/CustomTable";
import SupplierTable from "@/components/views/DatabaseView/SupplierTable";

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
            element: <ConsignmentTable />,
          },
          {
            path: "customer",
            element: <CustomTable />,
          },
          {
            path: "supplier",
            element: <SupplierTable />,
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
