import { useParams } from "react-router";
import { chatList, messages } from "../pages/data/ChatData";
import ChatIcon from "./icons/ChatIcon";
import OnlineBtn from "./OnlineBtn";
import EmojiIcon from "./icons/EmojiIcon";
import { useRef, useState } from "react";
import OptionIcon from "./icons/OptionIcon";
import TrashIcon from "./icons/TrashIcon";
import BackIcon from "./icons/BackIcon";
import EditIcon from "./icons/EditIcon";
import PinIcon from "./icons/PinIcon";

export default function ChatContent() {
  const { id } = useParams();
  const [isOpenEmojiIndex, setOpenEmojiIndex] = useState(null);
  const [isOpenOptionIndex, setOpenOptionIndex] = useState(null);
  const inputRef = useRef(null);
  const selectedUser = chatList.find((chat) => chat.id === parseInt(id));
  const userMessages = messages.filter((msg) => msg.id === parseInt(id));

  const emojiIcons = ["😊", "😂", "👍", "😍", "😢", "😡"];

  const toggleEmojiModal = (index) => {
    setOpenEmojiIndex((prev) => (prev === index ? null : index));
  };
  const toggleOptionModal = (index) => {
    setOpenOptionIndex((prev) => (prev === index ? null : index));
  };

  const handleEmojiSelect = ( emoji ,e) => {
    console.log("Selected emoji:", emoji);
    e.stopPropagation(); 
    setOpenEmojiIndex(null);
  };
  const handleOptionSelect = ( e) => {
    e.stopPropagation(); 
    setOpenEmojiIndex(null);
  };

  const handleClickOutside = (e) => {
    if (
      isOpenEmojiIndex  &&
      !e.target.closest(".emoji-modal") &&
      !e.target.closest(".emoji-icon")
    ) {
      setOpenEmojiIndex(false);
    }
  };

  return (
    <div
      className="flex-1 w-full h-full flex flex-col bg-gray-100"
      onClick={handleClickOutside}
    >
      {/* Chat Header */}
      <div className="fixed top-0 w-full p-2 bg-white border-b border-gray-200 flex items-center z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={selectedUser?.avata}
                alt={selectedUser?.name || "User"}
                className="relative w-10 h-10 rounded-full mr-3"
              />
              <div className="absolute top-[-5px] right-[10px]">
                <OnlineBtn />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                {selectedUser?.name || "Unknown User"}
              </h2>
              <h3>Online for 2 hours</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1  p-4 pt-16 overflow-y-auto">
        {userMessages.length > 0 ? (
          userMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                msg.isSent ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex flex-col ${
                  msg.isSent ? "items-end" : "items-start"
                } w-full`}
              >
                <div
                  className={`flex items-center gap-1 ${
                    msg.isSent ? "justify-end" : "justify-start"
                  } w-full`}
                >
                  {!msg.isSent && (
                    <img
                      src={selectedUser?.avata}
                      alt={msg.user}
                      className="w-8 h-8  rounded-full mr-2 mb-2 self-end"
                    />
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl ${
                      msg.isSent
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800"
                    } ${msg.isSent ? "text-right" : "text-left"}`}
                  >
                    {msg.content && <p>{msg.content}</p>}
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Attachment"
                        className="mt-2 rounded w-full max-w-[200px] h-auto"
                      />
                    )}
                    {msg.video && (
                      <video
                        src={msg.video}
                        controls
                        className="mt-2 rounded w-full max-w-[200px] h-auto"
                      />
                    )}
                    {msg.link && (
                      <a
                        href={msg.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-2  max-w-[200px] block w-[150px]${
                          msg.isSent ? "text-blue-200" : "text-blue-500"
                        } underline`}
                      >
                        {msg.link}
                      </a>
                    )}
                  </div>
                <div className="relative w-[50px] ml-3 flex gap-2 items-center">
                      <div
                        key={index}
                        
                        onClick={() => toggleEmojiModal(index)}
                      >
                        <EmojiIcon />
  
                        {isOpenEmojiIndex === index && (
                          <div className="absolute w-60 top-[-50px] right-[-20px] bg-white border border-gray-200 rounded-lg shadow-lg grid grid-cols-6 emoji-modal z-10">
                            {emojiIcons.map((emoji, emojiIndex) => (
                              <button
                                key={emojiIndex}
                                className="text-2xl w-10 h-10 hover:bg-gray-100 rounded p-1 cursor-pointer"
                                onClick={() => handleEmojiSelect(emoji)}
                              >
                                {emoji}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <div key={index}
                        onClick={()=>toggleOptionModal(index)}
                      >
                      <OptionIcon />

                      {isOpenOptionIndex === index && (
                        <div className="absolute  top-0 left-[70px] rounded-xl  w-35 shadow-[0_0_10px_rgba(0,0,0,0.2)] ">
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
                              <BackIcon/>
                              Trả lời
                            </div> 
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
                              <EditIcon/>
                              Chỉnh sửa
                              </div> 
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
                              <PinIcon/>
                              Ghim
                            </div> 
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200 text-red-500">
                              <TrashIcon/>
                              Xóa tin nhắn</div>   
                        </div>
                      )}
                      </div>
                </div>
          
                </div>
                <p
                  className={`text-xs mt-1 ${
                    msg.isSent ? "text-gray-500" : "text-gray-500"
                  } ${msg.isSent ? "self-end" : "ml-10"}`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <ChatIcon />
            <p className="text-gray-500 text-center mb-65">
              Chưa có tin nhắn ...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
