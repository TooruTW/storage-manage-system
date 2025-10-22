import { Navigate } from "react-router-dom";

import Layout from "@/components/layout";

import Home from "@/components/views/Home";
import ButtonContainer from "@/components/views/Home/ButtonContainer";
import LoginForm from "@/components/views/Home/LoginForm";
import Dashboard from "@/components/views/Dashboard";
import DatabaseView from "@/components/views/DatabaseView";
import InventoryTable from "@/components/views/DatabaseView/InventoryTable";
import InboundTable from "@/components/views/DatabaseView/InboundTable";
import OutboundTable from "@/components/views/DatabaseView/OutboundTable";
import ConsignmentTable from "@/components/views/DatabaseView/ConsignmentTable";
import CustomTable from "@/components/views/DatabaseView/CustomTable";
import SupplierTable from "@/components/views/DatabaseView/SupplierTable";
import CreateView from "@/components/views/CreateView";
import CreateOutbound from "@/components/views/CreateView/CreateOutbound";
import CreateInbound from "@/components/views/CreateView/CreateInbound";
import MobileDatabaseView from "@/components/views/MobileDatabaseView";
import Logout from "@/components/views/Logout";

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
            element: <CustomTable />,
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
