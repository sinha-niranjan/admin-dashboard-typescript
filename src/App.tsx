import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customer = lazy(() => import("./pages/Customer"));
const NewProduct = lazy(() => import("./pages/managment/NewProduct"));
const ProductManagment = lazy(
  () => import("./pages/managment/ProductManagment")
);
const TransactionManagment = lazy(
  () => import("./pages/managment/TransactionManagment")
);
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Charts  */}

          {/* Apps  */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* Managment  */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagment />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagment />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
