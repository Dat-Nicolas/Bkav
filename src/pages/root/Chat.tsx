import { useState, useRef } from "react";
import ChatContent from "../../Components/ChatContent";
import AddIcon from "../../Components/icons/AddIcon";
import DownIcon from "../../Components/icons/DownIcon";
import EmojiIcon from "../../Components/icons/EmojiIcon";
import SendIcon from "../../Components/icons/SendIcon";
import { Upload, message } from "antd";
import { useThemeStore } from "../../store/themeStore";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  },
};

export default function Chat() {
  const chatRef = useRef();
  const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const inputRef = useRef(null);
  const theme = useThemeStore((state) => state.theme);

  
  const emojis = [
    "😊", "😂", "👍", "❤️", "😍", "😢", "😎", "😡", "🙌", "🔥",
    "😜", "🤔", "🥰", "😱", "😭", "😇", "😴", "😅", "😁", "🤗",
    "🎉", "🙈", "🤩", "🤪", "😤", "😋", "🤤", "😶", "😬", "😷",
    "🤒", "🤕", "🤑", "😈", "👻", "💀", "👽", "🤖", "🎃", "😺",
    "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🫶", "🫡"
  ];
  

  const toggleEmojiModal = () => {
    setIsEmojiModalOpen(!isEmojiModalOpen);
  };

  const handleEmojiSelect = (emoji) => {
    const input = inputRef.current;
    const startPos = input.selectionStart || 0;
    const endPos = input.selectionEnd || 0;
    const newValue =
      messageText.substring(0, startPos) + emoji + messageText.substring(endPos);
    setMessageText(newValue);
    setIsEmojiModalOpen(false);
    setTimeout(() => {
      input.focus();
      input.selectionStart = startPos + emoji.length;
      input.selectionEnd = startPos + emoji.length;
    }, 0);
  };

  const handleClickOutside = (e) => {
    if (
      isEmojiModalOpen &&
      !e.target.closest(".emoji-modal") &&
      !e.target.closest(".emoji-icon")
    ) {
      setIsEmojiModalOpen(false);
    }
  };

  const scrollToBottom = () => {
    console.log("scroll");
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  return (
    <div
      className="fixed bottom-0 left-[360px] max-md:left-[80px] right-0 "
      onClick={handleClickOutside}
    >
      <ChatContent ref={chatRef} />

      <div className="max-w-[1560px] h-[56px] mx-auto flex items-center justify-between gap-2 px-4 py-2">
        <Upload {...props}>
          <AddIcon />
        </Upload>

        <div className="relative flex flex-1 items-center gap-2 mx-4">
          <input
            type="text"
            placeholder="Nhập tin nhắn..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            ref={inputRef}
            className={`w-full h-[40px] overflow-hidden p-2 px-4 border rounded-full  focus:outline-none focus:ring-1 focus:ring-blue-500 ${theme === "dark" ? "bg-gray-700 text-white" : "text-black bg-[#DBDDE1]"}`}
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 emoji-icon"
            onClick={toggleEmojiModal}
          >
            <EmojiIcon />
          </button>
          {isEmojiModalOpen && (
            <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 grid grid-cols-5 gap-2 max-h-[200px] overflow-y-auto emoji-modal ">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  className="text-2xl hover:bg-gray-100 rounded p-1"
                  onClick={() => handleEmojiSelect(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>

        <div
          className="absolute h-[40px] w-[40px]  shadow-[0_0_10px_rgba(0,0,0,0.2)] flex justify-center items-center bg-white right-4 bottom-16 rounded-full p-1 cursor-pointer"
          onClick={scrollToBottom}
        >
          <DownIcon />
        </div>
        <SendIcon />
      </div>
    </div>
  );
}
