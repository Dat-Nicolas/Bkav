import { useState, useRef } from "react";
import ChatContent from "../../Components/ChatContent";
import AddIcon from "../../Components/icons/AddIcon";
import DownIcon from "../../Components/icons/DownIcon";
import EmojiIcon from "../../Components/icons/EmojiIcon";
import SendIcon from "../../Components/icons/SendIcon";

export default function Chat() {
  const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const emojis = [
    "😊", "😂", "👍", "❤️", "😍", "😢", "😎", "😡", "🙌", "🔥",
    "🎉", "🥳", "😴", "🤓", "😜", "😇", "😈", "🙏", "💪", "✨",
    "😋", "🤗", "🥰", "😣", "😬", "🤩", "😷", "🥶", "😳", "🤔",
    "🐶", "🐱", "🐻", "🦁", "🐷", "🐸", "🐵", "🦄", "🐝", "🦋",
    "🍎", "🍕", "🍔", "🍦", "🍫", "🍉", "🍓", "🍒", "☕", "🍷",
    "⚽", "🏀", "🎸", "🎤", "🎮", "🚗", "✈️", "🚀", "🏖️", "🏔️",
  ];

  const toggleEmojiModal = () => {
    setIsEmojiModalOpen(!isEmojiModalOpen);
  };

  const handleEmojiSelect = (emoji) => {
    const input = inputRef.current;
    const startPos = input.selectionStart || 0;
    const endPos = input.selectionEnd || 0;
    const newValue =
      message.substring(0, startPos) + emoji + message.substring(endPos);
    setMessage(newValue);
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

  return (
    <div
      className="fixed bottom-0 left-[350px] max-md:left-[90px] right-0 bg-white"
      onClick={handleClickOutside}
    >
      <ChatContent />

      <div className="max-w-[1560px] mx-auto flex items-center justify-between gap-2 px-4 py-2">
        <AddIcon />

        <div className="relative flex flex-1 items-center gap-2 mx-4">
          <input
            type="text"
            placeholder="Nhập tin nhắn..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={inputRef}
            className="w-full overflow-hidden p-2 border rounded-full bg-[#DBDDE1] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 emoji-icon"
            onClick={toggleEmojiModal}
          >
            <EmojiIcon />
          </button>
         
          {isEmojiModalOpen && (
            <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 grid grid-cols-5 gap-2 max-h-[200px] overflow-y-auto emoji-modal z-10">
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

        <div className="absolute bg-white right-4 bottom-16 rounded-2xl p-1">
          <DownIcon />
        </div>
        <SendIcon />
      </div>
    </div>
  );
}



