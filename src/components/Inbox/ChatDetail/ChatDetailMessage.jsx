import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import ChatDetailMessageActions from "./ChatDetailMessageActions";

const ChatDetailMessage = ({
  message,
  currentUserId,
  handleDropdownToggle,
  dropdownVisible,
  handleActions,
}) => {
  return (
    <div
      key={message.messageId}
      className={`my-8 flex mr-4 ${
        message.userId === currentUserId ? "justify-end" : "justify-start"
      }`}
    >
      <div className="relative">
        <div className={`font-semibold ${message.userId === currentUserId ? "text-right" : ""}`}>
          <span style={{ color: message.colorUser }}>{message.sender}</span>
        </div>
        <div className="flex justify-start w-11/12">
          <div
            style={{ background: message.colorMessage }}
            className={` p-2 rounded-md  ${message.userId === currentUserId ? "order-last" : ""}`}
          >
            <div className="text-sm min-w-[200px]">{message.content}</div>
            <div className="text-sm mt-2">{dayjs(message.date).format("HH:MM")}</div>
          </div>
          <div className={`${message.userId === currentUserId ? "order-first" : ""}`}>
            <button onClick={() => handleDropdownToggle(message.messageId)} className="px-2">
              <FontAwesomeIcon icon={faEllipsisH} className="text-primary-darkGray" />
            </button>
            {dropdownVisible === message.messageId && (
              <ChatDetailMessageActions
                message={message}
                currentUserId={currentUserId}
                handleActions={handleActions}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetailMessage;
