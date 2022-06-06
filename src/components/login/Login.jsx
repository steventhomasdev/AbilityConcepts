import React from "react";
import { LoginAuthentication } from "../../api/api";

export default function Login({ login, setLogin }) {
  const onCloseClick = () => {
    setLogin(false);
  };

  const handleSubmit = (value) => {
    value.preventDefault();

    const userData = {
      "email": value.target.elements.email.value,
      "password": value.target.elements.password.value
    }

    LoginAuthentication(userData)
    .then(onCloseClick);
  }

  return (
    <div
      className="login-pop"
      style={login ? { display: "flex" } : { display: "none" }}
    >
      <div onClick={onCloseClick} className="close" id="loginClose">
        X
      </div>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1 className="color-blk">Sign in</h1>
            <span>or use your account</span>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button  type="submit">Sign In</button>
            <div className="mobileLogin">
              <p style={{ color: "#a8be40" }}>
                Enter your personal details and start journey with us
              </p>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
