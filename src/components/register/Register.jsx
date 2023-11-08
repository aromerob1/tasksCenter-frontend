import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Register.css'

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Checking if authenticated:", isAuthenticated);
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div id="form-div-bg" className="col-lg-6 border p-4 rounded-4">
          {registerErrors.map((error, i) => (
            <div key={i}>{error}</div>
          ))}
          <form
            onSubmit={handleSubmit(async (values) => {
              try {
                await signup(values);
              } catch (error) {
                console.error("Error during signup", error);
              }
            })}
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                {...register("username", { required: true })}
                type="text"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
              {errors.username && <p>Username is required</p>}
            </div>
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
              />
              {errors.password && <p>Password is required</p>}
            </div>
            <button type="submit" id="register-btn" className="mt-4 btn btn-primary d-block w-100">
              Register
            </button>
          </form>
          <p className="mt-2">
            Already have an account? <Link id="Login-Reg-Link" to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
