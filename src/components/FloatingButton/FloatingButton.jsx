import { useState, useRef, useEffect } from "react";
import Inbox from "../Inbox/Inbox";
import Task from "../Task/Task";

import MainButton from "./MainButton";
import TaskButton from "./TaskButton";
import InboxButton from "./InboxButton";

const FloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [popup, setPopup] = useState(null);
  const [btnMainMenu, setBtnMainMenu] = useState(true);
  const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false);
  const [isInboxPopupOpen, setIsInboxPopupOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (isInboxPopupOpen || isTaskPopupOpen) {
      setBtnMainMenu(false);
    } else {
      setBtnMainMenu(true);
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isInboxPopupOpen, isTaskPopupOpen]);

  const handleButtonClick = () => {
    if (popup) {
      closePopup();
    } else {
      setIsExpanded(true);
      setIsTaskPopupOpen(false);
      setIsInboxPopupOpen(false);
    }
    setIsExpanded(!isExpanded);
  };

  const handleTaskClick = () => {
    setPopup({ content: <Task />, title: "Task" });
    setIsTaskPopupOpen(!isTaskPopupOpen);
    setIsInboxPopupOpen(false);
    if (isTaskPopupOpen) {
      setPopup(null);
    }
  };

  const handleInboxClick = () => {
    setPopup({ content: <Inbox />, title: "Inbox" });
    setIsInboxPopupOpen(!isInboxPopupOpen);
    setIsTaskPopupOpen(false);
    if (isInboxPopupOpen) {
      setPopup(null);
    }
  };

  const closePopup = () => {
    setIsExpanded(false);
    setPopup(null);
    setIsTaskPopupOpen(false);
    setIsInboxPopupOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-5 right-6 flex">
        {isExpanded && (
          <div className="flex justify-between items-center">
            <TaskButton
              isTaskPopupOpen={isTaskPopupOpen}
              handleTaskClick={handleTaskClick}
              btnMainMenu={btnMainMenu}
            />
            <InboxButton
              isInboxPopupOpen={isInboxPopupOpen}
              handleInboxClick={handleInboxClick}
              btnMainMenu={btnMainMenu}
            />
          </div>
        )}

        {btnMainMenu && <MainButton onClick={handleButtonClick} />}
      </div>
      {popup && (
        <div
          className="
          fixed bottom-20 
          right-5 bg-white 
          text-gray-700 rounded-lg 
          p-4 flex flex-col 
          popup"
        >
          {popup.content}
        </div>
      )}
    </>
  );
};

export default FloatingButton;
