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
  enhancements?: string[];
  role?: string[];
  links?: LinkItem[];
};

export const projectList: ProjectItem[] = [
  {
    id: 1,
    slug: "petlove",
    title: "PetLove - Pet Adoption Platform",
    cover: "/images/p1.jpg",
    overview:
      "A platform for adopting pets with a user-friendly interface and robust backend.",
    features: [
      "User authentication and profiles",
      "Pet listings with filters",
      "Adoption application process",
    ],
    techStack: ["JavaScript", "Node.js", "MongoDB"],
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
    title: "MovieVerse - Full-Stack Movie Platform",
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
      {
        label: "Presentation",
        url: "https://youtu.be/g0rp-do733Q",
      },
      { label: "Live Site", url: "https://movieverse-zeta.vercel.app/" },
    ],
  },
  {
    id: 3,
    slug: "unichat",
    title: "UniChat - Cross-University Chat App",
    cover: "/images/p3.jpg",
    overview:
      "A chat application built with React Native and Expo, featuring real-time messaging, group chats and user authentication.",
    features: [
      "Email/password authentication with persistent login state",
      "User profiles with selectable avatars shown across the app",
      "Course and project-based group chatrooms with real-time messaging",
      "Group announcements for sharing important updates and deadlines",
      "In-chat translation toggle (EN/FI/NL) so users can read messages in their preferred language",
      "Student-friendly UX with clear navigation, toasts and loading indicators",
    ],
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "C#",
      "ASP.NET Core",
      "websockets",
      "SignalR",
      "PostgreSQL",
      "Docker",
    ],
    enhancements: [
      "Add a richer notification system for mentions, invites and announcement highlights",
      "Support message search, pinned messages and file/image attachments in chatrooms",
      "Improve offline support with message caching and queued sends when the device reconnects",
    ],
    role: [
      "Implemented authentication flow (login, registration, password reset) and persistent login",
      "Built user profile and avatar selection UI, integrating with backend avatar storage",
      "Hooked up chat views to the backend and SignalR-based real-time messaging",
      "Designed and refined the mobile UX: navigation structure, toasts, loading states, and in-chat translation toggle",
    ],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/t3cozh00/unichat-frontend",
      },
      {
        label: "Demo Video",
        url: "https://youtu.be/6jH2R_F63a8",
      },
    ],
  },
  {
    id: 4,
    slug: "personal-portfolio",
    title: "Personal Developer Portfolio",
    cover: "",
    overview:
      "A responsive personal portfolio website built with modern React and Next.js to showcase my projects, skills, and background as a software developer. It focuses on clean design, accessibility, and a student-friendly narrative.",
    features: [
      "Hero section with short introduction, typed headline, and social links",
      "Projects grid powered by a central project list with detailed descriptions",
      "Skills and tech stack section grouped by Frontend, Backend, and Tools",
      "Timeline-style section for education and experience highlights",
      "Dark/light theme toggle with smooth transitions",
      "Fully responsive layout optimized for mobile, tablet, and desktop",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/t3cozh00/portfolio.dev",
      },
    ],
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
