// ─── Links ────────────────────────────────────────────────────────────────
interface Link {
  url: string;
  name: string;
}

// ─── Lab ─────────────────────────────────────────────────────────────────
export interface LabItem {
  id: string;
  title: string;
  tags: string[];
  url?: string;
}

export const LAB_ITEMS: LabItem[] = [
  {
    id: "ai-status-workflow",
    title: "AI status workflow",
    tags: ["AI", "Shadcn", "Framer Motion"],
  },
  {
    id: "ai-status-workflow-2",
    title: "AI status workflow",
    tags: ["AI", "Shadcn", "Framer Motion"],
  },
  {
    id: "sheet",
    title: "Sheet",
    tags: ["Framer"],
  },
  {
    id: "sheet-2",
    title: "Sheet",
    tags: ["Framer"],
  },
];

// ─── Experience ──────────────────────────────────────────────────────────
export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  description: string;
  period: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "mentoru",
    company: "MentorU",
    role: "Product Engineer & Partner",
    description:
      "Architecting agentic systems and RAG architectures for corporate learning. Led the platform's scaling for the banking sector (+200 users) and its entry into startup accelerators.",
    period: "Oct 2023 - Present",
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Fullstack Developer",
    description:
      "Designed and shipped end-to-end web applications and interactive interfaces, focusing on performance, modular code, and delivering user-centric digital products.",
    period: "From 2022",
  },
];

// ─── People ──────────────────────────────────────────────────────────────
export interface Person {
  name: string;
  url?: string;
}

export const PEOPLE: Person[] = [
  {
    name: "Paulina Vittini",
    url: "https://www.linkedin.com/in/paulina-vittini/"
  },
  {
    name: "Nicolas Herrera",
    url: "https://www.linkedin.com/in/nicoherrera/"
  },
  {
    name: "Roberto Muñoz",
    url: "https://www.linkedin.com/in/robertopmunoz/"
  },
  {
    name: "Jazmin Cuitiño",
    url: "https://www.linkedin.com/in/jazmin-almendra-jassive-cuitino-mendoza/"
  },
  {
    name: "Loreto Escobar",
    url: "https://www.linkedin.com/in/loreto-escobar-quintana-39a8a321/"
  },
  {
    name: "Francisca Capponi",
    url: "https://www.linkedin.com/in/francisca-capponi/"
  },
  {
    name: "Isaias Bustamante",
    url: "https://www.linkedin.com/in/isaiasbustamantecarvajal/"
  },
];

// ─── Connect ─────────────────────────────────────────────────────────────
export const CONNECT_LINKS: Link[] = [
  { url: "https://www.linkedin.com/in/pablo-oyarce-ramirez/", name: "Linkedin" },
  { url: "https://github.com/Unstopabloo", name: "Github" },
];

// ─── Hero / Person ────────────────────────────────────────────────────────
export const HERO = {
  role: "Product Engineer",
  name: "Pablo Oyarce Ramirez",
  tagline:
    "Designing and shipping AI-first solutions, focusing on the intersection of agentic workflows and high-performance product design.",
};
