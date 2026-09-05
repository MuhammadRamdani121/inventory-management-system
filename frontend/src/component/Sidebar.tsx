import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { path: "/", label: "Home", icon: "🏠 " },
    { path: "/dashboard", label: "Dashboard", icon: "📊 " },
    { path: "/products", label: "Products", icon: " 📦 " },
  ];
  return (
    <div>
      <aside className="w-64 min-h-screen flex flex-col gap-2 p-4">
        <h1 className="text-xl font-bold text-center border-b-2">
          Inventory Management System
        </h1>

        <nav className="flex flex-col gap-2">
          {menu.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                isActive
                  ? "text-black bg-gray-200 rounded px-3 py-2"
                  : "text-black px-3 py-2"
              }
            >
              {({ isActive }) => (
                <>
                  {menu.icon}
                  <span className={isActive ? "underline" : ""}>
                    {menu.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
}
