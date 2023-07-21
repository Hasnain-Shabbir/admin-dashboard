import React from "react";
import { Sidebar } from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <Sidebar />
      <div className="homeContainer">Home Page</div>
    </section>
  );
};

export default Home;
