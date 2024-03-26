import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${window.location.origin}/api/auth/register`,
        {
          username: username,
          name: name,
          password: password,
          img: imgUrl,
          email: email,
        }
      );

      // Show success toast
      toast.success("Registration successful!");

      setSuccess(true);
      setData(res.data);
      navigate("/login");
    } catch (err) {
      // Show error toast
      toast.error("Registration failed. Please check your input.");

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
            <p> To-Do List </p>

            <a
              href="javascript:void(0)"
              onClick={(e) => {
                navigate("/");
              }}
            >
              <i className="fa fa-laptop" aria-hidden="true"></i>
              Home
            </a>
            <a
              onClick={(e) => {
                navigate("/login");
              }}
            >
              <i className="fa fa-sign-in" aria-hidden="true"></i>
              Login
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
          {!success && (
            <div className="register-container">
              <h2>Create Your Account</h2>
              <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="imgUrl">Image URL:</label>
                  <input
                    type="url"
                    id="imgUrl"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    required
                  />
                </div>

                <button type="submit">Register</button>
              </form>
            </div>
          )}

          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Register;
