import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const onloginClose = (event) => {
    console.log(event);
    navigate("/home", { replace: true });
  };

  return (
    <div>
      <div className="login-pop" style={{ display: "flex" }}>
        <div className="close" id="loginClose" onClick={onloginClose}>
          X
        </div>
        <div className="container loginCard" id="container">
          <div className="form-container sign-in-container">
            <form action="#">
              <h1 className="color-blk">Sign in</h1>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
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
    </div>
  );
}
