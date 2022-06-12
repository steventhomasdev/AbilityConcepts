import React, { useState } from "react";
import { UserRegistration } from "../../api/api";
import Spinner from "../common/spinner/Spinner";
import { setToken } from "../utls/Session";

export default function SignUp({
  signupPopUp,
  setSignupPopUp,
  SetisLogin,
  SetloginPopUp,
}) {
  let [feedback, setFeedBack] = useState("");
  let [loading, setLoading] = useState(false);

  const onCloseClick = () => {
    setFeedBack("");
    setSignupPopUp(false);
  };

  const onLoginClick = () => {
    SetloginPopUp(true);
    onCloseClick();
  };

  const handleSubmit = (value) => {
    setLoading(true);
    value.preventDefault();

    const userData = {
      name: value.target.elements.name.value,
      email: value.target.elements.email.value,
      password: value.target.elements.password.value,
    };

    UserRegistration(userData).then((data) => {
      if (data.statusCode === 200) {
        if (data.body.accessToken.length != 0) {
          setToken(data.body.accessToken);
          SetisLogin(true);
          onCloseClick();
          setLoading(false);
        }
      } else {
        setFeedBack(data.body);
        setLoading(false);
      }
    });
  };

  return (
    <div>
      <div
        className="login-pop"
        style={signupPopUp ? { display: "flex" } : { display: "none" }}
      >
        <div onClick={onCloseClick} className="close" id="loginClose">
          X
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="container" id="container">
            <div
              className="form-container sign-up-container"
              style={{ display: "block" }}
            >
              <form onSubmit={handleSubmit}>
                <h1 className="color-blk">Create Account</h1>
                <span>or use your email for registration</span>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <span style={{ color: "red" }}>{feedback}</span>
                <button>Sign Up</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-right">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button onClick={onLoginClick} className="ghost" id="signIn">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
