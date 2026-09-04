import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <aside className="w-64 min-h-screen flex flex-col gap-2 p-4">
        <h1 className="text-xl font-bold text-center border-b-2">
          Inventory Management System
        </h1>

        <nav className="flex flex-col gap-2">
          <NavLink to="/">🏠 Home</NavLink>
          <NavLink to="/dashboard">📊 Dashboard</NavLink>
          <NavLink to="/products">📦 Products</NavLink>
        </nav>
      </aside>
    </div>
  );
}
