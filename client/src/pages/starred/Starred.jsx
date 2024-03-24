import { useAppContext } from "../../Context/AppContext";
import { useEffect, useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";

const Starred = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [create, setCreate] = useState(false);
  const [login, setLogin] = useState(false);
  const [data, setData] = useState([]);
  const { user, setUser } = useAppContext();
  const handleData = async () => {
    try {
      const res = await axios.get(`/card/find/${user._id}`);
      const filteredData = res.data.filter((item) => item.star === true);
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, [user]); // Run whenever the `user` prop changes

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

            <a href="javascript:void(0)" onClick={(e) => navigate("/cards")}>
              <i className="fa fa-laptop" aria-hidden="true"></i>
              Home
            </a>
            <a onClick={handleCreate}>
              <i className="fa fa-plus" aria-hidden="true"></i>
              Create
            </a>

            <a onClick={handleLogOut}>
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
          {data.map((item) => (
            <Card val={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Starred;
