type Menu = {
  path: string;
  label: string;
  icon: string;
};

export const menu: Menu[] = [
  { path: "/", label: "Home", icon: "🏠 " },
  { path: "/dashboard", label: "Dashboard", icon: "📊 " },
  { path: "/products", label: "Products", icon: " 📦 " },
];
