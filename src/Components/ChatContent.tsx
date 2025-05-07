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
import DoubleDoneIcon from "./icons/DoubleDoneIcon";
import { useThemeStore } from "../store/themeStore";

export default function ChatContent() {
  const { id } = useParams();
  const [isOpenEmojiIndex, setOpenEmojiIndex] = useState(null);
  const [isOpenOptionIndex, setOpenOptionIndex] = useState(null);
  const [isModalDeleteContent, setModalDeleteContent] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const [deletedSuccess, setDeletedSuccess] = useState(false);
  const inputRef = useRef(null);

  const selectedUser = chatList.find((chat) => chat.id === parseInt(id));
  const userMessages = messages.filter((msg) => msg.id === parseInt(id));
  const [selectedEmojis, setSelectedEmojis] = useState({});

  const emojiIcons = ["😊", "😂", "👍", "😍", "😢", "😡"];

  const toggleEmojiModal = (index) => {
    setOpenEmojiIndex((prev) => (prev === index ? null : index));
  };
  const toggleOptionModal = (index) => {
    setOpenOptionIndex((prev) => (prev === index ? null : index));
  };

  const handleEmojiSelect = (emoji, e, index) => {
    e.stopPropagation();
    setSelectedEmojis((prev) => ({
      ...prev,
      [index]: emoji,
    }));
    setOpenEmojiIndex(null);
  };

  const handleClickOutside = (e) => {
    if (
      isOpenEmojiIndex !== null &&
      !e.target.closest(".emoji-icon") &&
      !e.target.closest(".option-icon-left") &&
      !e.target.closest(".option-icon-right")
    ) {
      setOpenEmojiIndex(null);
    }

    if (
      isOpenOptionIndex !== null &&
      !e.target.closest(".emoji-icon") &&
      !e.target.closest(".option-icon-right") &&
      !e.target.closest(".option-icon-left")
    ) {
      setOpenOptionIndex(null);
    }
  };

  const confirmDeleteMessage = () => {
    if (messageToDelete !== null) {
      setUserMessages((prevMessages) =>
        prevMessages.filter((_, index) => index !== messageToDelete)
      );
      setMessageToDelete(null);
      setModalDeleteContent(false);
      setIsDeleteModalOpen(false);
      setDeletedSuccess(true);
      setTimeout(() => setDeletedSuccess(false), 2000);
    }
  };

  const handleOpenDeleteModal = (index) => {
    setMessageToDelete(index);
    setModalDeleteContent(true);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setModalDeleteContent(false);
    setIsDeleteModalOpen(false);
  };
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className="flex-1 w-full h-screen pt-[115px]  flex flex-col  overflow-y-auto"
      onClick={handleClickOutside}
    >
      {/* Chat Header */}
      <div className={`fixed top-0 h-[60px] w-full p-2  border-b border-gray-200 flex items-center  ${theme === "dark" ? "bg-gray-800 text-gray-600" : "bg-white"}`}>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={selectedUser?.avata}
                alt={selectedUser?.name || "User"}
                className="relative w-[40px] h-[40px] rounded-full mr-3"
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
      <div className="flex-1   px-[8px] pt-[8px]  overflow-y-auto">
        {userMessages.length > 0 ? (
          userMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex  mb-4 ${
                msg.isSent ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex  flex-col ${
                  msg.isSent ? "items-end" : "items-start"
                } w-full`}
              >
                <div
                  className={`flex text-left items-center gap-1 w-full ${
                    msg.isSent ? "justify-end" : "justify-start"
                  }`}
                >
                  {!msg.isSent && (
                    <img
                      src={selectedUser?.avata}
                      alt={msg.user}
                      className="w-8 h-8  rounded-full mr-2 mb-2 self-end"
                    />
                  )}
                  {msg.isSent && (
                    <div className="relative  w-[68px] h-[34px] mr-3 flex gap-2 items-center">
                      <div
                        onClick={() => toggleEmojiModal(index)}
                        className="emoji-icon relative"
                      >
                        <EmojiIcon />
                        {isOpenEmojiIndex === index && (
                          <div className="absolute w-60 top-[-50px] left-[-20px] bg-white border border-gray-200 rounded-lg shadow-lg grid grid-cols-6 emoji-modal z-10">
                            {emojiIcons.map((emoji, emojiIndex) => (
                              <button
                                key={emojiIndex}
                                className="text-2xl w-10 h-10 hover:bg-[#669FFF] rounded p-1 cursor-pointer"
                                onClick={(e) =>
                                  handleEmojiSelect(emoji, e, index)
                                }
                              >
                                {emoji}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <div
                        onClick={() => toggleOptionModal(index)}
                        className="option-icon-left"
                      >
                        <OptionIcon />
                        {isOpenOptionIndex === index && (
                          <div className="absolute top-0 md:left-[-150px]  left-[-135px] rounded-xl bg-gray-100 w-35 shadow-[0_0_10px_rgba(0,0,0,0.2)] z-10 cursor-pointer">
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
                              <BackIcon />
                              Trả lời
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
                              <EditIcon />
                              Chỉnh sửa
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
                              <PinIcon />
                              Ghim
                            </div>
                            <div
                              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200 text-red-500 cursor-pointer"
                              onClick={() => handleOpenDeleteModal(index)}
                            >
                              <TrashIcon />
                              Xóa tin nhắn
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div
                    className={`max-w-[50%]  relative  rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[2px] ${
                      msg.isSent
                        ? "bg-[#E0F0FF] text-[#080707]"
                        : "bg-[#E9EAED] text-[#080707]"
                    } ${msg.isSent ? "text-right" : "text-left"}`}
                  >
                    {selectedEmojis[index] && (
                      <div className="absolute right-0 bottom-[-12px] text-xl">
                        {selectedEmojis[index]}
                      </div>
                    )}
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Attachment"
                        className=" rounded-[14px] w-full  object-cover max-w-[252px] h-auto"
                      />
                    )}
                    {msg.video && (
                      <video
                        src={msg.video}
                        controls
                        className=" rounded-[14px] w-full object-cover max-w-[252px] h-auto"
                      />
                    )}
                    {msg.content && (
                      <p className="w-[250px] max-lg:w-[180px] text-left p-2 break-words">
                        {msg.content}
                      </p>
                    )}

                    {msg.link && (
                      <a
                        href={msg.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={` truncate p-2 max-w-[200px] block w-[150px] ${
                          msg.isSent ? "text-blue-200" : "text-blue-500"
                        } underline`}
                      >
                        {msg.link}
                      </a>
                    )}
                  </div>

                  {!msg.isSent && (
                    <div className="relative w-[68px] h-[34px] ml-3 flex gap-2 items-center">
                      <div
                        onClick={() => toggleEmojiModal(index)}
                        className="emoji-icon relative"
                      >
                        <EmojiIcon />
                        {isOpenEmojiIndex === index && (
                          <div className="absolute w-60 top-[-50px] right-[-20px] bg-white border border-gray-200 rounded-lg shadow-lg grid grid-cols-6 emoji-modal z-10">
                            {emojiIcons.map((emoji, emojiIndex) => (
                              <button
                                key={emojiIndex}
                                className="text-2xl w-10 h-10 hover:bg-[#669FFF] rounded p-1 cursor-pointer"
                                onClick={(e) =>
                                  handleEmojiSelect(emoji, e, index)
                                }
                              >
                                {emoji}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <div
                        onClick={() => toggleOptionModal(index)}
                        className="option-icon-right"
                      >
                        <OptionIcon />
                        {isOpenOptionIndex === index && (
                          <div className="absolute top-0 left-[80px] rounded-xl bg-gray-100 w-35 shadow-[0_0_10px_rgba(0,0,0,0.2)] z-10">
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
                              <BackIcon />
                              Trả lời
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
                              <EditIcon />
                              Chỉnh sửa
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200">
                              <PinIcon />
                              Ghim
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200 text-red-500 cursor-pointer"
                             onClick={() => handleOpenDeleteModal(index)}>
                              <TrashIcon />
                              Xóa tin nhắn
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <p
                  className={`text-xs flex items-center mt-1 text-gray-500 ${
                    msg.isSent ? "self-end" : "ml-10"
                  }`}
                >
                  <DoubleDoneIcon />
                  {msg.time}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <ChatIcon />
            <p className="text-gray-500 text-center mb-40">
              Chưa có tin nhắn ...
            </p>
          </div>
        )}
      </div>
      {/* Delete Confirmation Modal */}
      {isModalDeleteContent && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-99999"
            onClick={handleCloseDeleteModal}
          />
          <div className="fixed z-99999 top-1/2 left-1/2 w-[300px] p-6 bg-white rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 text-black">
            <h2 className="text-lg font-semibold mb-4">Xóa tin nhắn</h2>
            <p className="text-sm text-gray-600 mb-6">
              Bạn có chắc chắn muốn xóa tin nhắn này?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
                onClick={handleCloseDeleteModal}
              >
                Hủy bỏ
              </button>
              <button
                className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                onClick={confirmDeleteMessage}
              >
                Xóa
              </button>
            </div>
          </div>
        </>
      )}

      {/* Success Notification */}
      {deletedSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Đã xóa tin nhắn thành công!
        </div>
      )}
    </div>
  );
}
