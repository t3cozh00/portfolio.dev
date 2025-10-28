import React from "react";
import ServiceCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collaborate with brands <br /> and agencies to create <br /> impactful
        results.
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div>
          <ServiceCard
            icon="/images/s1.png"
            name="UI and UX Design"
            description="Creating user-friendly interfaces
        and experiences for digital products."
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/s2.png"
            name="Web and Mobile Development"
            description="Building responsive and high-performance web and mobile applications."
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/s3.png"
            name="Design and creative"
            description="Crafting visually appealing designs"
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/s4.png"
            name="Development"
            description="Implementing robust and scalable solutions."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
