import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import TaskActions from "../TaskActions";

const TaskFormContent = ({
  newTitle,
  setNewTitle,
  handleExpandToggle,
  expandedTasks,
  handleDropdownToggle,
  dropdownVisible,
  handleDelete,
}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <input
        type="text"
        name="title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="p-2 border border-primary-darkGray rounded-md"
        placeholder="Type Task Title"
      />
      <div className="flex items-center pr-5 min-w-[250px] justify-end">
        <div className="text-sm text-primary-darkGray"></div>
        <button
          type="button"
          onClick={() => handleExpandToggle(0)}
          className="flex items-center mx-4"
        >
          <FontAwesomeIcon icon={expandedTasks ? faChevronUp : faChevronDown} className="text-xs" />
        </button>
        <TaskActions
          taskId={0}
          handleDropdownToggle={handleDropdownToggle}
          handleDelete={handleDelete}
          dropdownVisible={dropdownVisible}
        />
      </div>
    </div>
  );
};

export default TaskFormContent;
