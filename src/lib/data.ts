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
  | "Wordpress"
  | "JavaScript";

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
  {
    id: 5,
    title: "Hive5 - Gestion y trabajo grupal",
    description: "Hive5 está pensado para ser utilizado como software interno de la metodologia ACBD ampliamente utilizado en la escuela de diseño de DuocUC, fue diseñado para que los alumnos tengan mejor integración en el desarrollo de los proyectos y los docentes tegan informacion más precisa en cuanto a la participación de cada alumno. En este proyecto se implemento interfaz optimista y Suspense.",
    primary_url: "https://hive5.vercel.app/",
    tools: [
      "NextJS",
      "TypeScript",
      "NodeJS",
      "TailwindCSS"
    ],
    devices: ["Mobile", "Desktop"],
    image: "Hive5",
    links: [
      {
        url: "https://hive5.vercel.app/",
        name: "Visitar"
      },
      {
        url: "https://github.com/Unstopabloo/uCount",
        name: "Github"
      }
    ]
  },
  {
    id: 6,
    title: "Inner Voice - Skills recap",
    description: "Este proyecto sirvio como examen final de 4to semestre el cual quise que recopilara todo lo aprendido en aquel momento (React y manejo de APIs). Se trata de un proyecto que simula una aplicacion para meditar con audios de mis clases generados con AI, asi como tambien un asistente.",
    primary_url: "https://inner-voice.netlify.app/",
    tools: [
      "JavaScript",
      "React",
      "Wordpress",
      "Python",
      "TailwindCSS"
    ],
    devices: ["Tablet", "Desktop"],
    image: "InnerVoice",
    links: [
      {
        url: "https://inner-voice.netlify.app/",
        name: "Visitar"
      },
      {
        url: "https://github.com/Unstopabloo/Inner-Voice",
        name: "Github"
      }
    ],
  }

]