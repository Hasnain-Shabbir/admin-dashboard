import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Home Page
      </div>
    </section>
  );
};

export default Home;
