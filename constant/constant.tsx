import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiPython,
  SiFigma,
  SiDocker,
  SiReactivex,
  SiMysql,
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
    href: "#projects",
    label: "Projects",
  },
  {
    id: 3,
    href: "#skills",
    label: "Skills",
  },
  {
    id: 4,
    href: "#about",
    label: "About",
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
    cover: "/images/petlove.png",
    overview:
      "Web-based pet adoption platform where users can register, browse pets, post pets for adoption, and submit adoption applications.",
    features: [
      "User registration, login",
      "Browse pets with basic filters such as type, age, and location",
      "Register pets for adoption with detailed descriptions and photos",
      "Submit adoption applications and view application history",
      "Email notifications for important actions (e.g. password reset, account activation, adoption request)",
    ],
    techStack: [
      "JavaScript",
      "HTML/CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT auth",
      "Nodemailer",
    ],
    enhancements: [
      "Applied a clear Model-Route-Controller structure on the backend for maintainable code.",
      "Implemented JWT-based authentication to protect user data and restrict access to certain actions.",
      "Improved user experience around forms with on-screen notifications and error messages.",
    ],
    role: [
      "Responsible for the pet registration module (frontend form + backend API).",
      "Built the pet registration form UI, including fields such as pet name, type, age, description, and location.",
      "Integrated the pet registration flow with JWT-based authentication so only logged-in users can register pets.",
      "Collaborated with teammates to test the end-to-end flow from pet registration to adoption requests.",
    ],
    links: [
      { label: "GitHub Repo", url: "https://github.com/t3cozh00/petlove" },
      {
        label: "Live Demo",
        url: "https://youtu.be/gHHSJeUEY40",
      },
    ],
  },
  {
    id: 2,
    slug: "movieverse",
    title: "MovieVerse - Full-Stack Movie Platform",
    cover: "/images/movieverse.jpg",
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
    cover: "/images/unichat.jpg",
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
    cover: "/images/logo-z3.png",
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
      { label: "Live Site", url: "" },
    ],
  },
];

export const skillList = [
  // Languages & Frameworks

  {
    name: "JavaScript",
    icon: <SiJavascript />,
    percentage: 87,
    category: "languagesFrameworks",
  },
  {
    name: "React",
    icon: <SiReact />,
    percentage: 85,
    category: "languagesFrameworks",
  },
  {
    name: "React Native",
    icon: <SiReactivex />,
    percentage: 80,
    category: "languagesFrameworks",
  },
  {
    name: "Expo",
    percentage: 75,
    category: "languagesFrameworks",
  },

  { name: "SQL", percentage: 70, category: "languagesFrameworks" },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 85,
    category: "languagesFrameworks",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: 85,
    category: "languagesFrameworks",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    percentage: 85,
    category: "languagesFrameworks",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    percentage: 85,
    category: "languagesFrameworks",
  },
  { name: "Express.js", percentage: 80, category: "languagesFrameworks" },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    percentage: 80,
    category: "languagesFrameworks",
  },

  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    percentage: 80,
    category: "languagesFrameworks",
  },
  {
    name: "Kotlin",
    percentage: 50,
    category: "languagesFrameworks",
  },
  {
    name: "Java",
    percentage: 50,
    category: "languagesFrameworks",
  },
  {
    name: "Python",
    icon: <SiPython />,
    percentage: 80,
    category: "languagesFrameworks",
  },
  { name: "C#", percentage: 40, category: "languagesFrameworks" },

  // Tools & Platforms
  {
    name: "PostgreSQL",
    percentage: 85,
    icon: <SiPostgresql />,
    category: "toolsPlatforms",
  },
  {
    name: "MySQL",
    percentage: 85,
    icon: <SiMysql />,
    category: "toolsPlatforms",
  },
  {
    name: "Vercel",
    percentage: 60,
    category: "toolsPlatforms",
  },
  {
    name: "Render",
    percentage: 60,
    category: "toolsPlatforms",
  },
  {
    name: "Firebase",
    percentage: 60,
    category: "toolsPlatforms",
  },
  {
    name: "Supabase",
    percentage: 60,
    category: "toolsPlatforms",
  },
  {
    name: "Microsoft Azure",
    percentage: 60,
    category: "toolsPlatforms",
  },
  {
    name: "Postman",
    percentage: 60,
    category: "toolsPlatforms",
  },

  {
    name: "Git/GitHub",
    icon: <FaGithub />,
    percentage: 90,
    category: "toolsPlatforms",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    percentage: 80,
    category: "toolsPlatforms",
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
    percentage: 95,
    category: "toolsPlatforms",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    percentage: 70,
    category: "toolsPlatforms",
  },

  // Others
  {
    name: "REST API",
    category: "others",
  },
  {
    name: "JWT Auth",
    category: "others",
  },
  {
    name: "Responsiveness",
    category: "others",
  },
  {
    name: "Scrum",
    category: "others",
  },
  {
    name: "API & DB Design",
    category: "others",
  },
];
