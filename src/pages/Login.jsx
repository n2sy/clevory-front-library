import { useContext, useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../store/LoginContext";
import axios from "axios";

function Login() {
  const [showRegister, setShowRegister] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");
  let navigate = useNavigate();
  let logCtx = useContext(LoginContext);

  function submitHandler(e) {
    e.preventDefault();
    if (showRegister) {
      axios
        .post("http://localhost:3000/auth/register", {
          name: nameValue,
          email: emailValue,
          password: pwdValue,
        })
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:3000/auth/login", {
          email: emailValue,
          password: pwdValue,
        })
        .then((res) => {
          alert(res.data.message);
          localStorage.setItem("access_token", res.data.token);
          localStorage.setItem("role", res.data.role);
          logCtx.seConnecter(res.data.role);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label>{showRegister ? "Email" : "Login"}</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
        />
      </div>
      {showRegister && (
        <div className={classes.control}>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
          />
        </div>
      )}
      <div className={classes.control}>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPwdValue(e.target.value);
          }}
        />
      </div>
      <div className={classes.actions}>
        {showRegister && <button>Register</button>}
      </div>
      <div className={classes.actions}>
        {showRegister && (
          <button onClick={() => setShowRegister((previous) => !previous)}>
            Switch to Login
          </button>
        )}
      </div>
      <div className={classes.actions}>
        {!showRegister && <button>Login</button>}
      </div>
      <div className={classes.actions}>
        {!showRegister && (
          <button onClick={() => setShowRegister((previous) => !previous)}>
            Switch to Register
          </button>
        )}
      </div>
    </form>
  );
}

export default Login;
