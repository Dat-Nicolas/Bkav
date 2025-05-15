import GroupUserIcon from "./icons/GroupUserIcon";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import UserIcon from "./icons/UserIcon";
import ModalForm from "./ModalForm";

interface ModalMenuProps {
    theme: "dark" | "light";
    toggleTheme: () => void;
  }
  

export default function ModalMenu( {  theme, toggleTheme } : ModalMenuProps) {
  return (
    <div>
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
            <div className={`flex h-[56px] cursor-pointer items-center p-4 ${ theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} `}>
              <span className="mr-3 text-gray-500 dark:text-gray-400">🎵</span>
              <div className="flex justify-between w-full">
                <span>Nhạc của bạn</span>
                <span className="ml-auto bg-gray-200 text-gray-600 text-xs rounded-full px-2 py-1 dark:bg-gray-600 dark:text-gray-300">
                  1
                </span>
              </div>
            </div>
            <div className={`flex h-[56px] cursor-pointer items-center p-4 ${ theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} `}>
              <span className="mr-3 text-[#747881] dark:text-gray-400">
                <GroupUserIcon />
              </span>
              <div className="flex justify-between w-full">
                <span>Tạo nhóm</span>
              </div>
            </div>
            <div className={`flex h-[56px] cursor-pointer items-center p-4 ${ theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} `}>
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
            <div className={`flex h-[56px] cursor-pointer overflow-hidden rounded-bl-[15px] rounded-br-[15px] items-center p-4 ${ theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"} `}
            >
              <span className="mr-3 dark:text-gray-400">
                <UserIcon />
              </span>
              <div className="flex justify-between w-full" >
              <ModalForm
              titlebtn = {"Đăng xuất"}
              titlemodal = {"Đăng xuất"}
              modaltext="Bạn có chắc chắn muốn đăng xuất không?"
              />
              </div>
            </div>
          </div>
    </div>
  )
}
