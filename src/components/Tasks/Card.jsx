import { useTasks } from "../../context/TasksContext";
import { Link } from "react-router-dom";

function Card({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div id="task-card" className="card" style={{ height: "12rem" }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{task.title}</h5>
          <h6 id="task-date" className="card-subtitle">
            {new Date(task.date).toLocaleDateString()}
          </h6>
          <p className="card-text">{task.description}</p>
        </div>
        <div className="d-flex justify-content-end align-items-end">
          <Link
            to={`/tasksCenter-frontend/tasks/${task._id}`}
            id="edit-btn"
            className="btn btn-primary me-2"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteTask(task._id)}
            className="btn btn-danger"
            id="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;


