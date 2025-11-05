import { Navigate } from "react-router-dom";

import Layout from "@/components/layout";
import ButtonContainer from "@/components/views/Home/ButtonContainer";
import LoginForm from "@/components/views/Home/LoginForm";
import Home from "@/components/views/Home";
import ConsignmentTable from "@/components/views/DatabaseView/ConsignmentTable";
import CustomerTable from "@/components/views/DatabaseView/CustomerTable";
import DatabaseView from "@/components/views/DatabaseView";
import InboundTable from "@/components/views/DatabaseView/InboundTable";
import InventoryTable from "@/components/views/DatabaseView/InventoryTable";
import OutboundTable from "@/components/views/DatabaseView/OutboundTable";
import SupplierTable from "@/components/views/DatabaseView/SupplierTable";
import CreateInbound from "@/components/views/CreateView/CreateInbound";
import CreateOutbound from "@/components/views/CreateView/CreateOutbound";
import CreateView from "@/components/views/CreateView";
import Dashboard from "@/components/views/Dashboard";
import Logout from "@/components/views/Logout";
import MobileDatabaseView from "@/components/views/MobileDatabaseView";

export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: "/home",
        element: <Home />,
        children: [
          { index: true, element: <ButtonContainer /> },
          { path: "login", element: <LoginForm /> },
        ],
      },
      {
        path: "/logout",
        element: <Logout />,
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
            index: true,
            element: <Navigate to="inventory" replace />,
          },
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
            element: <CustomerTable />,
          },
          {
            path: "supplier",
            element: <SupplierTable />,
          },
        ],
      },
      {
        path: "/mobile-database/:tab",
        element: <MobileDatabaseView />,
      },
      {
        path: "/create",
        element: <CreateView />,
        children: [
          {
            index: true,
            element: <Navigate to="outbound" replace />,
          },
          {
            path: "outbound",
            element: <CreateOutbound />,
          },
          {
            path: "inbound",
            element: <CreateInbound />,
          },
        ],
      },
    ],
  },
];
