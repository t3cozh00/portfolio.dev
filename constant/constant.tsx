import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiFigma,
  SiDocker,
} from "react-icons/si";

import { FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

export const NavLinks = [
  {
    id: 1,
    href: "#hero",
    label: "Home",
  },

  {
    id: 2,
    href: "#about",
    label: "About",
  },
  {
    id: 3,
    href: "#projects",
    label: "Projects",
  },
  {
    id: 4,
    href: "#skills",
    label: "Skills",
  },
  {
    id: 5,
    href: "#contact",
    label: "Contact",
  },
];

export const projectList = [
  {
    id: 1,
    title: "Finance Dashboard UI",
    description:
      "An interactive weather dashboard that displays current and forecasted weather data using external APIs.",
    image: "/images/p1.jpg",
    tags: ["JavaScript  ", "CSS", "APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "An interactive weather dashboard that displays current and forecasted weather data using external APIs.",
    image: "/images/p2.jpg",
    tags: ["React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "An interactive weather dashboard that displays current and forecasted weather data using external APIs.",
    image: "/images/p3.jpg",
    tags: ["Next.js", "TailwindCSS", "React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description:
      "An interactive weather dashboard that displays current and forecasted weather data using external APIs.",
    image: "/images/p4.jpg",
    tags: ["React Native", "Expo", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const skillList = [
  // Frontend
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    percentage: 89,
    category: "frontend",
  },

  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    percentage: 89,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    percentage: 89,
    category: "frontend",
  },
  {
    name: "React",
    icon: <SiReact />,
    percentage: 92,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 94,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: 95,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    percentage: 90,
    category: "frontend",
  },
  // Backend
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    percentage: 88,
    category: "backend",
  },
  {
    name: "PostgreSQL",
    percentage: 85,
    icon: <SiPostgresql />,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    percentage: 80,
    category: "backend",
  },
  {
    name: "Python",
    icon: <SiPython />,
    percentage: 80,
    category: "backend",
  },
  // Tools
  {
    name: "Git/GitHub",
    icon: <FaGithub />,
    percentage: 90,
    category: "tools",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    percentage: 85,
    category: "tools",
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
    percentage: 95,
    category: "tools",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    percentage: 70,
    category: "tools",
  },
];
