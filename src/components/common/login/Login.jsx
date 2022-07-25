import React, { useState } from "react";
import { LoginAuthentication } from "../../../api/api";
import Spinner from "../spinner/Spinner";
import { setAdmin, setToken } from "../../utls/Session";
import { useNavigate } from "react-router-dom";

export default function Login({
  loginPopUp,
  SetloginPopUp,
  SetisLogin,
  setSignupPopUp,
  SetIsAdmin
}) {
  let [feedback, setFeedBack] = useState("");
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCloseClick = () => {
    setFeedBack("");
    SetloginPopUp(false);
  };

  const handleSubmit = (value) => {
    setLoading(true);
    value.preventDefault();

    const userData = {
      email: value.target.elements.email.value,
      password: value.target.elements.password.value,
    };

    LoginAuthentication(userData).then((data) => {


      console.log(data)
      if (data.statusCode === 200) {
        if (data.body.accessToken.length !== 0) {
          setToken(data.body.accessToken);
          SetisLogin(true);
          onCloseClick();
          setLoading(false);
        }
        if(data.body.admin === true){
          setAdmin(true);
          SetIsAdmin(true);
          navigate("/orders", {
            state: {},
          });
        }
      } else {
        setFeedBack(data.body);
        setLoading(false);
      }
    });
  };

  const onSignUpClick = () => {
    setSignupPopUp(true);
    onCloseClick();
  };

  return (
    <div
      className="login-pop"
      style={loginPopUp ? { display: "flex" } : { display: "none" }}
    >
      <div onClick={onCloseClick} className="close" id="loginClose">
        X
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
              <h1 className="color-blk">Sign in</h1>
              <span>or use your account</span>
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <span style={{ color: "red" }}>{feedback}</span>
              <a href="#">Forgot your password?</a>
              <button type="submit">Sign In</button>
              <div className="mobileLogin">
                <p style={{ color: "#a8be40" }}>
                  Enter your personal details and start journey with us
                </p>
                <button onClick={onSignUpClick}>Sign Up</button>
              </div>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button onClick={onSignUpClick} className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
