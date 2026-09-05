import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <main className="flex min-h-screen border-2">
      <aside className="border-2">
        <Sidebar />
      </aside>

      <section className="flex w-full flex-1 items-center justify-center border-2">
        <Outlet />
      </section>
    </main>
  );
}
