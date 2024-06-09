import InboxClose from "/icons/InboxClose.svg";
import InboxOpen from "/icons/InboxOpen.svg";

const InboxButton = ({ isInboxPopupOpen, handleInboxClick, btnMainMenu }) => (
  <div
    className={`flex items-start -space-x-10 ${
      !isInboxPopupOpen ? "order-first" : "order-last ml-2"
    }`}
  >
    {!btnMainMenu && isInboxPopupOpen && (
      <div className="w-12 h-12 rounded-full bg-primary-darkGray border-2 border-primary-darkGray"></div>
    )}
    <button
      onClick={handleInboxClick}
      className={`rounded-full shadow-lg flex items-center justify-center mx-1 ${
        !isInboxPopupOpen ? "bg-white w-11 h-11 " : "bg-indicator-blue w-12 h-12"
      }`}
    >
      <img src={isInboxPopupOpen ? InboxOpen : InboxClose} alt="Inbox Icon" className="w-5 h-5" />
    </button>
  </div>
);

export default InboxButton;
