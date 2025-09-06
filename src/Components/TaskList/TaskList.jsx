import "./TaskList.css";

export default function TaskList({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <div className="task-text">{task.text}</div>
          <small className="task-date">{task.dateTime}</small>
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
