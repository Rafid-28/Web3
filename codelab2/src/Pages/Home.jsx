import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <p>Home Page</p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
