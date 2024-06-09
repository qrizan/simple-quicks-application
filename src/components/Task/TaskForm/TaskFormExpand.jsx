import OclockPrimary from "/icons/OclockPrimary.svg";
import PencilPrimary from "/icons/PencilPrimary.svg";
import OclockSecondary from "/icons/OclockSecondary.svg";
import PencilSecondary from "/icons/PencilSecondary.svg";
import DatePickerIcon from "../../DatePickerIcon";

const TaskFormExpand = ({
  newDate,
  setNewDate,
  newDescription,
  handleEditClick,
  editingTask,
  handleNewDescriptionChange,
  handleNewDescriptionBlur,
}) => {
  return (
    <div className="ml-6 mt-2">
      <div className="flex items-center">
        {newDate ? (
          <img className="h-4 w-4 mr-4" src={OclockPrimary} alt="Icon" />
        ) : (
          <img className="h-4 w-4 mr-4" src={OclockSecondary} alt="Icon" />
        )}

        <DatePickerIcon selectedDate={newDate} handleDateChange={(date) => setNewDate(date)} />
      </div>
      <div className="flex justify-start mt-4 text-sm">
        {newDescription.length > 0 ? (
          <img
            className="h-4 w-4 mr-4 cursor-pointer"
            src={PencilPrimary}
            alt="Icon"
            onClick={() => handleEditClick(0)}
          />
        ) : (
          <img
            className="h-4 w-4 mr-4 cursor-pointer"
            src={PencilSecondary}
            alt="Icon"
            onClick={() => handleEditClick(0)}
          />
        )}

        {editingTask === 0 ? (
          <div className="flex w-full">
            <textarea
              className="border rounded-md p-2 flex-grow mr-2 "
              value={newDescription}
              onChange={handleNewDescriptionChange}
              onBlur={handleNewDescriptionBlur}
            />
          </div>
        ) : (
          <div className="text-sm w-11/12" onClick={() => handleEditClick(0)}>
            {newDescription.length > 0 ? newDescription : "No Description"}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskFormExpand;
