import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { useState } from "react";

const Table = () => {
    const [data,setData] = useState([])
    const table = useReactTable({
        data,columns,getCoreRowModel:getCoreRowModel()
    })
  return (
      <h1>Table</h1>
  );
};

export default Table;