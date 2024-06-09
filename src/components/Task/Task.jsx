import { useState, useRef } from "react";
import TaskItem from "./TaskItem/TaskItem";
import TaskForm from "./TaskForm/TaskForm";
import TaskNavigation from "./TaskNavigation";
import LoaderPopup from "../LoaderPopup";

const Task = () => {
  const initialTasks = [
    {
      id: 1,
      title: "Close off Case #012920- RODRIGUES, Amiguel",
      date: "2024-06-14T00:00:00Z",
      description:
        "Finish the annual report for 2024. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title:
        "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
      date: "2024-06-16T00:00:00Z",
      description:
        "Discuss project progress and next steps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Set up appointment with Dr Blake",
      date: "2024-06-10T00:00:00Z",
      description:
        "Submit the final project deliverables. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "",
      date: "2024-06-11T00:00:00Z",
      description:
        "Present the project results to the client. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "Code Review",
      date: "",
      description:
        "Review the new code submissions from the team. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "Plan Next Sprint",
      date: "2024-06-17T00:00:00Z",
      description: "",
    },
    {
      id: 7,
      title: "Design Review",
      date: "2024-06-12T00:00:00Z",
      description:
        "Evaluate the new design mockups. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      title: "Budget Meeting",
      date: "2024-06-19T00:00:00Z",
      description:
        "Discuss the budget for the next quarter. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 9,
      title: "Team Building Activity",
      date: "2024-06-20T00:00:00Z",
      description:
        "Participate in the team building exercises. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 10,
      title: "Market Research",
      date: "2024-06-13T00:00:00Z",
      description:
        "Conduct research on market trends. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 11,
      title: "Product Launch",
      date: "2024-06-15T00:00:00Z",
      description:
        "Launch the new product line. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 12,
      title: "Performance Review",
      date: "2024-06-21T00:00:00Z",
      description:
        "Review the performance of the team members. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 13,
      title: "Security Audit",
      date: "2024-06-22T00:00:00Z",
      description:
        "Conduct a security audit on the system. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 14,
      title: "Client Follow-up",
      date: "2024-06-23T00:00:00Z",
      description:
        "Follow up with clients regarding the recent updates. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 15,
      title: "Server Maintenance",
      date: "2024-06-24T00:00:00Z",
      description:
        "Perform scheduled maintenance on the servers. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 16,
      title: "Code Deployment",
      date: "2024-06-25T00:00:00Z",
      description:
        "Deploy the new code to the production server. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 17,
      title: "Quarterly Review",
      date: "2024-06-26T00:00:00Z",
      description:
        "Review the progress and goals for the quarter. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 18,
      title: "User Testing",
      date: "2024-06-27T00:00:00Z",
      description:
        "Conduct user testing for the new features. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 19,
      title: "Marketing Strategy",
      date: "2024-06-28T00:00:00Z",
      description:
        "Plan the marketing strategy for the next campaign. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 20,
      title: "Customer Feedback",
      date: "2024-06-29T00:00:00Z",
      description:
        "Gather and analyze customer feedback. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const containerRef = useRef(null);

  const [tasks, setTasks] = useState(initialTasks);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [expandedTasks, setExpandedTasks] = useState({});
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [dropdownTaskVisible, setDropdownTaskVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [description, setDescription] = useState("");
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDropdownToggle = (taskId) => {
    setDropdownVisible(dropdownVisible === taskId ? null : taskId);
  };

  const handleCheckboxChange = (taskId) => {
    setCheckedTasks((prevCheckedTasks) => ({
      ...prevCheckedTasks,
      [taskId]: !prevCheckedTasks[taskId],
    }));
  };

  const handleExpandToggle = (taskId) => {
    setExpandedTasks((prevExpandedTasks) => ({
      ...prevExpandedTasks,
      [taskId]: !prevExpandedTasks[taskId],
    }));
  };

  const handleDelete = (taskId) => {
    console.log(`taskId: ${taskId}`);
    if (taskId === 0) {
      setShowNewTaskForm(!showNewTaskForm);
    }
    setDropdownVisible(false);
  };

  const handleEditClick = (taskId) => {
    setEditingTask(taskId);
    if (taskId > 0) {
      setDescription(tasks.find((task) => task.id === taskId).description);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDescriptionBlur = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editingTask ? { ...task, description } : task))
    );
    setEditingTask(null);
  };

  const handleDateChange = (taskId, date) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, date: date } : task))
    );
  };

  const handleTaskDropdownClick = (taskId) => {
    setLoading(true);
    setDropdownTaskVisible(false);
    setTimeout(() => {
      setLoading(false);
      console.log(`Selected taskId: ${taskId}`);
    }, 3000);
  };

  const handleAddTaskClick = () => {
    setShowNewTaskForm(!showNewTaskForm);
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
    handleExpandToggle(0);
  };

  const handleNewDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleNewDescriptionBlur = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editingTask ? { ...task, description } : task))
    );
    setEditingTask(null);
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    setShowNewTaskForm(false);
    console.log("Title :", newTitle);
    console.log("Date :", newDate);
    console.log("Description :", newDescription);
  };

  return (
    <div className="flex flex-col h-full">
      <TaskNavigation
        handleAddTaskClick={handleAddTaskClick}
        handleTaskDropdownClick={handleTaskDropdownClick}
        dropdownTaskVisible={dropdownTaskVisible}
        setDropdownTaskVisible={setDropdownTaskVisible}
      />
      <div
        className="overflow-y-scroll scroll-smooth scrollbar-custom popup-content"
        ref={containerRef}
      >
        {loading && <LoaderPopup />}

        {!loading &&
          tasks.map((task, index) => (
            <TaskItem
              isNotLastIndex={index !== tasks.length - 1}
              key={task.id}
              task={task}
              checkedTasks={checkedTasks}
              expandedTasks={expandedTasks}
              dropdownVisible={dropdownVisible}
              editingTask={editingTask}
              description={description}
              handleCheckboxChange={handleCheckboxChange}
              handleExpandToggle={handleExpandToggle}
              handleDropdownToggle={handleDropdownToggle}
              handleDelete={handleDelete}
              handleEditClick={handleEditClick}
              handleDescriptionChange={handleDescriptionChange}
              handleDescriptionBlur={handleDescriptionBlur}
              handleDateChange={handleDateChange}
            />
          ))}

        {!loading && showNewTaskForm && (
          <TaskForm
            checkedTasks={checkedTasks}
            expandedTasks={expandedTasks}
            dropdownVisible={dropdownVisible}
            editingTask={editingTask}
            newTitle={newTitle}
            newDate={newDate}
            newDescription={newDescription}
            handleNewTaskSubmit={handleNewTaskSubmit}
            handleCheckboxChange={handleCheckboxChange}
            handleExpandToggle={handleExpandToggle}
            handleDropdownToggle={handleDropdownToggle}
            handleDelete={handleDelete}
            handleEditClick={handleEditClick}
            setNewTitle={setNewTitle}
            setNewDate={setNewDate}
            handleNewDescriptionChange={handleNewDescriptionChange}
            handleNewDescriptionBlur={handleNewDescriptionBlur}
            handleDateChange={handleDateChange}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
