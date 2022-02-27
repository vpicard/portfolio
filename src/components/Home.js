import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        alt="Profile"
        src={require("./../assets/images/main-profile-picture.png")}
      />
      <div>
        <p>Hello, I'm</p>
        <span>Vincent Picard</span>
        <p style={{ marginBottom: "20px" }}>
          Looking for an <b>android developer job</b>
        </p>
        <button className="offset">About me</button>
        <button className="offset">Download CV</button>
      </div>
    </div>
  );
};

export default Home;
