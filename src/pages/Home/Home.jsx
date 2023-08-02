import React from "react";
import {
  Sidebar,
  Navbar,
  Widget,
  Featured,
  Chart,
  TableList,
} from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </section>
  );
};

export default Home;
