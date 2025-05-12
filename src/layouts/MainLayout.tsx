// import { Outlet } from "react-router"; 
// import Sidebar from "../Components/Sidebar";
// import { useThemeStore } from "../store/themeStore"; 

// export default function MainLayout() {
//   const theme = useThemeStore((state) => state.theme); 

//   return (
//     <div
//       className={`flex h-screen ${
//         theme === "dark" ? "bg-gray-900 text-gray-200" : "text-gray-600"
//       }`}
//     >
//       <Sidebar />
//       <div className="flex-1">
//         <Outlet />
//       </div>
//     </div>
//   );
// }


import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";
import { useTheme } from "../main";

export default function MainLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`flex h-screen ${
        theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-600"
      }`}
    >
      <Sidebar />
        <div className="flex-1 ">
          <Outlet />
        </div>
    </div>
  );
}