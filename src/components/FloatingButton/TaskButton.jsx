import TaskClose from "/icons/TaskClose.svg";
import TaskOpen from "/icons/TaskOpen.svg";

const TaskButton = ({ isTaskPopupOpen, handleTaskClick, btnMainMenu }) => (
  <div
    className={`flex items-start -space-x-10 ${
      !isTaskPopupOpen ? "order-first" : "order-last ml-2"
    }`}
  >
    {!btnMainMenu && isTaskPopupOpen && (
      <div
        className="
        w-12 h-12 rounded-full 
      bg-primary-darkGray border-2 
      border-primary-darkGray"
      ></div>
    )}
    <button
      onClick={handleTaskClick}
      className={`rounded-full shadow-lg flex items-center justify-center mx-1 ${
        !isTaskPopupOpen ? "bg-white w-11 h-11" : "bg-indicator-peach w-12 h-12"
      }`}
    >
      <img src={isTaskPopupOpen ? TaskOpen : TaskClose} alt="Task Icon" className="w-5 h-5" />
    </button>
  </div>
);

export default TaskButton;
