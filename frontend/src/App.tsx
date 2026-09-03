import "./index.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-red-200">
        <NavLink to="/">home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/products">Products</NavLink>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
