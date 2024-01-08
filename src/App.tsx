import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Root = lazy(() => import("./pages/Root"));

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

const StopWatch = lazy(() => import("./pages/apps/StopWatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Charts  */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* Apps  */}
          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

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
