// import { Outlet } from "react-router";
// import Sidebar from "../Components/Sidebar";

// export default function MainLayout() {
  //   return (
    //     <div className="flex h-screen bg-gray-100">
    //       <Sidebar />
    //       <div className="flex-1 ">
    //         <Outlet />
    //       </div>
    //     </div>
    //   );
    // }
    
    import { Outlet } from "react-router";
    import Sidebar from "../Components/Sidebar";
    import { useTheme } from "../main"; // assuming you export useTheme from ThemeContext
    
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
    

// import { useState } from "react";
// import { Outlet } from "react-router";
// import Sidebar from "../Components/Sidebar";

// export default function ChatLayout() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const handleChatSelect = () => {
//     setIsSidebarOpen(false); // Hide sidebar on chat selection
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 bottom-0 w-[350px] max-md:w-full transform transition-transform duration-300 ease-in-out z-20 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <Sidebar onChatSelect={handleChatSelect} />
//       </div>

//       {/* Chat Content (Outlet) */}
//       <div
//         className={`flex-1 max-md:hidden transform transition-transform duration-300 ease-in-out max-md:w-full max-md:absolute max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:right-0 ${
//           isSidebarOpen ? "max-md:translate-x-full" : "translate-x-0"
//         }`}
//       >
//         <Outlet context={{ setIsSidebarOpen }} />
//       </div>
//     </div>
//   );
// }