import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);
  const logOut = () => {
    signOut(auth);
    navigate('/')
  }

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* for toogle menu */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/appoinment">Appointment</Link>
            </li>
            <li>
              <Link to="/">Reviews</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              {user ? (
                <button
                  onClick={logOut}
                ></button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        {/* for max width menu */}
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/appoinment">Appointment</Link>
          </li>
          <li>
            <Link to="/">Reviews</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            {user ? <button onClick={logOut} >Log Out</button> : <Link to="/login">Login</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
