import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}
