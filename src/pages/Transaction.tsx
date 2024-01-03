import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantitiy",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Charles ",
    amount: 4500,
    discount: 200,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transaction/dfsdfdf"}>Manage</Link>,
  },
  {
    user: "Xavior ",
    amount: 5999,
    discount: 199,
    quantity: 5,
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transaction/dfsdfdf"}>Manage</Link>,
  },
  {
    user: "Charles ",
    amount: 22500,
    discount: 1900,
    quantity: 10,
    status: <span className="purple">Delivered</span>,
    action: <Link to={"/admin/transaction/dfsdfdf"}>Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    ),
    []
  );
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      <main> {Table()} </main>
    </div>
  );
};

export default Transaction;
