import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <aside>
        <h1>Inventory</h1>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </aside>
    </div>
  );
}
