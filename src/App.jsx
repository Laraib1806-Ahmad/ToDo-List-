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
     
      setTasks([...tasks, { text: newTask, dateTime, completed: false }]);
    }

    setNewTask("");
  };

  const handleEdit = (index) => {
    setNewTask(tasks[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

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
          handleToggleComplete={handleToggleComplete} 
        />
      </main>
    </div>
  );
}
