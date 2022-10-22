import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const {user, logout} = useContext(AuthContext)
// const {user} = useContext(AuthContext)


  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        { user?.uid? 
          <button className="btn-LogOut " onClick={logout}> LogOut </button>
        :
          <>
          <Link to="/login">LogIn</Link>
        <Link to="/signup">SignUp</Link>
        </>}
        <span className="text-white"> <small>{user?.email}</small></span>

        {/* <span>{user?.email}</span> */}
      </div>
    </nav>
  );
};

export default Header;
