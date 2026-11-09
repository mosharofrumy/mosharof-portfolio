export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
  challenges: string[];
  future: string[];
  liveUrl: string;
  repoUrl: string;
  visual: string;
};

export const projects: Project[] = [
  {
    slug: "socialcare",
    name: "SocialCare",
    category: "Full Stack Web Application",
    summary:
      "A social development events platform designed to bring people together around meaningful community activities.",
    description:
      "SocialCare is a full-stack event platform built around community participation and social development. The project uses a separate frontend and backend architecture, with a responsive interface and authentication-focused user experience.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Authentication",
    ],
    highlights: [
      "Separate frontend and backend architecture",
      "Responsive interface and reusable components",
      "Google social login integration",
      "REST API development with TypeScript",
    ],
    challenges: [
      "Organizing a maintainable frontend/backend structure",
      "Connecting authentication flows with the application",
      "Managing environment variables and deployment configuration",
    ],
    future: [
      "Add event registration and attendee management",
      "Build organizer dashboards and event analytics",
      "Improve accessibility and automated testing",
    ],
    liveUrl: "https://social-care-alpha.vercel.app/",
    repoUrl: "https://github.com/mosharofrumy/social-care",
    visual: "social",
  },
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    category: "Market Price Platform",
    summary:
      "A digital platform for exploring local market prices, comparing product prices, and spotting daily price changes.",
    description:
      "Bazar Dor presents local market product prices in a clean, responsive interface. It brings product data together with price-change sections, filtering, sorting, and authentication features.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "Better Auth",
    ],
    highlights: [
      "Product and category API integration",
      "Price increase and decrease sections",
      "Product filtering and sorting",
      "Authentication with Better Auth and MongoDB",
    ],
    challenges: [
      "Integrating product data from external APIs",
      "Presenting price changes clearly",
      "Handling authentication and database configuration",
    ],
    future: [
      "Add price history charts",
      "Introduce saved products and price alerts",
      "Expand market coverage and data sources",
    ],
    liveUrl: "https://bazardor-json.vercel.app/",
    repoUrl: "https://github.com/mosharofrumy/b14-a7-bazar-dor",
    visual: "bazar",
  },
  {
    slug: "fitlog",
    name: "FitLog",
    category: "Workout Library",
    summary:
      "A workout library concept focused on discovering exercises and keeping training information organized.",
    description:
      "FitLog is a responsive workout-library project created as a structured web application. Its visual direction emphasizes a focused dark interface and clear presentation of workout information.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    highlights: [
      "Responsive application layout",
      "Reusable UI components",
      "Dark visual design system",
      "Structured workout-library experience",
    ],
    challenges: [
      "Maintaining consistent UI across screen sizes",
      "Organizing reusable components",
      "Keeping the interface clear and focused",
    ],
    future: [
      "Add workout tracking and personal logs",
      "Introduce user accounts and saved routines",
      "Add search, filters, and progress insights",
    ],
    liveUrl: "https://fitlog-workout-library-xi.vercel.app/",
    repoUrl: "https://github.com/mosharofrumy/fitlog-workout-library",
    visual: "fit",
  },
];
