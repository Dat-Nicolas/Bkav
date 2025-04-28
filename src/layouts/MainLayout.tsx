import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";
import { useTheme } from "../main";

export default function MainLayout() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex h-screen ${
        theme === "dark" ? "bg-gray-900 text-gray" : " text-gray-600"
      }`}
    >
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
