const ChatMessageNotification = ({ message }) => {
  return (
    <div className="pr-2 flex items-center">
      <div
        className={`rounded-full p-1 ${message.newMessage ? "bg-indicator-red" : "bg-transparent"}`}
      ></div>
    </div>
  );
};

export default ChatMessageNotification;
