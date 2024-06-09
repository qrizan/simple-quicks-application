import TaskFormCheckbox from "./TaskFormCheckbox";
import TaskFormContent from "./TaskFormContent";
import TaskFormExpand from "./TaskFormExpand";

const NewTaskForm = ({
  handleNewTaskSubmit,
  checkedTasks,
  handleCheckboxChange,
  handleExpandToggle,
  expandedTasks,
  handleDropdownToggle,
  dropdownVisible,
  handleDelete,
  handleEditClick,
  editingTask,
  newTitle,
  setNewTitle,
  newDate,
  newDescription,
  handleNewDescriptionChange,
  handleNewDescriptionBlur,
  setNewDate,
}) => {
  return (
    <form onSubmit={handleNewTaskSubmit} className="mt-4">
      <div className="w-full flex">
        <TaskFormCheckbox
          checkedTasks={checkedTasks[0] ?? false}
          handleCheckboxChange={handleCheckboxChange}
        />

        <TaskFormContent
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          handleExpandToggle={handleExpandToggle}
          expandedTasks={expandedTasks[0] ?? false}
          handleDropdownToggle={handleDropdownToggle}
          dropdownVisible={dropdownVisible}
          handleDelete={handleDelete}
        />
      </div>

      {expandedTasks[0] && (
        <TaskFormExpand
          newDate={newDate}
          setNewDate={setNewDate}
          newDescription={newDescription}
          handleEditClick={handleEditClick}
          editingTask={editingTask}
          handleNewDescriptionChange={handleNewDescriptionChange}
          handleNewDescriptionBlur={handleNewDescriptionBlur}
        />
      )}
    </form>
  );
};

export default NewTaskForm;
