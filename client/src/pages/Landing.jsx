import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>
        <div className="top-border" />
        <div className="top-border2" />
        <div className="navbar-container">
          <div className="sidebar">
            <aside>
              <p> To-Do List </p>

              <Link to="/login">
                <a>
                  <i className="fa fa-sign-in" aria-hidden="true"></i>
                  Login
                </a>
              </Link>
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
          <div
            className="cards-container"
            style={{
              backgroundImage: `url("https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=996&t=st=1711280075~exp=1711280675~hmac=240e6305c33f90eec46e76ae52600c83a5a921a51f8a7cae66a3808368d8ea69")`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Landing;
