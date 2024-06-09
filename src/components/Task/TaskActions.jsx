import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const TaskActions = ({ taskId, handleDropdownToggle, handleDelete, dropdownVisible }) => {
  return (
    <div className="relative">
      <button type="button" onClick={() => handleDropdownToggle(taskId)}>
        <FontAwesomeIcon icon={faEllipsisH} className="text-xs" />
      </button>
      {dropdownVisible === taskId && (
        <div className="absolute w-24 bg-white border border-gray-200 rounded shadow-lg z-10 right-2">
          <button
            onClick={() => handleDelete(taskId)}
            className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskActions;
