import { NavLink } from "react-router";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import CloseIcon from "./icons/CloseIcon";
import LeftIcon from "./icons/LeftIcon";
import { chatList } from "../pages/data/ChatData";
import { useState } from "react";
import NoSoundIcon from "./icons/NoSoundIcon";
import ModalMenu from "./ModalMenu";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAvataOpen, setModalAvataOpen] = useState(false);
  const [isModalLogout, setIsModalLogout] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [viewedChats, setViewedChats] = useState(new Set());

  // Use RTK for theme
  const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme);
  const dispatch = useDispatch();

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

  const handleChatClick = (chatId: number | string) => {
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
        isModalOpen
          ? "overflow-y-auto w-[300px]"
          : "max-md:overflow-hidden w-[80px]"
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
              theme === "dark"
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
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
                theme === "dark"
                   ? "bg-gray-700 text-gray-400 border-gray-500 border"
              : "bg-white text-black"
              }`}
            >
              <ModalMenu
                theme={theme}
                toggleTheme={() => dispatch(toggleTheme())}
              />
            </div>
          )}
        </div>
      </div>

      {/* Modal Menu */}
      {isModalOpen && (
        <div
          className={` border-t  max-md:hidden fixed md:w-[295px] w-[290px] h-[280px] rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.2)] border-gray-300 ml-[10px] ${
            theme === "dark"
              ? "bg-gray-700 text-gray-400 border-gray-500 border"
              : "bg-white text-black"
          }`}
        >
          <ModalMenu
            theme={theme}
            toggleTheme={() => dispatch(toggleTheme())}
          />
        </div>
      )}

      {/* Modal Search */}
      {isSearchModalOpen && (
        <div className="fixed bg-opacity-50 flex items-start justify-center ">
          <div
            className={`md:w-[349px] w-[290px] mt-2 overflow-hidden ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
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
                <p className="text-gray-500 dark:text-gray-400">
                  Không tìm thấy kết quả
                </p>
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
                `flex md:items-center h-[72px] p-4   ${
                  theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }  ${isActive ? "  bg-gray-100 dark:bg-gray-700 " : ""}`
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