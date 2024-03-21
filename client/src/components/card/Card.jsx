import React, { useState } from "react";
import "./Card.css";

const Card = ({ val }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHeading, setEditedHeading] = useState(val.heading);
  const [editedWork, setEditedWork] = useState(val.work);

  const handleDelete = () => {
    // Logic to delete the card
    console.log("Card deleted");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited data

    setIsEditing(false);
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
          className="fa fa-star-o"
          style={{ color: "black", fontSize: "25px", cursor: "pointer" }}
        />
      </span>
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
        </div>
      ) : (
        <div>
          <p className="heading">{val.heading}</p>
          {val.work}
        </div>
      )}
    </div>
  );
};

export default Card;
