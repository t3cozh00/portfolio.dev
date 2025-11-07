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

// ---- Project types ----

export type LinkItem = { label: string; url: string };

export type ProjectItem = {
  id: number;
  slug: string; // for URL path
  title: string;
  cover?: string;
  overview: string;
  features: string[];
  techStack: string[];
  enhancements: string[];
  role: string[];
  links?: LinkItem[];
};

export const projectList: ProjectItem[] = [
  {
    id: 1,
    slug: "finance-dashboard",
    title: "Finance Dashboard UI",
    cover: "/images/p1.jpg",
    overview:
      "An interactive dashboard for tracking financial metrics and trends with clean visuals and responsive design.",
    features: [
      "Overview, trends, and drill-down charts",
      "Data filters and date-range controls",
      "Export snapshots",
    ],
    techStack: ["TypeScript", "React", "Charting Library", "Vite"],
    enhancements: [
      "Improved performance with data windowing and memoized selectors.",
      "Enhanced user experience with better error handling and loading states.",
    ],
    role: [
      "Built chart components and responsive layout",
      "Defined data interfaces and state management",
    ],
    links: [{ label: "GitHub Repo", url: "https://github.com" }],
  },
  {
    id: 2,
    slug: "movieverse",
    title: "MovieVerse Web App",
    cover: "/images/p2.jpg",
    overview:
      "A full-stack movie platform for discovering, reviewing, and organizing films. It offers a large catalog with trailers, cast and user reviews, search with filters, Finnish cinema showtimes, personal profiles and favorites, plus community groups.",
    features: [
      "Browse a wide catalog with description, rating, trailer, cast, and user reviews",
      "Check cinema showtimes in Finland",
      "Implement notifications for group join requests and admin responses",
      "Per-user favorites and watchlist (server-side storage with instant client updates)",
      "Create and manage interest-based groups; request to join groups",
      "Account management: sign up/in and delete account",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Azure",
      "Render",
    ],
    enhancements: [
      "Refine the UI/UX to make pages more intuitive and user-friendly",
      "Add movie recommendations based on the user's favorites list",
      "Enhance reviews & engagement: support likes/pins on reviews, sort by popularity or time, @-mentions with notifications",
      "Improve performance & loading: server-side pagination and caching and virtualize long lists.",
    ],
    role: [
      "Built core React views (Search, Detail, Reviews, Watchlist) and route guards",
      "Implemented homepage, group management, user profile, and notifications full-stack features",
      "Designed the REST API and Supabase schema (tables, indexes, row-level security)",
      "Application deployment & environment setup (frontend/backend)",
    ],
    links: [
      { label: "GitHub Repo", url: "https://github.com/t3cozh00/MovieVerse" },
    ],
  },
  {
    id: 3,
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    cover: "/images/p3.jpg",
    overview:
      "An interactive weather dashboard that displays current and forecasted weather data using external APIs.",
    features: [
      "Responsive design with modern UI components",
      "Dynamic content loading with Next.js",
      "Integration with external APIs for real-time data",
    ],
    techStack: ["TypeScript", "React", "Charting Library", "Vite"],
    enhancements: [
      "Refine the UI/UX to make pages more intuitive and user-friendly",
      "Add movie recommendations based on the user's favorites list",
      "Enhance reviews & engagement: support likes/pins on reviews, sort by popularity or time, @-mentions with notifications",
      "Improve performance & loading: server-side pagination and caching and virtualize long lists.",
    ],
    role: [
      "Built chart components and responsive layout",
      "Defined data interfaces and state management",
    ],
    links: [{ label: "GitHub Repo", url: "https://github.com" }],
  },
  {
    id: 4,
    slug: "chat-application",
    title: "Chat Application",
    cover: "/images/p5.avif",
    overview:
      "A chat application built with React Native and Expo, featuring real-time messaging, group chats and user authentication.",
    features: [
      "Real-time messaging with WebSocket",
      "Group chats and direct messaging",
      "User authentication and profile management",
    ],
    techStack: ["React Native", "Expo", "Firebase", "C#", "websockets"],
    enhancements: [
      "Improved performance with data windowing and memoized selectors.",
      "Enhanced user experience with better error handling and loading states.",
    ],
    role: [
      "Built chart components and responsive layout",
      "Defined data interfaces and state management",
    ],
    links: [{ label: "GitHub Repo", url: "https://github.com" }],
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
