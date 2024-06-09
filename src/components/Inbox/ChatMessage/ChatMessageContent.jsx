import dayjs from "dayjs";

const ChatMessageContent = ({ message }) => {
  return (
    <div className="w-full">
      <div className="flex space-x-4 items-start">
        <div className="text-16px font-semibold text-primary-blue">{message.title}</div>
        <div className="text-14px text-primary-darkGray min-w-[125px]">
          {dayjs(message.time).format("DD/MM/YYYY HH:mm")}
        </div>
      </div>
      <div className="leading-4 mt-1">
        {message.participants > 2 && (
          <p className="text-14px font-bold pb-0 text-primary-darkGray ">{message.sender} :</p>
        )}

        <p className="text-14px line-clamp-1 text-primary-darkGray">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessageContent;
