import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form className="">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />

          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>

      <p>
        {" "}
        New to ema john <Link to="/signup">Create a New Account</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
