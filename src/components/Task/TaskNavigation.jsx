import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const TaskNavigation = ({
  handleAddTaskClick,
  handleTaskDropdownClick,
  dropdownTaskVisible,
  setDropdownTaskVisible,
}) => {
  return (
    <div className="flex justify-between">
      <div className="w-[300px] flex flex-col items-center">
        <button
          className="font-semibold py-2 px-4 mb-2 bg-white text-gray border rounded-md"
          onClick={() => setDropdownTaskVisible(!dropdownTaskVisible)}
        >
          My Tasks
          <FontAwesomeIcon
            icon={dropdownTaskVisible ? faChevronUp : faChevronDown}
            className="text-xs ml-2"
          />
        </button>
        {dropdownTaskVisible && (
          <div className="absolute mt-12 w-60 bg-white border border-gray-200 rounded shadow-lg z-10">
            <button
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => handleTaskDropdownClick(1)}
            >
              Personal Errands
            </button>
            <button
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => handleTaskDropdownClick(2)}
            >
              Urgent To-Do
            </button>
          </div>
        )}
      </div>
      <button
        onClick={handleAddTaskClick}
        className="font-semibold py-2 px-4 mb-4 bg-primary-blue text-white rounded-md"
      >
        New Task
      </button>
    </div>
  );
};

export default TaskNavigation;
