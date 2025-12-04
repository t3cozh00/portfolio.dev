import { cn } from "@/components/lib/utils";
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
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
                    href={
                      link.href.startsWith("#") ? `/${link.href}` : link.href
                    }
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
