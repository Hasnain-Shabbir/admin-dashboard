import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "./sidebarData";
import { ThemeContext } from "../../context/ThemeContext";
import "./sidebar.scss";

const Navbar = () => {
  const { dispatch } = useContext(ThemeContext);

  return (
    <nav className="sidebar">
      <div className="top">
        <Link to="/" className="logo">
          MyAdmin
        </Link>
      </div>
      <hr />
      <div className="center">
        <div>
          <h3 className="title">Main</h3>
          <ul>
            {sidebarData.main.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="link">
                  <span className="icon">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title">Lists</h3>
          <ul>
            {sidebarData.lists.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="link">
                  <span className="icon">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title">Useful</h3>
          <ul>
            {sidebarData.useful.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="link">
                  <span className="icon">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title">Service</h3>
          <ul>
            {sidebarData.service.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="link">
                  <span className="icon">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title">User</h3>
          <ul>
            {sidebarData.user.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="link">
                  <span className="icon">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
