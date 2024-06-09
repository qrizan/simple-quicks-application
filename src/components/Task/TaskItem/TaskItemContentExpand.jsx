import OclockPrimary from "/icons/OclockPrimary.svg";
import PencilPrimary from "/icons/PencilPrimary.svg";
import OclockSecondary from "/icons/OclockSecondary.svg";
import PencilSecondary from "/icons/PencilSecondary.svg";
import DatePickerIcon from "../../DatePickerIcon";

const TaskItemContentExpand = ({
  task,
  handleDateChange,
  handleEditClick,
  editingTask,
  description,
  handleDescriptionChange,
  handleDescriptionBlur,
}) => {
  return (
    <div className="ml-6 mt-2">
      <div className="flex items-center">
        {task.date ? (
          <img className="h-4 w-4 mr-4" src={OclockPrimary} alt="Icon" />
        ) : (
          <img className="h-4 w-4 mr-4" src={OclockSecondary} alt="Icon" />
        )}
        <DatePickerIcon
          selectedDate={task.date ?? new Date(task.date)}
          handleDateChange={(date) => handleDateChange(task.id, date)}
        />
      </div>

      <div className="flex mt-4 text-sm">
        {task.description.length > 0 ? (
          <img
            className="h-4 w-4 mr-4 cursor-pointer"
            src={PencilPrimary}
            alt="Icon"
            onClick={() => handleEditClick(task.id)}
          />
        ) : (
          <img
            className="h-4 w-4 mr-4 cursor-pointer"
            src={PencilSecondary}
            alt="Icon"
            onClick={() => handleEditClick(task.id)}
          />
        )}
        {editingTask === task.id ? (
          <div className="flex w-full">
            <textarea
              className="border rounded-md p-2 flex-grow mr-2 "
              value={description}
              onChange={handleDescriptionChange}
              onBlur={handleDescriptionBlur}
            />
          </div>
        ) : (
          <div
            className="text-sm w-11/12 text-primary-darkGray"
            onClick={() => handleEditClick(task.id)}
          >
            {task.description.length > 0 ? task.description : "No Description"}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItemContentExpand;
