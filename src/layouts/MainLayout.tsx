import { Outlet } from "react-router";
import { useTheme } from "../main";
import Sidebar from "../Components/Sidebar";

export default function MainLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`flex h-screen ${
        theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-600"
      }`}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
}