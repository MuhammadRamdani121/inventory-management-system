import "./index.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="text-red-200">
      <BrowserRouter>
        {/* Membuat Router Ke default atau Home */}
        <NavLink to="./Home">Home</NavLink>

        {/* Membuat Router Ke Dashboard */}
        <NavLink to="./Dashboard">Dashboard</NavLink>
        {/* Membuat Router Ke Products */}
        <NavLink to="./Products">Product</NavLink>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
