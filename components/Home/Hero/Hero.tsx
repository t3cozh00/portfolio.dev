"use client";
import { cn } from "@/components/lib/utils";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiDownload, BiEnvelope } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      id="hero"
      className={cn(
        "relative h-screen flex items-center justify-center overflow-hidden flex-col pt-20"
      )}
    >
      <div className="hidden dark:block -z-10">
        <ParticlesHero />
      </div>

      {/* container */}
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* left content */}
        <div className="order-1 lg:order-1">
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl xl:text-6xl text-foreground whitespace-nowrap">
            Hi, I&apos;m Con
          </h1>

          <h2 className="mt-5 text-2xl sm:text-3xl font-semibold text-foreground/90">
            Full Stack Developer
          </h2>

          <p className="mt-5 max-w-xl text-foreground/70 leading-relaxed">
            A passionate developer with experience in Next.js, React, Tailwind
            CSS, and cloud services. I love building clean, accessible web apps
            with a focus on performance and delightful UX.
          </p>

          {/* button */}
          <div className="mt-5 flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="cosmic-button w-fit flex items-center mx-auto gap-2">
                <BiDownload className="w-5 h-5" />
                <span>Download CV</span>
              </button>
              <a
                href="#projects"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                View projects
              </a>
            </div>
          </div>

          {/* social */}
          <div className="mt-5 flex items-center gap-4">
            <div
              className={cn(
                "w-10 h-10 bg-primary/20 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-gray-800 transition-all duration-300"
              )}
            >
              <FaGithub className="text-white w-4 h-4" />
            </div>

            <div
              className={cn(
                "w-10 h-10 bg-primary/20 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-blue-600 transition-all duration-300"
              )}
            >
              <a href="https://www.linkedin.com/notifications/?filter=all">
                <FaLinkedin className="text-white w-4 h-4" />
              </a>
            </div>
            <div
              className={cn(
                "w-10 h-10 bg-primary/20 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-green-200 transition-all duration-300"
              )}
            >
              <BiEnvelope className="text-white w-4 h-4" />
            </div>
          </div>
        </div>

        {/* profile  */}
        <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem]">
            {/* background circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 blur-2xl -z-10" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-8 ring-background shadow-xl p-6 sm:p-8 lg:p-10">
              <Image
                src="/images/avatar2.png"
                alt="profile"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <MdOutlineKeyboardDoubleArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/avatar3.png"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
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
      </div> */}
    </section>
  );
};

export default Hero;
