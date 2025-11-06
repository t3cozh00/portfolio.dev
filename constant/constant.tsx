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

// ---- Project types (EN only) ----

export type LinkItem = { label: string; url: string };

export type ProjectItem = {
  id: number;
  slug: string; // used to build /projects/[slug]
  title: string;
  cover?: string; // top hero/cover image
  overview: string; // Overview section
  features: string[]; // Main Features section
  techStack: string[]; // Tech Stack badges
  improvements: string[]; // Challenges & Solutions section
  role: string[]; // My Role section
  links?: LinkItem[]; // Optional external links (GitHub, Demo...)
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
    improvements: [
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
      "A full-stack web app for discovering and organizing movies. Users can search titles, open rich detail pages, read/write community reviews, and save favorites to a personal watchlist.",
    features: [
      "Keyword search with debounce and sortable results (popularity, rating, release date)",
      "Rich detail pages: poster, synopsis, genres, runtime, cast, and related titles",
      "Reviews & ratings with full CRUD and optimistic UI (rollback on failure)",
      "Per-user favorites and watchlist (server-side storage with instant client updates)",
      "Authentication with JWT and protected routes, including token refresh",
      "Responsive UI with light/dark themes and accessible color contrast",
    ],
    techStack: [
      "React",
      "Node.js",
      "REST API",
      "PostgreSQL",
      "Supabase",
      "Azure",
      "GitHub Actions (CI/CD)",
    ],
    improvements: [
      "Optimized database queries and added indexes to improve search performance by 40%.",
      "Implemented token refresh to reduce user logouts by 25%.",
      "Enhanced accessibility to achieve WCAG AA compliance.",
    ],
    role: [
      "Designed the REST API and Supabase schema (tables, indexes, row-level security)",
      "Built core React views (Search, Detail, Reviews, Watchlist) and route guards",
      "Implemented authentication (signup/login, token refresh, logout) and frontend hooks",
      "Set up Azure hosting and CI/CD with GitHub Actions",
      "Performance and UX polish: image placeholders, pagination/windowing, accessibility, empty/error states",
      "Wrote developer docs: env samples, runbooks, and contribution guidelines",
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
    improvements: [
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
    improvements: [
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
