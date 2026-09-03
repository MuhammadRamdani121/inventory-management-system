import "./index.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Sidebar from "./component/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-black">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
