import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import TaskList from "./Components/TaskList/TaskList";
import Search from "./Components/Search/Search";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add or update task
  const handleAddOrUpdate = () => {
    if (!newTask.trim()) return;

    const dateTime = new Date().toLocaleString();

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = newTask;
      updatedTasks[editIndex].dateTime = dateTime;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // ✅ include completed field
      setTasks([...tasks, { text: newTask, dateTime, completed: false }]);
    }

    setNewTask("");
  };

  // Edit task
  const handleEdit = (index) => {
    setNewTask(tasks[index].text);
    setEditIndex(index);
  };

  // Delete task
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // ✅ Toggle task complete/incomplete
  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Search filter
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>Search</h2>
        <Search search={search} setSearch={setSearch} />
      </aside>

      <main className="main-content">
        <h1 className="title">React To-Do List</h1>

        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          handleAddOrUpdate={handleAddOrUpdate}
          editIndex={editIndex}
        />

        <TaskList
          tasks={filteredTasks}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete} // ✅ added
        />
      </main>
    </div>
  );
}
