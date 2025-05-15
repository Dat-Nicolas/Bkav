import { useParams } from "react-router";
import { chatList, messages } from "../pages/data/ChatData";
import ChatIcon from "./icons/ChatIcon";
import OnlineBtn from "./OnlineBtn";
import EmojiIcon from "./icons/EmojiIcon";
import { useState } from "react";
import OptionIcon from "./icons/OptionIcon";
import TrashIcon from "./icons/TrashIcon";
import BackIcon from "./icons/BackIcon";
import EditIcon from "./icons/EditIcon";
import PinIcon from "./icons/PinIcon";
import DoubleDoneIcon from "./icons/DoubleDoneIcon";
import { useSelector } from "react-redux";
import { Modal } from "antd";

export default function ChatContent() {
  const { id } = useParams();
  const [isOpenEmojiIndex, setOpenEmojiIndex] = useState(null);
  const [isOpenOptionIndex, setOpenOptionIndex] = useState(null);
  const [openDeleteIndex, setOpenDeleteIndex] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
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
      !e.target.closest(".option-icon-left") &&
      !e.target.closest(".ant-modal")
    ) {
      setOpenOptionIndex(null);
    }
  };

  const handleOk = (index) => {
    setConfirmLoading(true);
    setTimeout(() => {
      console.log("Xóa tin nhắn tại index:", index);
      setOpenDeleteIndex(null);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setOpenDeleteIndex(null);
    setConfirmLoading(false);
  };

  const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme);

  return (
    <div
      className="flex-1 w-full h-screen pt-[115px] flex flex-col overflow-y-auto"
      onClick={handleClickOutside}
    >
      {/* Chat Header */}
      <div
        className={`fixed top-0 h-[60px] w-full p-2 border-b border-gray-200 flex items-center ${
          theme === "dark" ? "bg-gray-800 text-gray-600" : "bg-white"
        }`}
      >
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
      <div className="flex-1 px-[8px] pt-[8px] overflow-y-auto rounded-content-right">
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
                  className={`flex text-left items-center gap-1 w-full ${
                    msg.isSent ? "justify-end" : "justify-start"
                  }`}
                >
                  {!msg.isSent && (
                    <img
                      src={selectedUser?.avata}
                      alt={msg.user}
                      className="w-8 h-8 rounded-full mr-2 mb-2 self-end"
                    />
                  )}
                  {msg.isSent && (
                    <div className="relative w-[68px] h-[34px] mr-3 flex gap-2 items-center">
                      <div
                        onClick={() => toggleEmojiModal(index)}
                        className="emoji-icon relative"
                      >
                        <EmojiIcon />
                        {isOpenEmojiIndex === index && (
                          <div className="absolute w-60 top-[-50px] left-[-20px] bg-white border border-gray-200 rounded-lg shadow-lg grid grid-cols-6 emoji-modal">
                            {emojiIcons.map((emoji, emojiIndex) => (
                              <button
                                key={emojiIndex}
                                className="text-2xl w-10 h-10 hover:bg-[#669FFF] rounded p-1 cursor-pointer"
                                onClick={(e) => handleEmojiSelect(emoji, e, index)}
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
                          <div
                            className="absolute top-0 md:left-[-150px] left-[-135px] rounded-xl bg-gray-100 w-35 shadow-[0_0_10px_rgba(0,0,0,0.2)] cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
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
                              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200 cursor-pointer"
                              onClick={() => {
                                setOpenDeleteIndex(index);
                                setOpenOptionIndex(null);
                              }}
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
                    className={`max-w-[50%] relative ${
                      msg.isSent
                        ? "rounded-content-right bg-[#E0F0FF] text-[#080707]"
                        : "rounded-content-left bg-[#E9EAED] text-[#080707]"
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
                        className="rounded-[14px] w-full object-cover max-w-[252px] h-auto"
                      />
                    )}
                    {msg.video && (
                      <video
                        src={msg.video}
                        controls
                        className="rounded-[14px] w-full object-cover max-w-[252px] h-auto"
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
                        className={`truncate p-2 max-w-[200px] block w-[150px] ${
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
                          <div className="absolute w-60 top-[-50px] right-[-20px] bg-white border border-gray-200 rounded-lg shadow-lg grid grid-cols-6 emoji-modal">
                            {emojiIcons.map((emoji, emojiIndex) => (
                              <button
                                key={emojiIndex}
                                className="text-2xl w-10 h-10 hover:bg-[#669FFF] rounded p-1 cursor-pointer"
                                onClick={(e) => handleEmojiSelect(emoji, e, index)}
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
                          <div
                            className="absolute top-0 left-[80px] rounded-xl bg-gray-100 w-35 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                            onClick={(e) => e.stopPropagation()}
                          >
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
                              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-200 cursor-pointer"
                              onClick={() => {
                                setOpenDeleteIndex(index);
                                setOpenOptionIndex(null);
                              }}
                            >
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
            <p className="text-gray-500 text-center mb-40">Chưa có tin nhắn ...</p>
          </div>
        )}
      </div>

      {/* Modal Xóa Tin Nhắn */}
      {openDeleteIndex !== null && (
        <Modal
          title="Xóa tin nhắn"
          open={true}
          onOk={() => handleOk(openDeleteIndex)}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[
            <button
              key="cancel"
              onClick={handleCancel}
              className="bg-blue-500 text-white px-4 py-1 rounded mr-4 hover:bg-blue-400 cursor-pointer"
            >
              Hủy bỏ
            </button>,
            <button
              key="ok"
              onClick={() => handleOk(openDeleteIndex)}
              className="text-white border bg-red-500 px-4 py-1 rounded hover:bg-red-400 cursor-pointer"
            >
              Đồng ý
            </button>,
          ]}
        >
          <p>Bạn có chắc chắn muốn xóa tin nhắn này?</p>
        </Modal>
      )}
    </div>
  );
}