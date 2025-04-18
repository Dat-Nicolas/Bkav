import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";
import { useTheme } from "../main";

export default function MainLayout() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
