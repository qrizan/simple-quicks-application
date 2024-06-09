import Checks from "/icons/Checks.svg";
import UnChecks from "/icons/UnChecks.svg";

const TaskFormCheckbox = ({ checkedTasks, handleCheckboxChange }) => {
  return (
    <div className="relative inline-flex items-center">
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={checkedTasks}
        onChange={() => handleCheckboxChange(0)}
      />
      <div className={`mr-4 cursor-pointer}`} onClick={() => handleCheckboxChange(0)}>
        {checkedTasks ? (
          <img className="h-6 w-6" src={Checks} alt="Icon Checks" />
        ) : (
          <img className="h-6 w-6" src={UnChecks} alt="Icon UnChecks" />
        )}
      </div>
    </div>
  );
};

export default TaskFormCheckbox;
