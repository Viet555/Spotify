import { useNavigate } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Login-container">
        <div className="Login-main">
          <div className="header-Login">
            <span className="icon-spotify" onClick={() => navigate("/")}>
              <i className="fa-brands fa-spotify"></i>
            </span>
            <span className="text-header">Log in to Spotify</span>
            <div className="line"></div>
          </div>
          <div className="form-Login">
            <div className="form-group my-2">
              <label>Email or username</label>
              <input className="form-control" />
            </div>
            <div className="form-group my-2">
              <label>Password</label>
              <input className="form-control" />
            </div>
            <div className="btn-login">
              <button>Login</button>
            </div>
            <div className="forgot-pass">
              <span>Forgot your password?</span>
            </div>
            <div className="signup-account">
              <span className="text-1">Don't have an account?</span>
              <span className="text-2" onClick={() => navigate("/register")}>
                You do not have an account?
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
