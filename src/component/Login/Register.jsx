import { useNavigate } from "react-router-dom";
import "./Login.scss";
const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Login-container">
        <div className="Login-main resgister">
          <div className="header-Login">
            <span className="icon-spotify" onClick={() => navigate("/")}>
              <i className="fa-brands fa-spotify"></i>
            </span>
            <span className="text-header">Sign up to start listening</span>
            <div className="line"></div>
          </div>
          <div className="form-Login">
            <div className="form-group my-2">
              <label>Email or username</label>
              <input className="form-control" />
            </div>
            <div className="form-group my-2">
              <label>FirsName</label>
              <input className="form-control" />
            </div>
            <div className="form-group my-2">
              <label>Password</label>
              <input className="form-control" />
            </div>
            <div className="form-group my-2">
              <label>re-enter password</label>
              <input className="form-control" />
            </div>
            <div className="btn-login">
              <button>Tiếp theo</button>
            </div>

            <div className="signup-account">
              <span className="text-1">You already have an account?</span>
              <span className="text-2" onClick={() => navigate("/login")}>
                Sign in here.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
