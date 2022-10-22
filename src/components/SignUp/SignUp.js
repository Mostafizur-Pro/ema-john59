import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
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
          <label htmlFor="Confirm">Confirm Password</label>
          <input
            type="password"
            name="Confirm"
            id=""
            placeholder="Confirm Your Password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>

      <p>
        {" "}
        Already have an account ? <Link to="/login">Login</Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;
