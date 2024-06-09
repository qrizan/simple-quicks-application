import TaskItemCheckbox from "./TaskItemCheckbox";
import TaskItemContent from "./TaskItemContent";
import TaskItemContentExpand from "./TaskItemContentExpand";

const TaskItem = ({
  isNotLastIndex,
  task,
  checkedTasks,
  expandedTasks,
  dropdownVisible,
  handleCheckboxChange,
  handleExpandToggle,
  handleDropdownToggle,
  handleDelete,
  handleEditClick,
  editingTask,
  description,
  handleDescriptionChange,
  handleDescriptionBlur,
  handleDateChange,
}) => {
  return (
    <div className={`popup-item ${isNotLastIndex ? "border-b" : ""}`}>
      <div className="w-full flex items-start">
        <TaskItemCheckbox
          task={task}
          checkedTasks={checkedTasks[task.id] ?? false}
          handleCheckboxChange={handleCheckboxChange}
        />
        <TaskItemContent
          task={task}
          checkedTasks={checkedTasks[task.id] ?? false}
          expandedTasks={expandedTasks[task.id] ?? false}
          handleDropdownToggle={handleDropdownToggle}
          handleExpandToggle={handleExpandToggle}
          handleDelete={handleDelete}
          dropdownVisible={dropdownVisible}
        />
      </div>

      {expandedTasks[task.id] && (
        <TaskItemContentExpand
          task={task}
          handleDateChange={handleDateChange}
          handleEditClick={handleEditClick}
          editingTask={editingTask}
          description={description}
          handleDescriptionChange={handleDescriptionChange}
          handleDescriptionBlur={handleDescriptionBlur}
        />
      )}
    </div>
  );
};

export default TaskItem;
