import { NavLink } from "react-router-dom";
import { menu } from "../data/Menu";

export default function Sidebar() {
  return (
    <div>
      <aside className="flex min-h-screen w-64 flex-col gap-2 p-4">
        <h1 className="border-b-2 text-center text-xl font-bold">
          Inventory Management System
        </h1>

        <nav className="flex flex-col gap-2">
          {menu.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 rounded bg-gray-200 px-3 py-2 text-black"
                  : "px-3 py-2 text-black"
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
