import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div>
      <main className="flex min-h-screen border-2">
        <header className="border-2 ">
          <Sidebar />
        </header>

        <section className="flex justify-center items-center w-full">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
