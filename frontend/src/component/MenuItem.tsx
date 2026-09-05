import { NavLink } from "react-router-dom";

type MenuItemProps = {
  path: string;
  label: string;
  icon: string;
};

export default function MenuItem({ path, label, icon }: MenuItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-2 rounded bg-gray-200 px-3 py-2 text-black"
          : "flex items-center gap-2 px-3 py-2 text-black"
      }
    >
      {({ isActive }) => (
        <>
          {icon}
          <span className={isActive ? "underline" : ""}>{label}</span>
        </>
      )}
    </NavLink>
  );
}
