"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden flex-col pt-20"
    >
      <div className="hidden dark:block -z-10">
        <ParticlesHero />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/avatar3.png"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
        {/* <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 text-center tracking-wide"
        >
          Creating web products,
          <br />
          <span className="text-cyan-200"> brands, and experiences.</span>
        </h1> */}
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl text-foreground font-bold flex items-center"
        >
          Hi, I&apos;m Congying - A Passionate
          <span className="text-primary font-bold">
            <Typewriter
              options={{
                strings: [
                  "Web Developer.",
                  "MERN Stack Developer.",
                  "Frontend Developer.",
                  "Backend Developer.",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row gap-4 pt-4 justify-center relative z-10">
        <a href="#contact" className="cosmic-button">
          {" "}
          Get in touch
        </a>
        <a
          href="#projects"
          className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
        >
          View projects
        </a>
      </div>
      <div className="absolute bottom-8 right-8 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <MdOutlineKeyboardDoubleArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
