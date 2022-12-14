import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState(null);

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, password, confirm)
    if (password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    }
    if (password !== confirm) {
      setError("Your password did not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleSubmit} className="">
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
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
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
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
