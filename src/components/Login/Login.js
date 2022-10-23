import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  let navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log("from", from);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
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
