import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../../Context/AppContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useAppContext();

  const handleLogOut = async (e) => {
    e.preventDefault();
    setUser(null);
    toast.success("Logged out");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        username: username,
        password: password,
      });
      // Show success toast

      toast.success("Login successful!");
      setUser(res.data);
      navigate("/cards");
    } catch (err) {
      // Show error toast
      toast.error("Login failed. Please check your credentials.");
      console.error(err);
    }
  };

  return (
    <>
      <div className="top-border" />
      <div className="top-border2" />
      <div className="navbar-container">
        <div className="sidebar">
          <aside>
            <p> To-Do List </p>{" "}
            <a onClick={handleLogOut} style={{ cursor: "pointer" }}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              Logout
            </a>
          </aside>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/florin-cornea-b5118057/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="cards-container">
          <div className="login-container">
            <div className="login-form-box">
              <h2 className="login-heading">Login to Your Account</h2>
              <form className="login-form">
                <label htmlFor="username" className="login-label">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="login-input"
                  placeholder="Enter your username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password" className="login-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="login-input"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="submit"
                  className="login-button"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </form>
              <div className="reg">
                Don't have an account?
                <Link to="/register">
                  <button className="regis">Register</button>
                </Link>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Login;
