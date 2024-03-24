import React, { useState } from "react";
import "./Card.css";
import { useAppContext } from "../../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Card = ({ val }) => {
  const [starClicked, setStarClicked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [editedHeading, setEditedHeading] = useState(val.title);
  const [editedWork, setEditedWork] = useState(val.desc);
  const { user, setUser } = useAppContext();
  const handleDelete = async (val) => {
    val.preventDefault();
    try {
      await axios.delete(`/card/${val._id}`);
      // Show success toast
      toast.success("Deleted successfully!");
    } catch (err) {
      // Show error toast
      toast.error("Failed to delete.");
      console.error(err);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    // Save the edited data
    e.preventDefault();
    try {
      const res = await axios.put(`/card/${val._id}`, {
        userId: user._id,
        title: editedHeading,
        desc: editedWork,
      });
      // Show success toast

      toast.success("Updated successful!");
    } catch (err) {
      // Show error toast
      toast.error("Failed");
      console.error(err);
    }

    setIsEditing(false);
  };
  const handleStar = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/card/star/${val._id}`);
      // Show success toast
      console.log(res.data);
      setStarClicked(!starClicked);
      toast.success("Updated successful!");
    } catch (err) {
      // Show error toast
      toast.error("Failed");
      console.error(err);
    }
  };
  return (
    <div className="card">
      <span>
        <i
          className="fa fa-trash"
          style={{ color: "red", fontSize: "25px", cursor: "pointer" }}
          onClick={handleDelete}
        />

        <i
          className="fa fa-edit"
          style={{ color: "blue", fontSize: "25px", cursor: "pointer" }}
          onClick={handleEdit}
        />
        <i
          className={starClicked ? "fa fa-star" : "fa fa-star-o"}
          style={{
            fontSize: "25px",
            cursor: "pointer",
            color: "black", // Set color to black for filled interior
          }}
          onClick={handleStar}
        />
      </span>
      <div>
        {isEditing ? (
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
            <ToastContainer />
          </div>
        ) : (
          <div>
            <p className="heading">{val.title}</p>
            {val.desc}
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Card;
