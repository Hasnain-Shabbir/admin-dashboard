import React from "react";
import { sidebarData } from "./sidebarData";
import "./sidebar.scss";

const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="top">
        <a href="#" className="logo">
          MyAdmin
        </a>
      </div>
      <hr />
      <div className="center">
        <div>
          <h3 className="title">Main</h3>
          <ul>
            {sidebarData.main.map((item) => (
              <li key={item.id}>
                <span className="icon">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title">Lists</h3>
          <ul>
            {sidebarData.lists.map((item) => (
              <li key={item.id}>
                <span className="icon">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title">Useful</h3>
          <ul>
            {sidebarData.useful.map((item) => (
              <li key={item.id}>
                <span className="icon">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title">Service</h3>
          <ul>
            {sidebarData.service.map((item) => (
              <li key={item.id}>
                <span className="icon">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="title">User</h3>
          <ul>
            {sidebarData.user.map((item) => (
              <li key={item.id}>
                <span className="icon">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </nav>
  );
};

export default Navbar;
