import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskForm() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/tasksCenter-frontend/tasks");
  });
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div id="form-div-bg" className="col-lg-6 border p-4 rounded-4">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                {...register("title", { required: true })}
                type="text"
                className="form-control"
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Description
              </label>
              <textarea {...register("description")} className="form-control" />
            </div>
            <button type="submit"
              id="register-btn"
              className="mt-4 btn btn-primary d-block w-100">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
