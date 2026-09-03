import "./index.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-red-200">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Dashboard">Dashboard</NavLink>
        <NavLink to="/Products">Product</NavLink>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
