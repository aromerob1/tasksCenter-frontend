import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav id="nav" className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/tasksCenter-frontend/tasks">
          TasksCenter
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <>
                <li className="nav-item d-none d-lg-block">
                  <Link className="nav-link" to="/tasksCenter-frontend/tasks">
                    Welcome {user.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasksCenter-frontend/add-task">
                    Add Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/tasksCenter-frontend/login"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasksCenter-frontend/login">
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasksCenter-frontend/register">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
