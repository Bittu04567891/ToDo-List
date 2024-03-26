import { useState } from "react";
import Cards from "../cards/Cards";
import "./Navbar.css";
import { useAppContext } from "../../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [create, setCreate] = useState(false);
  const [login, setLogin] = useState(false);
  const { user, setUser } = useAppContext();
  const handleCreate = (e) => {
    setCreate(true);
    navigate("/create");
  };
  const handleLogOut = (e) => {
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <div className="top-border" />
      <div className="top-border2" />
      <div className="navbar-container">
        <div className="sidebar">
          <aside>
            <p> To-Do List </p>

            <a href="javascript:void(0)" onClick={(e) => navigate("/")}>
              <i className="fa fa-laptop" aria-hidden="true"></i>
              Home
            </a>
            <a href="javascript:void(0)" onClick={(e) => navigate("/notes")}>
              <i className="fa fa-clone" aria-hidden="true"></i>
              Notes
            </a>
            <a href="javascript:void(0)" onClick={(e) => navigate("/star")}>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              Starred
            </a>

            <a onClick={handleCreate}>
              <i className="fa fa-plus" aria-hidden="true"></i>
              Create
            </a>

            <a onClick={handleLogOut}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              Logout
            </a>
            <span>
              <img
                src={user.img}
                alt=""
                className="img-fluid rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginTop: "170px",
                }}
              />
              <h3> {user.name}</h3>
            </span>
          </aside>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/bittu-thakur-618774211/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div
          className="cards-container"
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1706028469800-7c719a733e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundRepeat: "no-repeat",
            objectFit: "contain",
          }}
        >
          <h1>Welcome to Notes</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
