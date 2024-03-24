// Profile.jsx
import React from "react";
import "./Profile.css";
import { useAppContext } from "../../Context/AppContext";

const Profile = () => {
  const { user } = useAppContext();
  const { name, username, email, img } = user;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Welcome, {name}!</h2>
      </div>
      <div className="profile-content">
        <div className="profile-photo">
          <img src={img} alt={`${name}'s Photo1`} />
        </div>
        <div className="profile-details">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Username:</strong> {username}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
