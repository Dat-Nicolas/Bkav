// import { NavLink } from "react-router";
// import MenuIcon from "./icons/MenuIcon";
// import SearchIcon from "./icons/SearchIcon";
// import CloseIcon from "./icons/CloseIcon";
// import LeftIcon from "./icons/LeftIcon";
// import { chatList } from "../pages/data/ChatData";
// import { useState, useEffect } from "react";
// import { Link } from "react-router";

// export default function Sidebar() {
//   // const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalLogout, setIsModalLogout] = useState(false);
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   // const [isModalVisible, setIsModalVisible] = useState(false);
//   const [viewedChats, setViewedChats] = useState(new Set());
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const handleClear = () => {
//     setSearchTerm("");
//     setIsSearchModalOpen(false);
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const openModalLogout = () => {
//     setIsModalLogout(!isModalLogout);
//   };

//   const handleChatClick = (chatId) => {
//     setViewedChats((prev) => new Set(prev).add(chatId));
//   };

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setIsSearchModalOpen(value !== "");
//   };

//   const filteredChats = chatList.filter((chat) =>
//     chat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div
//       className={`fixed top-0 left-0 bg-white h-full overflow-y-auto border-r border-gray-300 text-black  transition-all duration-500 w-[90px] md:w-[350px] hover:w-[350px] max-md:hover:w-[250px] group z-50`}>
//       {/* Header */}
//       <div
//         className={`flex justify-between items-center pl-2  w-full py-[10px]`} >
//         <div className="ml-3 flex">
//           {searchTerm ? (
//             <button
//               className="cursor-pointer"
//               onClick={handleClear}
//             >
//               <LeftIcon />
//             </button>
//           ) : (
//             <button className="cursor-pointer " onClick={toggleModal}>
//               <MenuIcon />
//             </button>
//           )}
//         </div>
//         <div
//           className={`relative w-[283px] mx-5 hidden md:block group-hover:block`}>
//           <input
//             type="text"
//             placeholder="Tìm kiếm"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className="pl-10 pr-8 p-2 w-full overflow-hidden h-[40px] border rounded-full bg-gray-200 -800 text-black  focus:outline-none focus:ring-1 focus:ring-blue-500"
//           />
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//             <SearchIcon />
//           </div>
//           {searchTerm && (
//             <button
//               onClick={handleClear}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800  "
//             >
//               <CloseIcon />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Modal Menu */}
//       {isModalOpen && (
//         <div className="fixed bg-opacity-50 flex items-start justify-start z-50 border-t border-gray-300">
//           <div className="bg-white -800 w-[335px] max-md:w-[238px]  rounded-lg shadow-lg overflow-hidden text-black ">
//             <div className="p-2 max-md:p-4">
//               <div className="flex">
//                 <img
//                   src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
//                   alt="Profile"
//                   className="w-10 h-10 rounded-full mr-3"
//                 />
//                 <div className="flex justify-between items-center w-full">
//                   <h3 className="font-semibold">Cristal Parker</h3>
//                   <button
//                     onClick={toggleModal}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <CloseIcon />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <div className="flex items-center p-4 hover:bg-gray-100 ">
//                 <span className="mr-3 text-gray-500">🎵</span>
//                 <div className="flex justify-between w-full">
//                   <span>Nhạc của bạn</span>
//                   <span className="ml-auto bg-gray-200 -600 text-gray-600  text-xs rounded-full px-2 py-1">
//                     1
//                   </span>
//                 </div>
//               </div>

//               <div className="flex items-center p-4 hover:bg-gray-100 ">
//                 <span className="mr-3 text-gray-500">👥</span>
//                 <div className="flex justify-between w-full">
//                   <span>Tạo nhóm</span>
//                   <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
//                     80
//                   </span>
//                 </div>
//               </div>

//               <div className="flex items-center p-4 hover:bg-gray-100 ">
//                 <span className="mr-3 text-gray-500">
//                   {isDarkMode ? "☀️" : "🌙"}
//                 </span>
//                 <div className="flex justify-between w-full">
//                   <span>{isDarkMode ? "Giao diện sáng" : "Giao diện tối"}</span>
//                   <label className="ml-auto relative inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="sr-only peer"
//                       checked={isDarkMode}
//                       onChange={toggleDarkMode}
//                     />
//                     <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-500 rounded-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
//                   </label>
//                 </div>
//               </div>

//               <div
//                 className="flex items-center p-4 hover:bg-gray-100  cursor-pointer"
//                 onClick={openModalLogout}
//               >
//                 <span className="mr-3 text-gray-500">🚪</span>
//                 <div className="flex justify-between w-full">
//                   <span>Đăng xuất</span>
//                 </div>
//               </div>

//               {isModalLogout && (
//                 <>
//                   <div
//                     className="fixed inset-0 bg-black opacity-50 z-40"
//                     onClick={() => setIsModalLogout(false)}
//                   />
//                   <div className="fixed z-50 top-1/2 left-1/2 w-[300px] p-6 bg-white -800 rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 text-black ">
//                     <h2 className="text-lg font-semibold mb-4">
//                       Xác nhận đăng xuất
//                     </h2>
//                     <p className="text-sm text-gray-600  mb-6">
//                       Bạn có chắc chắn muốn đăng xuất?
//                     </p>
//                     <div className="flex justify-end gap-3">
//                       <button
//                         className="px-2 py-1 rounded bg-gray-200  text-gray-700  hover:bg-gray-300  cursor-pointer"
//                         onClick={() => setIsModalLogout(false)}
//                       >
//                         Hủy
//                       </button>
//                       <Link
//                         to={"/login"}
//                         className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
//                         onClick={() => {
//                           setIsModalLogout(false);
//                         }}
//                       >
//                         Đăng xuất
//                       </Link>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal Search */}
//       {isSearchModalOpen && (
//         <div className="fixed bg-opacity-50 flex items-start justify-center z-50">
//           <div className="bg-white -800 md:w-[350px] w-[250px] mt-2 rounded-lg shadow-lg overflow-hidden text-black ">
//             <div className="p-4">
//               <p className="text-sm text-gray-500  mb-2">
//                 {filteredChats.length} results
//               </p>
//               {filteredChats.length > 0 ? (
//                 filteredChats.map((chat) => (
//                   <NavLink
//                     key={chat.id}
//                     to={`/chat/${chat.id}`}
//                     className="flex items-center p-2 hover:bg-gray-100  rounded"
//                     onClick={handleClear}
//                   >
//                     <img
//                       src={chat.avata}
//                       alt={chat.name}
//                       className="w-10 h-10 rounded-full mr-3"
//                     />
//                     <span className="font-medium">{chat.name}</span>
//                   </NavLink>
//                 ))
//               ) : (
//                 <p className="text-gray-500 ">
//                   Không tìm thấy kết quả
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Chat List */}
//       {!isSearchModalOpen && (
//         <div className="flex flex-col">
//           {chatList.map((chat) => (
//             <NavLink
//               key={chat.id}
//               to={`/chat/${chat.id}`}
//               onClick={() => handleChatClick(chat.id)}
//               className={({ isActive }) =>
//                 `flex  md:items-center p-4 hover:bg-gray-100  ${
//                   isActive ? "bg-gray-100 -700" : ""
//                 }`
//               }
//             >
//               <img
//                 src={chat.avata}
//                 alt={chat.name}
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div
//                 className={`flex-1 hidden md:block group-hover:block`}>
//                 <div className="flex flex-col justify-between w-[220px] max-md:w-[120px]">
//                   <span
//                     className={`font-medium ${
//                       viewedChats.has(chat.id)
//                         ? "text-gray-400"
//                         : "text-black "
//                     }`}
//                   >
//                     {chat.name}
//                   </span>
//                   {/* content */}
//                 <p
//                   className={`text-sm truncate ${
//                     viewedChats.has(chat.id)
//                       ? "text-gray-400"
//                       : "text-gray-600 "
//                   }`}
//                 >
//                   {chat.lastMessage}
//                 </p>

//                 </div>

//               </div>
//               <div className={`flex-1 flex-col text-right hidden md:block group-hover:block`}>
//                 <p>abc</p>
//                 <span
//                       className={`text-sm ${
//                         viewedChats.has(chat.id)
//                           ? "text-gray-400"
//                           : "text-gray-500 "
//                       }`}
//                     >
//                       {chat.time}
//                     </span>
//               </div>
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



















import { NavLink } from "react-router"; // Sửa "react-router" thành "react-router-dom"
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import CloseIcon from "./icons/CloseIcon";
import LeftIcon from "./icons/LeftIcon";
import { chatList } from "../pages/data/ChatData";
import { useState, useEffect } from "react";
import { Link } from "react-router"; // Sửa "react-router" thành "react-router-dom"
import NoSoundIcon from "./icons/NoSoundIcon";
import UserIcon from "./icons/UserIcon";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import GroupUserIcon from "./icons/GroupUserIcon";
import { useThemeStore } from "../store/themeStore";


export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAvataOpen, setModalAvataOpen] = useState(false);
  const [isModalLogout, setIsModalLogout] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [viewedChats, setViewedChats] = useState(new Set());
  
  // Sử dụng theme từ Zustand
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);


  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       sidebarRef.current &&
  //       !sidebarRef.current.contains(event.target) &&
  //       window.innerWidth < 768
  //     ) {
  //       setIsModalOpen(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const handleClear = () => {
    setSearchTerm("");
    setIsSearchModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAvataModal = () => {
    setModalAvataOpen(!isModalAvataOpen);
  };

  const openModalLogout = () => {
    setIsModalLogout(!isModalLogout);
  };

  const handleChatClick = (chatId) => {
    setViewedChats((prev) => new Set(prev).add(chatId));
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearchModalOpen(value !== "");
  };

  const filteredChats = chatList.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`fixed top-0 left-0 h-full md:overflow-y-auto border-r border-gray-300 transition-all duration-300 md:w-[360px] group z-1 ${
        isModalOpen ? "overflow-y-auto w-[300px]" : "max-md:overflow-hidden w-[80px]"
      } ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center pl-2 w-full h-[60px] py-[10px]">
        <div className="ml-3 flex">
          {searchTerm ? (
            <button className="cursor-pointer" onClick={handleClear}>
              <LeftIcon />
            </button>
          ) : (
            <button className="cursor-pointer" onClick={toggleModal}>
              <MenuIcon />
            </button>
          )}
        </div>
        <div className="relative w-[283px] mx-5">
          <input
            type="text"
            placeholder="Tìm kiếm"
            value={searchTerm}
            onChange={handleSearchChange}
            className={`pl-10 pr-8 p-2 w-full overflow-hidden h-[40px] border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 text-black border-gray-300"
            }`}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <SearchIcon isActive={searchTerm.length > 0} />
          </div>
          {searchTerm && (
            <button
              onClick={handleClear}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <CloseIcon />
            </button>
          )}
        </div>
        <div>
          <div className="" onClick={toggleAvataModal}>
            <img
              className="w-10 h-10 rounded-full mr-10 md:hidden cursor-pointer"
              src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
              alt=""
            />
          </div>
          {isModalAvataOpen && (
            <div
              className={`bg-white border-t md:hidden fixed md:w-[340px] w-[290px] left-0 top-[60px] shadow-[0_0_10px_rgba(0,0,0,0.2)] border-gray-300 ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              <div className="p-2 h-[56px]">
                <div className="flex items-center">
                  <img
                    src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
                    alt="Profile"
                    className="w-[32px] h-[32px] object-cover rounded-full mr-3"
                  />
                  <div className="flex justify-between items-center w-full">
                    <h3 className="font-semibold">Cristal Parker</h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className={`flex h-[56px] items-center p-4 ${ theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"}  `}>
                  <span className="mr-3 text-gray-500 dark:text-gray-400">🎵</span>
                  <div className="flex justify-between w-full">
                    <span>Nhạc của bạn</span>
                    <span className="ml-auto bg-gray-200 text-gray-600 text-xs rounded-full px-2 py-1 dark:bg-gray-600 dark:text-gray-300">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="mr-3 text-[#747881] dark:text-gray-400">
                    <GroupUserIcon />
                  </span>
                  <div className="flex justify-between w-full">
                    <span>Tạo nhóm</span>
                  </div>
                </div>
                <div className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="mr-3 text-[#747881] dark:text-gray-400">
                    {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                  </span>
                  <div className="flex justify-between w-full">
                    <span>{theme === "dark" ? "Giao diện sáng" : "Giao diện tối"}</span>
                    <label className="ml-auto relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-500 rounded-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                    </label>
                  </div>
                </div>
                <div
                  className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={openModalLogout}
                >
                  <span className="mr-3 dark:text-gray-400">
                    <UserIcon />
                  </span>
                  <div className="flex justify-between w-full">
                    <span>Đăng xuất</span>
                  </div>
                </div>
              </div>

              {isModalLogout && (
                <>
                  <div
                    className="fixed inset-0 bg-black opacity-50 z-9999"
                    onClick={() => setIsModalLogout(false)}
                  />
                  <div
                    className={`fixed z-9999 top-1/2 left-1/2 w-[300px] p-6 rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 ${
                      theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
                  >
                    <h2 className="text-lg font-semibold mb-4">Xác nhận đăng xuất</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                      Bạn có chắc chắn muốn đăng xuất?
                    </p>
                    <div className="flex justify-end gap-3">
                      <button
                        className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                        onClick={() => setIsModalLogout(false)}
                      >
                        Hủy
                      </button>
                      <Link
                        to="/login"
                        className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                        onClick={() => setIsModalLogout(false)}
                      >
                        Đăng xuất
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal Menu */}
      {isModalOpen && (
        <div
          className={` border-t  max-md:hidden fixed md:w-[295px] w-[290px] h-[280px] rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.2)] border-gray-300 ml-[10px] ${
            theme === "dark" ? "bg-gray-700 text-gray-400 border-gray-500 border" : "bg-white text-black"
          }`}
        >
          <div className="p-2 h-[56px]">
            <div className="flex items-center">
              <img
                src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
                alt="Profile"
                className="w-[32px] h-[32px] object-cover rounded-full mr-3"
              />
              <div className="flex justify-between items-center w-full">
                <h3 className="font-semibold">Cristal Parker</h3>
              </div>
            </div>  
          </div>
          <div className="flex flex-col">
            <div className={`flex h-[56px] items-center p-4 ${ theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} `}>
              <span className="mr-3 text-gray-500 dark:text-gray-400">🎵</span>
              <div className="flex justify-between w-full">
                <span>Nhạc của bạn</span>
                <span className="ml-auto bg-gray-200 text-gray-600 text-xs rounded-full px-2 py-1 dark:bg-gray-600 dark:text-gray-300">
                  1
                </span>
              </div>
            </div>
            <div className={`flex h-[56px] items-center p-4 ${ theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} `}>
              <span className="mr-3 text-[#747881] dark:text-gray-400">
                <GroupUserIcon />
              </span>
              <div className="flex justify-between w-full">
                <span>Tạo nhóm</span>
              </div>
            </div>
            <div className={`flex h-[56px] items-center p-4 ${ theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} `}>
              <span className="mr-3 text-[#747881] dark:text-gray-400">
                {theme === "dark" ? <MoonIcon /> :  <SunIcon />}
              </span>
              <div className="flex justify-between w-full">
                <span>{theme === "dark" ? " Giao diện tối" : "Giao diện sáng"}</span>
                <label className="ml-auto relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-500 rounded-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
            <div className={`flex h-[56px] overflow-hidden rounded-bl-[15px] rounded-br-[15px] items-center p-4 ${ theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} `}
              onClick={openModalLogout}
            >
              <span className="mr-3 dark:text-gray-400">
                <UserIcon />
              </span>
              <div className="flex justify-between w-full">
                <span>Đăng xuất</span>
              </div>
            </div>
          </div>

          {isModalLogout && (
            <>
              <div
                className="fixed inset-0 bg-black opacity-50 z-9999"
                onClick={() => setIsModalLogout(false)}
              />
              <div
                className={`fixed z-9999 top-1/2 left-1/2 w-[300px] p-6 rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 ${
                  theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
              >
                <h2 className="text-lg font-semibold mb-4">Xác nhận đăng xuất</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Bạn có chắc chắn muốn đăng xuất?
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={() => setIsModalLogout(false)}
                  >
                    Hủy
                  </button>
                  <Link
                    to="/login"
                    className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                    onClick={() => setIsModalLogout(false)}
                  >
                    Đăng xuất
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Modal Search */}
      {isSearchModalOpen && (
        <div className="fixed bg-opacity-50 flex items-start justify-center z-50">
          <div
            className={`md:w-[349px] w-[290px] mt-2 overflow-hidden ${
              theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 pl-4">
                {filteredChats.length} results
              </p>
              <div className="h-[1px] w-full border-b border-[#DBDDE1] dark:border-gray-600"></div>
              {filteredChats.length > 0 ? (
                filteredChats.map((chat) => (
                  <NavLink
                    key={chat.id}
                    to={`/chat/${chat.id}`}
                    className="flex gap-3 items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    onClick={handleClear}
                  >
                    <img
                      src={chat.avata}
                      alt={chat.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium">{chat.name}</span>
                  </NavLink>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">Không tìm thấy kết quả</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Chat List */}
      {!isSearchModalOpen && (
        <div className="flex flex-col">
          {chatList.map((chat) => (
            <NavLink
              key={chat.id}
              to={`/chat/${chat.id}`}
              onClick={() => handleChatClick(chat.id)}
              className={({ isActive }) =>
                `flex md:items-center h-[72px] p-4  ${ theme === "dark" ?"hover:bg-gray-700" : "hover:bg-gray-100" }  ${
                  isActive  ? "  bg-gray-100 dark:bg-gray-700" : ""
                }`
              }
            >
              <img
                src={chat.avata}
                alt={chat.name}
                className="w-[49px] h-[49px] object-cover rounded-full mr-5 md:mr-3"
              />
              <div className="flex-1">
                <div className="flex flex-col justify-between w-[200px] max-md:w-[120px]">
                  <span
                    className={`font-medium ${
                      viewedChats.has(chat.id)
                        ? "text-gray-400 dark:text-gray-500"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {chat.name}
                  </span>
                  <p
                    className={`text-sm truncate ${
                      viewedChats.has(chat.id)
                        ? "text-gray-400 dark:text-gray-500"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
              <div className="flex-1 flex-col text-right">
                <div className="flex justify-end gap-2">
                  <span
                    className={`${
                      viewedChats.has(chat.id) ? "hidden" : "flex"
                    } ml-auto w-[29px] h-[24px] bg-red-500 text-white text-xs rounded-full px-2 py-1`}
                  >
                    80
                  </span>
                  <NoSoundIcon />
                </div>
                <span
                  className={`text-sm ${
                    viewedChats.has(chat.id)
                      ? "text-gray-400 dark:text-gray-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {chat.time}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}



// // src/Components/Sidebar.tsx
// import { NavLink } from "react-router";
// import MenuIcon from "./icons/MenuIcon";
// import SearchIcon from "./icons/SearchIcon";
// import CloseIcon from "./icons/CloseIcon";
// import LeftIcon from "./icons/LeftIcon";
// import { chatList } from "../pages/data/ChatData";
// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router";
// import NoSoundIcon from "./icons/NoSoundIcon";
// import UserIcon from "./icons/UserIcon";
// import SunIcon from "./icons/SunIcon";
// import MoonIcon from "./icons/MoonIcon";
// import GroupUserIcon from "./icons/GroupUserIcon";
// import { useTheme } from "../main"; // Thay useThemeStore bằng useTheme

// export default function Sidebar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalAvataOpen, setModalAvataOpen] = useState(false);
//   const [isModalLogout, setIsModalLogout] = useState(false);
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   const [viewedChats, setViewedChats] = useState(new Set());
  
//   const { theme, toggleTheme } = useTheme(); // Sử dụng useTheme từ Context

//   const sidebarRef = useRef();

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target) &&
//         window.innerWidth < 768
//       ) {
//         setIsModalOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleClear = () => {
//     setSearchTerm("");
//     setIsSearchModalOpen(false);
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const toggleAvataModal = () => {
//     setModalAvataOpen(!isModalAvataOpen);
//   };

//   const openModalLogout = () => {
//     setIsModalLogout(!isModalLogout);
//   };

//   const handleChatClick = (chatId) => {
//     setViewedChats((prev) => new Set(prev).add(chatId));
//   };

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setIsSearchModalOpen(value !== "");
//   };

//   const filteredChats = chatList.filter((chat) =>
//     chat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div
//       ref={sidebarRef}
//       className={`fixed top-0 left-0 h-full md:overflow-y-auto border-r border-gray-300 dark:border-gray-600 transition-all duration-300 md:w-[360px] group ${
//         isModalOpen ? "overflow-y-auto w-[300px]" : "max-md:overflow-hidden w-[80px]"
//       } ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
//     >
//       {/* Header */}
//       <div className="flex justify-between items-center pl-2 w-full h-[60px] py-[10px]">
//         <div className="ml-3 flex">
//           {searchTerm ? (
//             <button className="cursor-pointer" onClick={handleClear}>
//               <LeftIcon />
//             </button>
//           ) : (
//             <button className="cursor-pointer" onClick={toggleModal}>
//               <MenuIcon />
//             </button>
//           )}
//         </div>
//         <div className="relative w-[283px] mx-5">
//           <input
//             type="text"
//             placeholder="Tìm kiếm"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className={`pl-10 pr-8 p-2 w-full overflow-hidden h-[40px] border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 ${
//               theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 text-black border-gray-300"
//             }`}
//           />
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//             <SearchIcon isActive={searchTerm.length > 0} />
//           </div>
//           {searchTerm && (
//             <button
//               onClick={handleClear}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
//             >
//               <CloseIcon />
//             </button>
//           )}
//         </div>
//         <div>
//           <div className="" onClick={toggleAvataModal}>
//             <img
//               className="w-10 h-10 rounded-full mr-10 md:hidden cursor-pointer"
//               src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
//               alt=""
//             />
//           </div>
//           {isModalAvataOpen && (
//             <div
//               className={`bg-white border-t md:hidden fixed md:w-[340px] w-[290px] left-0 top-[60px] shadow-[0_0_10px_rgba(0,0,0,0.2)] border-gray-300 dark:border-gray-600 ${
//                 theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//             >
//               <div className="p-2 h-[56px]">
//                 <div className="flex items-center">
//                   <img
//                     src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
//                     alt="Profile"
//                     className="w-[32px] h-[32px] object-cover rounded-full mr-3"
//                   />
//                   <div className="flex justify-between items-center w-full">
//                     <h3 className="font-semibold">Cristal Parker</h3>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <span className="mr-3 text-gray-500 dark:text-gray-400">🎵</span>
//                   <div className="flex justify-between w-full">
//                     <span>Nhạc của bạn</span>
//                     <span className="ml-auto bg-gray-200 text-gray-600 text-xs rounded-full px-2 py-1 dark:bg-gray-600 dark:text-gray-300">
//                       1
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <span className="mr-3 text-[#747881] dark:text-gray-400">
//                     <GroupUserIcon />
//                   </span>
//                   <div className="flex justify-between w-full">
//                     <span>Tạo nhóm</span>
//                   </div>
//                 </div>
//                 <div className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <span className="mr-3 text-[#747881] dark:text-gray-400">
//                     {theme === "dark" ? <SunIcon /> : <MoonIcon />}
//                   </span>
//                   <div className="flex justify-between w-full">
//                     <span>{theme === "dark" ? "Giao diện sáng" : "Giao diện tối"}</span>
//                     <label className="ml-auto relative inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         className="sr-only peer"
//                         checked={theme === "dark"}
//                         onChange={toggleTheme}
//                       />
//                       <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-500 rounded-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
//                     </label>
//                   </div>
//                 </div>
//                 <div
//                   className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
//                   onClick={openModalLogout}
//                 >
//                   <span className="mr-3 dark:text-gray-400">
//                     <UserIcon />
//                   </span>
//                   <div className="flex justify-between w-full">
//                     <span>Đăng xuất</span>
//                   </div>
//                 </div>
//               </div>
//               {isModalLogout && (
//                 <>
//                   <div
//                     className="fixed inset-0 bg-black opacity-50 z-9999"
//                     onClick={() => setIsModalLogout(false)}
//                   />
//                   <div
//                     className={`fixed z-9999 top-1/2 left-1/2 w-[300px] p-6 rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 ${
//                       theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
//                     }`}
//                   >
//                     <h2 className="text-lg font-semibold mb-4">Xác nhận đăng xuất</h2>
//                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
//                       Bạn có chắc chắn muốn đăng xuất?
//                     </p>
//                     <div className="flex justify-end gap-3">
//                       <button
//                         className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 cursor-pointer"
//                         onClick={() => setIsModalLogout(false)}
//                       >
//                         Hủy
//                       </button>
//                       <Link
//                         to="/login"
//                         className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
//                         onClick={() => setIsModalLogout(false)}
//                       >
//                         Đăng xuất
//                       </Link>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Modal Menu */}
//       {isModalOpen && (
//         <div
//           className={`bg-white border-t max-md:hidden fixed md:w-[295px] w-[290px] h-[280px] rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.2)] border-gray-300 dark:border-gray-600 ml-[10px] ${
//             theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
//           }`}
//         >
//           <div className="p-2 h-[56px]">
//             <div className="flex items-center">
//               <img
//                 src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
//                 alt="Profile"
//                 className="w-[32px] h-[32px] object-cover rounded-full mr-3"
//               />
//               <div className="flex justify-between items-center w-full">
//                 <h3 className="font-semibold">Cristal Parker</h3>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
//               <span className="mr-3 text-gray-500 dark:text-gray-400">🎵</span>
//               <div className="flex justify-between w-full">
//                 <span>Nhạc của bạn</span>
//                 <span className="ml-auto bg-gray-200 text-gray-600 text-xs rounded-full px-2 py-1 dark:bg-gray-600 dark:text-gray-300">
//                   1
//                 </span>
//               </div>
//             </div>
//             <div className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
//               <span className="mr-3 text-[#747881] dark:text-gray-400">
//                 <GroupUserIcon />
//               </span>
//               <div className="flex justify-between w-full">
//                 <span>Tạo nhóm</span>
//               </div>
//             </div>
//             <div className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
//               <span className="mr-3 text-[#747881] dark:text-gray-400">
//                 {theme === "dark" ? <SunIcon /> : <MoonIcon />}
//               </span>
//               <div className="flex justify-between w-full">
//                 <span>{theme === "dark" ? "Giao diện sáng" : "Giao diện tối"}</span>
//                 <label className="ml-auto relative inline-flex items-center cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="sr-only peer"
//                     checked={theme === "dark"}
//                     onChange={toggleTheme}
//                   />
//                   <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-500 rounded-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
//                 </label>
//               </div>
//             </div>
//             <div
//               className="flex h-[56px] items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
//               onClick={openModalLogout}
//             >
//               <span className="mr-3 dark:text-gray-400">
//                 <UserIcon />
//               </span>
//               <div className="flex justify-between w-full">
//                 <span>Đăng xuất</span>
//               </div>
//             </div>
//           </div>

//           {isModalLogout && (
//             <>
//               <div
//                 className="fixed inset-0 bg-black opacity-50 z-9999"
//                 onClick={() => setIsModalLogout(false)}
//               />
//               <div
//                 className={`fixed z-9999 top-1/2 left-1/2 w-[300px] p-6 rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 ${
//                   theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
//                 }`}
//               >
//                 <h2 className="text-lg font-semibold mb-4">Xác nhận đăng xuất</h2>
//                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
//                   Bạn có chắc chắn muốn đăng xuất?
//                 </p>
//                 <div className="flex justify-end gap-3">
//                   <button
//                     className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 cursor-pointer"
//                     onClick={() => setIsModalLogout(false)}
//                   >
//                     Hủy
//                   </button>
//                   <Link
//                     to="/login"
//                     className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
//                     onClick={() => setIsModalLogout(false)}
//                   >
//                     Đăng xuất
//                   </Link>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       )}

//       {/* Modal Search */}
//       {isSearchModalOpen && (
//         <div className="fixed bg-opacity-50 flex items-start justify-center z-50">
//           <div
//             className={`md:w-[349px] w-[290px] mt-2 overflow-hidden ${
//               theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
//             }`}
//           >
//             <div>
//               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 pl-4">
//                 {filteredChats.length} results
//               </p>
//               <div className="h-[1px] w-full border-b border-[#DBDDE1] dark:border-gray-600"></div>
//               {filteredChats.length > 0 ? (
//                 filteredChats.map((chat) => (
//                   <NavLink
//                     key={chat.id}
//                     to={`/chat/${chat.id}`}
//                     className="flex gap-3 items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
//                     onClick={handleClear}
//                   >
//                     <img
//                       src={chat.avata}
//                       alt={chat.name}
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <span className="font-medium">{chat.name}</span>
//                   </NavLink>
//                 ))
//               ) : (
//                 <p className="text-gray-500 dark:text-gray-400">Không tìm thấy kết quả</p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Chat List */}
//       {!isSearchModalOpen && (
//         <div className="flex flex-col">
//           {chatList.map((chat) => (
//             <NavLink
//               key={chat.id}
//               to={`/chat/${chat.id}`}
//               onClick={() => handleChatClick(chat.id)}
//               className={({ isActive }) =>
//                 `flex md:items-center h-[72px] p-4 hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                   isActive ? "bg-gray-100 dark:bg-gray-700" : ""
//                 }`
//               }
//             >
//               <img
//                 src={chat.avata}
//                 alt={chat.name}
//                 className="w-[49px] h-[49px] object-cover rounded-full mr-5 md:mr-3"
//               />
//               <div className="flex-1">
//                 <div className="flex flex-col justify-between w-[200px] max-md:w-[120px]">
//                   <span
//                     className={`font-medium ${
//                       viewedChats.has(chat.id)
//                         ? "text-gray-400 dark:text-gray-500"
//                         : "text-black dark:text-white"
//                     }`}
//                   >
//                     {chat.name}
//                   </span>
//                   <p
//                     className={`text-sm truncate ${
//                       viewedChats.has(chat.id)
//                         ? "text-gray-400 dark:text-gray-500"
//                         : "text-gray-600 dark:text-gray-300"
//                     }`}
//                   >
//                     {chat.lastMessage}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex-1 flex-col text-right">
//                 <div className="flex justify-end gap-2">
//                   <span
//                     className={`${
//                       viewedChats.has(chat.id) ? "hidden" : "flex"
//                     } ml-auto w-[29px] h-[24px] bg-red-500 text-white text-xs rounded-full px-2 py-1`}
//                   >
//                     80
//                   </span>
//                   <NoSoundIcon />
//                 </div>
//                 <span
//                   className={`text-sm ${
//                     viewedChats.has(chat.id)
//                       ? "text-gray-400 dark:text-gray-500"
//                       : "text-gray-500 dark:text-gray-400"
//                   }`}
//                 >
//                   {chat.time}
//                 </span>
//               </div>
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }