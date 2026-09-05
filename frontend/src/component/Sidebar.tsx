import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <aside className="w-64 min-h-screen flex flex-col gap-2 p-4">
        <h1 className="text-xl font-bold text-center border-b-2">
          Inventory Management System
        </h1>

        <nav className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black bg-gray-200 rounded px-3 py-2 "
                : "text-black"
            }
            end
          >
            {({ isActive }) => (
              <>
                🏠 <span className={isActive ? "underline" : ""}>Home</span>
              </>
            )}
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-black bg-gray-200 rounded px-3 py-2 "
                : "text-black"
            }
          >
            {({ isActive }) => (
              <>
                📊{" "}
                <span className={isActive ? "underline" : ""}>Dashboard</span>
              </>
            )}
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-black bg-gray-200 rounded px-3 py-2"
                : "text-black"
            }
          >
            {({ isActive }) => (
              <>
                📦 <span className={isActive ? "underline" : ""}>Products</span>
              </>
            )}
          </NavLink>
        </nav>
      </aside>
    </div>
  );
}
