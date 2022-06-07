import React from "react";
import { UserRegistration } from "../../api/api";

export default function SignUp({
  signupPopUp,
  setSignupPopUp,
  SetisLogin,
  SetloginPopUp,
}) {
  const onCloseClick = () => {
    setSignupPopUp(false);
  };

  const onLoginClick = () => {
    SetloginPopUp(true);
    onCloseClick();
  };

  const handleSubmit = (value) => {
    value.preventDefault();

    const userData = {
      name: value.target.elements.name.value,
      email: value.target.elements.email.value,
      password: value.target.elements.password.value,
    };

    UserRegistration(userData).then(SetisLogin(true)).then(onCloseClick); // some work needs to be done to handle non valid login
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
        <div className="container" id="container">
          <div
            className="form-container sign-up-container"
            style={{ display: "block" }}
          >
          <form onSubmit={handleSubmit}>
              <h1 class="color-blk">Create Account</h1>
              <span>or use your email for registration</span>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div class="overlay-panel overlay-right">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button onClick={onLoginClick} class="ghost" id="signIn">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
