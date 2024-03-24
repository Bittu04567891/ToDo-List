import axios from "axios";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const val = {
    heading: "",
    work: "",
  };
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedHeading, setEditedHeading] = useState(val.heading);
  const [editedWork, setEditedWork] = useState(val.work);

  const { user, setUser } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user._id);
      console.log(editedHeading);
      console.log(editedWork);
      const res = await axios.post("/card", {
        userId: user._id,
        title: editedHeading,
        desc: editedWork,
      });
      // Show success toast

      toast.success("Login successful!");
      setUser(res.data);
    } catch (err) {
      // Show error toast
      toast.error("Enter the details correctly");
      console.error(err);
    }
  };
  return (
    <div>
      <div className="top-border" />
      <div className="top-border2" />
      <div className="navbar-container">
        <div className="sidebar">
          <aside>
            <p> To-Do List </p>

            <a href="javascript:void(0)" onClick={(e) => navigate("/cards")}>
              <i className="fa fa-laptop" aria-hidden="true"></i>
              Home
            </a>
            <a href="javascript:void(0)" onClick={(e) => navigate("/notes")}>
              <i className="fa fa-clone" aria-hidden="true"></i>
              Notes
            </a>

            <a
              onClick={(e) => {
                setUser(null);
                navigate("/");
              }}
            >
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
          <div className="edit-mode">
            <input
              type="text"
              value={editedHeading}
              onChange={(e) => setEditedHeading(e.target.value)}
              autoFocus
              className="edit-heading"
            />
            <textarea
              value={editedWork}
              onChange={(e) => setEditedWork(e.target.value)}
              className="edit-work"
            />
            <button onClick={handleSubmit} className="save-btn">
              Save
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Create;
