import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      {/* 1:06:00 */}
      <Services />
      {/* 1:14:00*/}
      <Resume />
    </div>
  );
};

export default Home;
