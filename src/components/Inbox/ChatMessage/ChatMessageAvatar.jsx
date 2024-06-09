import PersonPrimary from "/icons/PersonPrimary.svg";
import PersonSecondary from "/icons/PersonSecondary.svg";

const ChatMessageAvatar = ({ participants, title }) => {
  const initialChatChar = title.charAt(0).toUpperCase();

  return (
    <div className="w-[80px] flex justify-center">
      {participants > 2 ? (
        <div className="flex items-start -space-x-5">
          <div className="p-2 rounded-full bg-primary-lightGray border-2 border-primary-lightGray">
            <img
              className="h-5 w-5 rounded-full object-cover object-center focus:z-10"
              src={PersonPrimary}
              alt="Chat Avatar 1"
            />
          </div>
          <div className="p-2 rounded-full bg-primary-blue border-2 border-primary-blue">
            <img
              className="h-5 w-5 rounded-full object-cover object-center focus:z-10"
              src={PersonSecondary}
              alt="Chat Avatar 2"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-blue border-2 border-primary-blue text-primary-lightGray font-bold">
          {initialChatChar}
        </div>
      )}
    </div>
  );
};

export default ChatMessageAvatar;
