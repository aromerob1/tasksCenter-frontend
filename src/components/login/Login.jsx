import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasksCenter-frontend/tasks");
  }, [isAuthenticated]);

  useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Clean up
    return () => {
      tooltipList.forEach((tooltip) => {
        tooltip.dispose();
      });
    };
  }, []);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div id="form-div-bg" className="col-lg-6 border p-4 rounded-4">
          {signinErrors.map((error, i) => (
            <div key={i}>{error}</div>
          ))}
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Use 'test@test.com' to try the demo"
              />
              {errors.email && <p>Email is required</p>}
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Use 'test1234' to try the demo"
              />
              {errors.password && <p>Password is required</p>}
            </div>
            <button
              type="submit"
              id="register-btn"
              className="mt-4 btn btn-primary d-block w-100"
            >
              Log In
            </button>
          </form>
          <p className="mt-2">
            Don't have an account?{" "}
            <Link id="Register-Log-Link" to="/tasksCenter-frontend/register">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
