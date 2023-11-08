import { useEffect } from "react";
import { useTasks } from "../../context/TasksContext";
import Card from "./Card";
import { Link } from "react-router-dom";
import "./Tasks.css";

function Tasks() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0)
    return (
      <div className="mt-4">
        <h1>You don't have any task yet...</h1>
        <Link id="add-task-btn" className="btn btn-primary mt-3" to="/tasksCenter-frontend/add-task">
          Add Task
        </Link>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {tasks.map((task) => (
          <div key={task._id} className="col">
            <Card task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
