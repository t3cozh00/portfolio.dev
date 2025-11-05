import { cn } from "@/components/lib/utils";
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DevPortfolio</h3>
            <p className="text-foreground/80">
              A modern portfolio showcasing my skills, projects, and experience
              as a developer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {NavLinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={cn(
                      "text-base text-foreground/80 hover:text-primary transition-colors duration-300"
                    )}
                  >
                    <p>{link.label}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex space-x-4">
              <div
                className={cn(
                  "w-10 h-10 bg-primary/20 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300"
                )}
              >
                <FaLinkedin className="text-white w-4 h-4" />
              </div>
              <div
                className={cn(
                  "w-10 h-10 bg-primary/20 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-red-600 transition-all duration-300"
                )}
              >
                <FaYoutube className="text-white w-4 h-4" />
              </div>
              <div
                className={cn(
                  "w-10 h-10 bg-primary/20 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300"
                )}
              >
                <FaTwitter className="text-white w-4 h-4" />
              </div>
              <div
                className={cn(
                  "w-10 h-10 bg-primary/20 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300"
                )}
              >
                <FaInstagram className="text-white w-4 h-4" />
              </div>
            </div>
            <div className="mt-4">
              <a
                href="mailto:contact@example.com"
                className={cn(
                  " text-foreground/80 hover:text-primary transition-colors duration-300"
                )}
              >
                contact@example.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {" "}
            &copy; {new Date().getFullYear()} CongyingPortfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
