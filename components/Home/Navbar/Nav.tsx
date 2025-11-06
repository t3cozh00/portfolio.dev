"use client";
import { cn } from "@/components/lib/utils";
import { NavLinks } from "@/constant/constant";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 1);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
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
        <Link href="/#hero" className="flex items-center space-x-2">
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

        {/* navlinks */}
        <div className="hidden lg:flex justify-center">
          <div className="flex items-center space-x-10">
            {NavLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.href.startsWith("#") ? `/${link.href}` : link.href}
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

          <MdLanguage className="w-4.5 h-4.5 text-foreground/80 items-center justify-center text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50" />

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
