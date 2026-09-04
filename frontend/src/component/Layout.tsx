import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <main className="flex min-h-screen border-2">
      <aside className="border-2 ">
        <Sidebar />
      </aside>

      <section className="flex flex-1 justify-center items-center w-full border-2">
        <Outlet />
      </section>
    </main>
  );
}
