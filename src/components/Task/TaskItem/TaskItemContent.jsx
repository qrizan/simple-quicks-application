import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import TaskActions from "../TaskActions";

const TaskItemContent = ({
  task,
  checkedTasks,
  expandedTasks,
  handleDropdownToggle,
  handleExpandToggle,
  handleDelete,
  dropdownVisible,
}) => {
  return (
    <div className="flex justify-between w-full items-start">
      <div
        className={`font-semibold text-16px w-[350px] ${
          checkedTasks ? "line-through text-primary-gray" : "text-primary-darkGray "
        }`}
      >
        {task?.title?.length > 0 ? task?.title : ""}
      </div>

      <div className="flex items-center pr-5 min-w-[250px] justify-end">
        <div>
          {!checkedTasks && (
            <span className="text-[#EB5757] text-14px">
              {task.date ? `${dayjs(task.date).diff(new Date(), "days")} Days Left` : ""}
            </span>
          )}
          <span className="ml-4 text-primary-darkGray text-14px">
            {task.date ? dayjs(task.date).format("DD/MM/YYYY") : ""}
          </span>
        </div>

        <button onClick={() => handleExpandToggle(task.id)} className="flex items-center mx-4">
          <FontAwesomeIcon icon={expandedTasks ? faChevronUp : faChevronDown} className="text-xs" />
        </button>

        <TaskActions
          taskId={task.id}
          handleDropdownToggle={handleDropdownToggle}
          handleDelete={handleDelete}
          dropdownVisible={dropdownVisible}
        />
      </div>
    </div>
  );
};

export default TaskItemContent;
