import Checks from "/icons/Checks.svg";
import UnChecks from "/icons/UnChecks.svg";

const TaskItemCheckbox = ({ task, checkedTasks, handleCheckboxChange }) => {
  return (
    <div className="relative inline-flex items-center">
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={checkedTasks}
        onChange={() => task.title && task.date && handleCheckboxChange(task.id)}
        disabled={!task.title || !task.date}
      />
      <div
        className={`mr-4 ${
          !task.title || !task.date ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        onClick={() => task.title && task.date && handleCheckboxChange(task.id)}
      >
        {checkedTasks ? (
          <img className="h-6 w-6" src={Checks} alt="Icon Checks" />
        ) : (
          <img className="h-6 w-6" src={UnChecks} alt="Icon UnChecks" />
        )}
      </div>
    </div>
  );
};

export default TaskItemCheckbox;
