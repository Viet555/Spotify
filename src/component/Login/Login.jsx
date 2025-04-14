import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../Store/Export";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const infoUser = useSelector((state) => state.user);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (infoUser?.isauthentic === true) {
      localStorage.setItem("accessToken", infoUser?.account?.accessToken);
      localStorage.setItem("refreshToken", infoUser?.account?.refreshToken);
      toast.success(`Welcome ${infoUser.account.email} to home`);
      navigate("/");
    }
  }, [infoUser]);

  const isValisInput = () => {
    let newErrors = {};
    if (!formLogin.email) {
      newErrors.email = "Email has not been entered";
    }

    if (!formLogin.password) {
      newErrors.password = "Password has not been entered";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleOnchange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
    if (e.target?.value) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const valid = isValisInput();
    if (!valid) {
      toast.error("missing input");
      return;
    }

    dispatch(action.UserLoginRedux(formLogin));
  };

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
              <label>Email </label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={formLogin["email"]}
                onChange={handleOnchange}
              />
              {errors.email && (
                <p style={{ color: "red" }}>Email has not been entered</p>
              )}
            </div>
            <div className="form-group my-2">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={formLogin["password"]}
                onChange={handleOnchange}
              />
              {errors.password && (
                <p style={{ color: "red" }}>password has not been entered</p>
              )}
            </div>
            <div className="btn-login">
              <button onClick={handleLogin}>Login</button>
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
