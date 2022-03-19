import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const Login = () => {

    const [state, setstate] = useState({
        email:"",
        password:"",
    });
const {email, password}= state;
  const handleGoogleSignIn = () => {};
  const handleSubmit = () => {};
  const handleFBSignIn = () => {};
  const handleChange = () => {};

  return (
    <div>
      <div id="logreg-form">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign in
          </h1>

          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onclick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g">Sign in with Google+</i>
              </span>
            </button>
            <button
              className="btn facebook-btn social-btn"
              type="button"
              onclick={handleFBSignIn}
            >
              <span>
                <i className="fab fa-facebook-f">Sign in with FaceBook</i>
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center" }}>OR</p>
          <input
            type="email"
            id="inputEmail"
            className="Form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputpassword"
            className="Form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <button className="btn btn-secondry btn-block" type="submit">Sign in</button>
<hr/>
<p>Dont have an Account</p>
<Link to="/register">
<button className="btn btn-primary btn-block" type="button" id="btn-signup">
    <i className="fas fa-user-plus"></i>sign up new account
</button>
</Link>

        </form>
      </div>
    </div>
  );
};

export default Login;
