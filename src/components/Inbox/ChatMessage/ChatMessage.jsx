import ChatMessageAvatar from "./ChatMessageAvatar";
import ChatMessageContent from "./ChatMessageContent";
import ChatMessageNotification from "./ChatMessageNotification";

const ChatMessage = ({ message, messages, index, handleChatClick }) => {
  return (
    <div
      key={message.id}
      onClick={() => handleChatClick(message.id)}
      className={`flex space-x-2 cursor-pointer popup-item ${
        index !== messages.length - 1 ? "border-b" : ""
      }`}
    >
      <ChatMessageAvatar participants={message.participants} title={message.title} />
      <ChatMessageContent message={message} />
      <ChatMessageNotification message={message} />
    </div>
  );
};

export default ChatMessage;
