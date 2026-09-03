import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <aside className="w-50 flex flex-col text-center">
        <h1>Inventory</h1>

        <nav className="flex flex-col">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </aside>
    </div>
  );
}
