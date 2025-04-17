import { useParams } from "react-router";
import { chatList, messages } from "../pages/data/ChatData";
import LeftIcon from "./icons/LeftIcon";
import ChatIcon from "./icons/ChatIcon";
import { NavLink } from "react-router";

export default function ChatContent() {
  const { id } = useParams();

  // Tìm user từ chatList dựa trên id
  const selectedUser = chatList.find((chat) => chat.id === parseInt(id));
  // Lọc messages dựa trên id của cuộc trò chuyện
  const userMessages = messages.filter((msg) => msg.id === parseInt(id));

  return (
    <div className="flex-1 w-full h-full flex flex-col bg-gray-100">
      {/* Chat Header */}
      <div className="fixed top-0 w-full p-2 bg-white border-b border-gray-200 flex items-center z-10">
        <div className="flex items-center gap-3">
          <NavLink to={`/chat/`} className="md:hidden">
            <LeftIcon />
          </NavLink>
          <div className="flex items-center">
            <img
              src={selectedUser?.avata}
              alt={selectedUser?.name || "User"}
              className="w-10 h-10 rounded-full mr-3"
            />
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
                  className={`flex ${
                    msg.isSent ? "justify-end" : "justify-start"
                  } w-full`}
                >
                  {/* Avatar cho tin nhắn từ user khác */}
                  {!msg.isSent && (
                    <img
                      src={selectedUser?.avata}
                      alt={msg.user}
                      className="w-8 h-8 rounded-full mr-2 self-end"
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
                        href={msg.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-2 block ${
                          msg.isSent ? "text-blue-200" : "text-blue-500"
                        } underline`}
                      >
                        {msg.link.title || msg.link.url}
                      </a>
                    )}
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
              <ChatIcon/>
            <p className="text-gray-500 text-center mb-65">
              Chưa có tin nhắn ...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
