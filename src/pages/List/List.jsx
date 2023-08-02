import React from "react";
import { Navbar, Sidebar, Datatable } from "../../components";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
