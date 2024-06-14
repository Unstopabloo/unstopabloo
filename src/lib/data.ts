interface Link {
  url: string;
  name: string;
}

type Device = "Mobile" | "Tablet" | "Desktop" | string;

type Tool = | "HTML5"
  | "CSS"
  | "TypeScript"
  | "React"
  | "NextJS"
  | "NodeJS"
  | "Express"
  | "TailwindCSS"
  | "Bootstrap"
  | "PHP"
  | "Shopify"
  | "Amazon Web Services"
  | "Astro"
  | "Python"
  | "PostgreSQL"
  | "React Query"
  | "jQuery"
  | "Wordpress";

interface Project {
  id: number;
  title: string;
  description: string;
  tools: Tool[];
  devices: Device[];
  image: string;
  links: Link[];
  credits?: boolean;
  primary_url: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "TeaChill - Shopify headless Ecommerce",
    description: "Ecommerce de venta de variedades de té enfocado en la performance del sitio, desarrollado con NextJS y Shopify como headless CMS",
    credits: true,
    primary_url: "https://tea-chill.vercel.app",
    tools: [
      "TypeScript",
      "NextJS",
      "Shopify",
      "TailwindCSS"
    ],
    devices: ["Mobile", "Desktop"],
    image: "Teachill",
    links: [
      {
        url: "https://github.com/Unstopabloo/Tea-Chill",
        name: "Github"
      },
      {
        url: "https://tea-chill.vercel.app",
        name: "Visitar"
      }
    ]
  },
  {
    id: 2,
    title: "Foro MentorU - Foro interactivo con AI",
    description: "Proyecto de trabajo en el cual se me encargo desarrollar la interfaz y las APIs con NextJS y AWS, este foro esta potenciado con AI para entregar feedback preciso y oportuno a los estudiantes.",
    primary_url: "https://mentoru.co",
    tools: [
      "TypeScript",
      "NextJS",
      "React",
      "NodeJS",
      "Python",
      "Amazon Web Services",
      "React Query",
      "PostgreSQL"
    ],
    devices: ["Mobile", "Tablet", "Desktop"],
    image: "MentorU",
    links: [
      {
        url: "https://mentoru-forum-dev.vercel.app/",
        name: "Visitar"
      }
    ]
  },
  {
    id: 3,
    title: "KairosX - Administrador de finanzas personales",
    description: "KairosX actúa como un organizador de gastos personales, que nació con la necesidad propia de organizar mis gastos e ingresos.",
    primary_url: "https://kairos-x.vercel.app",
    tools: [
      "TypeScript",
      "NextJS",
      "PostgreSQL",
      "TailwindCSS"
    ],
    devices: ["Desktop"],
    image: "Kairos",
    links: [
      {
        url: "https://github.com/Unstopabloo/KairosX",
        name: "Github"
      },
      {
        url: "https://kairos-x.vercel.app",
        name: "Visitar"
      }
    ]
  },
  {
    id: 4,
    title: "Spotify Redesign - rediseño en Wordpress",
    description: "Rediseño de spotify, proyecto encargado como parte de examen. Con un reproductor de musica interactivo integrado, desarrollado en Wordpress con PHP y jQuery.",
    primary_url: "https://pabloyarce.laboratoriodiseno.cl/spotify-redesign/",
    tools: [
      "Wordpress",
      "PHP",
      "jQuery",
      "Bootstrap"
    ],
    devices: ["Mobile", "Desktop"],
    image: "Spotify",
    links: [
      {
        url: "https://pabloyarce.laboratoriodiseno.cl/spotify-redesign/",
        name: "Visitar"
      }
    ]
  },

]