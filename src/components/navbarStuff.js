import React from "react";
import { Link, Navigate } from "react-router-dom";
import Auth from '../utils/auth';

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/Login">Login</Link>

          <Link to="/Signup">Sign Up</Link> */}

          {/* <Link to="/Profile">Profile</Link> */}
          <Link to="/QuestionList">Question List</Link>
       

        {Auth.loggedIn() ? (
          <>
            <Link to="/Profile">
              Profile
             </Link>
            <button  onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/Login">
              Login
            </Link>
            <Link to="/Signup">
              Sign Up
            </Link>
          </>
        )}
         </nav>
      </div>
    </>
  );
};

export default Navbar;
