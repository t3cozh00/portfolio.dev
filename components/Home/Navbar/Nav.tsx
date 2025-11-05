"use client";
import { cn } from "@/components/lib/utils";
import { NavLinks } from "@/constant/constant";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={cn(
        `transition-all duration-200 h-[12vh] z-[10000] fixed w-full ${
          navBg ? "bg-background/80 backdrop-blur-md shadow-md " : "fixed"
        }`
      )}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <Link href="#hero" className="flex items-center space-x-2">
          <div className="relative w-15 h-15">
            <Image
              src="/images/logo-z3.png"
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-foreground" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-foreground  font-bold">
            DevPortfolio
          </h1>
        </div> */}
        {/* navlinks */}
        <div className="hidden lg:flex justify-center">
          <div className="flex items-center space-x-10">
            {NavLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "text-base text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
                  )}
                >
                  <p>{link.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-foreground/80 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
