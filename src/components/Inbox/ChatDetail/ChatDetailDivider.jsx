import dayjs from "dayjs";

const ChatDetailDivider = ({ isNewMessage, sortByDate }) => {
  return (
    <>
      {isNewMessage === "yes" ? (
        <div className="flex items-center mt-6 mb-2">
          <div className="flex-grow border-b border-indicator-red"></div>
          <div className="mx-2 text-16px text-indicator-red font-semibold">New Message</div>
          <div className="flex-grow border-b border-indicator-red"></div>
        </div>
      ) : (
        <div className="flex items-center mt-6 mb-2">
          <div className="flex-grow border-b border-gray-400"></div>
          <div className="mx-2 text-md font-bold">{dayjs(sortByDate).format("MMMM D, YYYY")}</div>
          <div className="flex-grow border-b border-gray-400"></div>
        </div>
      )}
    </>
  );
};

export default ChatDetailDivider;
