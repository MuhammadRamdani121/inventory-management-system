import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./component/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-black">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
