import { useState } from "react";
import Cards from "../cards/Cards";
import "./Navbar.css";

const Navbar = () => {
  const val = {
    heading: "",
    work: "",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedHeading, setEditedHeading] = useState(val.heading);
  const [editedWork, setEditedWork] = useState(val.work);
  const [create, setCreate] = useState(false);

  const handleSave = () => {
    // Save the edited data

    setIsEditing(false);
    setCreate(false);
  };
  const handleCreate = (e) => {
    setCreate(true);
  };
  return (
    <>
      <div className="top-border" />
      <div className="top-border2" />
      <div className="navbar-container">
        <div className="sidebar">
          <aside>
            <p> To-Do List </p>
            <a href="javascript:void(0)" target="_blank" rel="noreferrer">
              <i className="fa fa-user-o" aria-hidden="true"></i>
              My drive
            </a>
            <a href="javascript:void(0)" target="_blank" rel="noreferrer">
              <i className="fa fa-laptop" aria-hidden="true"></i>
              Computers
            </a>
            <a href="javascript:void(0)" target="_blank" rel="noreferrer">
              <i className="fa fa-clone" aria-hidden="true"></i>
              Shared with me
            </a>
            <a href="javascript:void(0)" target="_blank" rel="noreferrer">
              <i className="fa fa-star-o" aria-hidden="true"></i>
              Starred
            </a>
            <a href="javascript:void(0)" target="_blank" rel="noreferrer">
              <i className="fa fa-trash-o" aria-hidden="true"></i>
              Trash
            </a>
            <a onClick={handleCreate}>
              <i className="fa fa-plus" aria-hidden="true"></i>
              Create
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
          {!create ? (
            <Cards />
          ) : (
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
              <button onClick={handleSave} className="save-btn">
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
