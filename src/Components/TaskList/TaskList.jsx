import "./TaskList.css";

export default function TaskList({ tasks, handleEdit, handleDelete, handleToggleComplete }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
          <div className="task-left">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
              className="task-checkbox"
            />
            <div className="task-text-area">
              <div className="task-text">{task.text}</div>
              <small className="task-date">{task.dateTime}</small>
            </div>
          </div>

          <div className="task-buttons">
            <button onClick={() => handleEdit(index)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => handleDelete(index)} className="delete-btn">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
