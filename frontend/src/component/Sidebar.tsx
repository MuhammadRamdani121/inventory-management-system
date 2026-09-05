import { menu } from "../data/Menu";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col gap-2 p-4">
      <h1 className="border-b-2 text-center text-xl font-bold">
        Inventory Management System
      </h1>

      <nav className="flex flex-col gap-2">
        {menu.map((menu) => (
          <MenuItem
            key={menu.path}
            path={menu.path}
            label={menu.label}
            icon={menu.icon}
          />
        ))}
      </nav>
    </aside>
  );
}
