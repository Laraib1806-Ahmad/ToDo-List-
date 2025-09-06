import "./AddTask.css";

export default function AddTask({ newTask, setNewTask, handleAddOrUpdate, editIndex }) {
  return (
    <div className="addtask-container">
      <input
        type="text"
        placeholder="Enter task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="task-input"
      />
      <button onClick={handleAddOrUpdate} className="add-btn">
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
}
