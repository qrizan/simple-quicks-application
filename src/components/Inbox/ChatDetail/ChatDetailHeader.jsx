import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";

const ChatDetailHeader = ({ title, numberOfUsers, onBack }) => {
  return (
    <div className="flex justify-between items-center pb-6 w-full">
      <div className="flex">
        <button onClick={onBack} className="mr-4">
          <FontAwesomeIcon icon={faArrowLeft} className="fa-xl" />
        </button>
        <div>
          <div className="font-semibold text-primary-blue">{title}</div>
          <div className="text-14px">{numberOfUsers} Participants</div>
        </div>
      </div>
      <button onClick={onBack} className="mr-2">
        <FontAwesomeIcon icon={faXmark} className="fa-xl" />
      </button>
    </div>
  );
};

export default ChatDetailHeader;
