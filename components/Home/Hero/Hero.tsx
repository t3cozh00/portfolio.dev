"use client";
import { cn } from "@/components/lib/utils";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      id="hero"
      className={cn(
        "relative flex items-center justify-center overflow-hidden flex-col pt-35 mx-auto px-4 md:px-6 lg:px-8"
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
            Hi! Here&apos;s Zoey
          </h1>

          <h2 className="mt-5 text-2xl sm:text-3xl font-semibold">
            <span className="text-primary/90 font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer.",
                    "MERN Stack Developer.",
                    "Full Stack Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 40,
                  wrapperClassName: "pl-2",
                }}
              />
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-foreground/70 leading-relaxed">
            A third-year IT student focusing on full-stack development, with
            experience in team-based projects and modern web technologies. I
            enjoy turning ideas into useful digital products and keep learning
            new tools along the way.
          </p>

          {/* button */}
          <div className="mt-5 flex gap-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="../../congying_zhao_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
              >
                <BiDownload className="w-5 h-5" />
                <span>Download CV</span>
              </a>
              <a
                href="#projects"
                className={cn(
                  "px-6 py-2 text-center rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                View projects
              </a>
            </div>
          </div>

          {/* social */}
          <div className="mt-8 flex items-center gap-4">
            <div
              className={cn(
                "w-10 h-10 bg-foreground rounded-full flex justify-center items-center cursor-pointer flex-col hover:shadow-lg hover:-translate-y-0.5"
              )}
            >
              <FaGithub className="text-white w-4 h-4" />
            </div>

            <div
              className={cn(
                "w-10 h-10 bg-foreground text-foreground rounded-full flex justify-center items-center cursor-pointer flex-col hover:shadow-lg hover:-translate-y-0.5"
              )}
            >
              <a href="https://www.linkedin.com/in/congying-zhao-36a29629a/">
                <FaLinkedin className="text-white w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* profile  */}
        <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[25rem] lg:h-[25rem]">
            {/* background circle */}
            <div
              className={cn(
                "absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 blur-2xl -z-10"
              )}
            />
            <div
              className={cn(
                "relative w-full h-full rounded-full overflow-hidden ring-8 ring-background shadow-xl bg-background"
              )}
            >
              <Image
                src="/images/328KB.jpg"
                alt="profile"
                fill
                priority
                className={cn(
                  "object-cover object-[20%_12%] scale-[0.88] md:scale-[0.90] lg:scale-[0.92] translate-y-0.5"
                )}
                sizes="(min-width: 1024px) 28rem, 20rem"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <MdOutlineKeyboardDoubleArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
