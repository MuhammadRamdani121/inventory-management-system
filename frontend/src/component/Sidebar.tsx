import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <aside>
        <h1>Home</h1>
        <h1>Dashboard</h1>
        <h1>Products</h1>

        <nav>
          <NavLink to="/home"></NavLink>
          <NavLink to="/dashboard"></NavLink>
          <NavLink to="/products"></NavLink>
        </nav>
      </aside>
    </div>
  );
}
