import { NavLink } from "react-router";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import CloseIcon from "./icons/CloseIcon";
import LeftIcon from "./icons/LeftIcon";
import { chatList } from "../pages/data/ChatData";
import { useState } from "react";
import { Link } from "react-router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLogout, setIsModalLogout] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClear = () => {
    setSearchTerm("");
    setIsSearchModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModalLogout = () => {
    setIsModalLogout(!isModalLogout);
  };

  const handleChatClick = (chatId) => {
    setViewedChats((prev) => new Set(prev).add(chatId));
  };

  const [viewedChats, setViewedChats] = useState(new Set());

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearchModalOpen(value !== "");
  };

  const filteredChats = chatList.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[350px] relative max-md:w-full bg-white h-full overflow-y-auto">
      {/* Header */}
      <div className="flex  justify-between items-center w-full py-[10px]">
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
            className="pl-10 pr-8 overflow-hidden p-2 w-full h-[40px] border rounded-full bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <SearchIcon />
          </div>
          {searchTerm && (
            <button
              onClick={handleClear}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>

      {/* Modal Menu */}
      {isModalOpen && (
        <div className="fixed  bg-opacity-50 flex items-start justify-start z-50">
          <div className="bg-white w-[335px] mt-2  rounded-lg shadow-lg overflow-hidden">
            <div className="p-2">
              <div className="flex ">
                <img
                  src="https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-semibold">Cristal Parker</h3>
                  <button
                    onClick={toggleModal}
                    className=" text-gray-500 hover:text-gray-700"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex flex-col ">
              <div className="flex items-center p-4 hover:bg-[#DBDDE1]">
                <span className="mr-3 text-gray-500">🎵</span>
                <div className="flex justify-between w-full">
                  <span>Nhạc của bạn</span>
                  <span className="ml-auto bg-gray-200 text-gray-600 text-xs rounded-full px-2 py-1">
                    1
                  </span>
                </div>
              </div>
              <div className="flex items-center p-4 hover:bg-[#DBDDE1]">
                <span className="mr-3 text-gray-500">👥</span>
                <div className="flex justify-between w-full">
                  <span>Tạo nhóm</span>
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    80
                  </span>
                </div>
              </div>
              <div className="flex items-center p-4 hover:bg-[#DBDDE1]">
                <span className="mr-3 text-gray-500">🌙</span>
                <div className="flex justify-between w-full">
                  <span>Giao diện tối</span>
                  <label className="ml-auto relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
              </div>
              <div
                className="flex items-center p-4 hover:bg-[#DBDDE1] cursor-pointer "
                onClick={openModalLogout}
              >
                <span className="mr-3 text-gray-500">🚪</span>
                <div className="flex justify-between w-full ">
                  <span>Đăng xuất</span>
                </div>
              </div>
              {isModalLogout && (
                <>
                  <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setIsModalLogout(false)}
                  />

                  <div className="fixed z-50 top-1/2 left-1/2 w-[300px] p-6 bg-white rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-lg font-semibold mb-4">
                      Xác nhận đăng xuất
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                      Bạn có chắc chắn muốn đăng xuất?
                    </p>
                    <div className="flex justify-end gap-3">
                      <button
                        className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                        onClick={() => setIsModalLogout(false)}
                      >
                        Hủy
                      </button>
                      <Link to={"/login"}
                        className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                        onClick={() => {
                          setIsModalLogout(false);
                        }}
                      >
                        Đăng xuất
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal Search */}
      {isSearchModalOpen && (
        <div className="fixed  bg-opacity-50 flex items-start justify-center z-50">
          <div className="bg-white w-[350px] mt-2 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">
                {filteredChats.length} results
              </p>
              {filteredChats.length > 0 ? (
                filteredChats.map((chat) => (
                  <NavLink
                    key={chat.id}
                    to={`/chat/${chat.id}`}
                    className="flex items-center p-2 hover:bg-gray-100 rounded"
                    onClick={handleClear}
                  >
                    <img
                      src={chat.avata}
                      alt={chat.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-medium">{chat.name}</span>
                  </NavLink>
                ))
              ) : (
                <p className="text-gray-500">Không tìm thấy kết quả</p>
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
                `flex items-center p-4 hover:bg-gray-100 ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              <img
                src={chat.avata}
                alt={chat.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <span
                    className={`font-medium ${
                      viewedChats.has(chat.id) ? "text-gray-400" : "text-black"
                    }`}
                  >
                    {chat.name}
                  </span>
                  <span
                    className={`text-sm ${
                      viewedChats.has(chat.id)
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {chat.time}
                  </span>
                </div>
                <p
                  className={`text-sm truncate ${
                    viewedChats.has(chat.id) ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {chat.lastMessage}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

// import { NavLink } from "react-router";
// import MenuIcon from "./icons/MenuIcon";
// import SearchIcon from "./icons/SearchIcon";
// import CloseIcon from "./icons/CloseIcon";
// import LeftIcon from "./icons/LeftIcon";
// import { chatList } from "../pages/data/ChatData";
// import { useState } from "react";

// export default function Sidebar({ onChatSelect }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   const [viewedChats, setViewedChats] = useState(new Set());

//   const handleClear = () => {
//     setSearchTerm("");
//     setIsSearchModalOpen(false);
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleChatClick = (chatId) => {
//     setViewedChats((prev) => new Set(prev).add(chatId));
//     onChatSelect(); // Trigger the sliding animation
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
//     <div className="w-[350px] max-md:w-full bg-white h-full overflow-y-auto">
//       {/* Header */}
//       <div className="flex justify-between items-center w-full py-[10px]">
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
//             className="pl-10 pr-8 overflow-hidden p-2 w-full h-[40px] border rounded-full bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
//           />
//           <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//             <SearchIcon />
//           </div>
//           {searchTerm && (
//             <button
//               onClick={handleClear}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
//             >
//               <CloseIcon />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Modal Menu */}
//       {isModalOpen && (
//         <div className="fixed bg-opacity-50 flex items-start justify-start z-50">
//           <div className="bg-white w-[335px] mt-2 rounded-lg shadow-lg overflow-hidden">
//             <div className="p-2">
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
//               <div className="flex items-center p-4 hover:bg-[#DBDDE1]">
//                 <span className="mr-3 text-gray-500">🎵</span>
//                 <div className="flex justify-between w-full">
//                   <span>Nhạc của bạn</span>
//                   <span className="ml-auto bg-gray-200 text-gray-600 text-xs rounded-full px-2 py-1">
//                     1
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center p-4 hover:bg-[#DBDDE1]">
//                 <span className="mr-3 text-gray-500">👥</span>
//                 <div className="flex justify-between w-full">
//                   <span>Tạo nhóm</span>
//                   <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
//                     80
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center p-4 hover:bg-[#DBDDE1]">
//                 <span className="mr-3 text-gray-500">🌙</span>
//                 <div className="flex justify-between w-full">
//                   <span>Giao diện tối</span>
//                   <label className="ml-auto relative inline-flex items-center cursor-pointer">
//                     <input type="checkbox" className="sr-only peer" />
//                     <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
//                   </label>
//                 </div>
//               </div>
//               <div className="flex items-center p-4 hover:bg-[#DBDDE1]">
//                 <span className="mr-3 text-gray-500">🚪</span>
//                 <div className="flex justify-between w-full">
//                   <span>Đăng xuất</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal Search */}
//       {isSearchModalOpen && (
//         <div className="fixed bg-opacity-50 flex items-start justify-center z-50">
//           <div className="bg-white w-[350px] mt-2 rounded-lg shadow-lg overflow-hidden">
//             <div className="p-4">
//               <p className="text-sm text-gray-500 mb-2">
//                 {filteredChats.length} results
//               </p>
//               {filteredChats.length > 0 ? (
//                 filteredChats.map((chat) => (
//                   <NavLink
//                     key={chat.id}
//                     to={`/chat/${chat.id}`}
//                     className="flex items-center p-2 hover:bg-gray-100 rounded"
//                     onClick={() => {
//                       handleClear();
//                       onChatSelect(); // Trigger the sliding animation
//                     }}
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
//                 <p className="text-gray-500">Không tìm thấy kết quả</p>
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
//                 `flex items-center p-4 hover:bg-gray-100 ${
//                   isActive ? "bg-gray-100" : ""
//                 }`
//               }
//             >
//               <img
//                 src={chat.avata}
//                 alt={chat.name}
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div className="flex-1">
//                 <div className="flex justify-between">
//                   <span
//                     className={`font-medium ${
//                       viewedChats.has(chat.id) ? "text-gray-400" : "text-black"
//                     }`}
//                   >
//                     {chat.name}
//                   </span>
//                   <span
//                     className={`text-sm ${
//                       viewedChats.has(chat.id)
//                         ? "text-gray-400"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {chat.time}
//                   </span>
//                 </div>
//                 <p
//                   className={`text-sm truncate ${
//                     viewedChats.has(chat.id) ? "text-gray-400" : "text-gray-600"
//                   }`}
//                 >
//                   {chat.lastMessage}
//                 </p>
//               </div>
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
