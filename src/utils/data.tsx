import { StaticImageData } from "next/image";
import ArenaLanding from "../../public/imagini/arena-landing-page.png";
import HumanSourceLanding from "../../public/imagini/human-landing-page.png";

let typescriptIconLink =
  "https://res.cloudinary.com/dyfedllac/image/upload/v1670148438/portofoliu/typescript_lulfxa.svg";
let javascriptIconLink =
  "https://res.cloudinary.com/dyfedllac/image/upload/v1670147363/portofoliu/javascript-48_qqnqwt.svg";
let mongodbIconLink =
  "https://res.cloudinary.com/dyfedllac/image/upload/v1670149952/portofoliu/mongodb-icon_clob0h.svg";
let nextjsIconLink =
  "https://res.cloudinary.com/dyfedllac/image/upload/v1670150034/portofoliu/nextjs-icon_xqjikl.svg";
let reactIconLink =
  "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg";
let lottieIconLink =
  "https://res.cloudinary.com/dyfedllac/image/upload/v1670232669/portofoliu/lottieFiles_e8elsa.svg";

export interface Technologie {
  link: string;
  nume: string;
}
export interface Proiect {
  id: number;
  numeProiect: string;
  github: string;
  limbaj: string;
  technologii: Array<Technologie>;
  imaginePreview: StaticImageData;
  descriere: string;
  liveLink?: string;
}

const getProjectsData = () => {
  const proiecte: Proiect[] = [
    {
      id: 1,
      numeProiect: "HumanSource",
      limbaj: javascriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
        { link: lottieIconLink, nume: "lottie" },
      ],

      github: "https://github.com/damonosi/ArenaResidence",
      imaginePreview: HumanSourceLanding,
      descriere:
        "I created a dynamic, multilingual platform that connects employers with potential employees, streamlining the hiring process. Built with Next.js and TypeScript for fast, scalable performance, the app uses Apollo Client and GraphQL for efficient data handling and real-time updates. The UI is responsive and clean, styled with Tailwind CSS, and brought to life with Framer Motion for engaging animations. Integrated i18n to support multiple languages, enhancing accessibility for a broader user base. The platform enables job listings, applications, and profile management, delivering a seamless experience for both employers and job seekers.",
      liveLink: "https://humansource.vercel.app/",
    },
    {
      id: 2,
      numeProiect: "ArenaResidence",
      limbaj: javascriptIconLink,
      technologii: [
        { link: reactIconLink, nume: "react" },
        { link: lottieIconLink, nume: "lottie" },
      ],
      github: "https://github.com/damonosi/ArenaResidence",
      imaginePreview: ArenaLanding,
      descriere:
        "I developed a modern, interactive website for a real estate company to showcase and sell newly built apartments. The site features a custom floor plan viewer using Konva.js for canvas-based interactivity, smooth animations powered by Framer Motion, and responsive UI components styled with Styled-Components. The overall architecture is built with React, ensuring performance, scalability, and maintainability. The result is an engaging, user-friendly platform that enhances the apartment-buying experience.",
    },
    {
      id: 3,
      numeProiect: "UrsitoareEvents",
      limbaj: javascriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
        { link: mongodbIconLink, nume: "mongodb" },
      ],
      github: "https://github.com/damonosi/ursitoare",
      descriere:
        "Developed a custom web application for a company that organizes entertainment shows for weddings and baptisms, streamlining the event booking and management process. Built with React and TypeScript for a scalable and maintainable frontend, the platform features secure authentication via NextAuth and a MongoDB-backed backend managed with Mongoose. Integrated Google Maps for venue location visualization and route planning, while Sass was used to craft a clean, structured UI. Animations and transitions are powered by Framer Motion, enhancing user experience with smooth, modern interactions. The platform supports both clients and administrators in coordinating event logistics efficiently.",
      imaginePreview: HumanSourceLanding,
    },
    {
      id: 4,
      numeProiect: "RoseDimat",
      limbaj: javascriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
        { link: mongodbIconLink, nume: "mongodb" },
      ],
      github: "https://github.com/damonosi/magazin_rose",
      descriere:
        "I designed and developed a full-stack e-commerce platform for a company specializing in Damask rose products. Built with Next.js and TypeScript for high performance and type safety, the site includes a secure user authentication system using NextAuth and a robust backend powered by Mongoose and MongoDB. The frontend features a clean, responsive design with Tailwind CSS, enhanced by smooth animations from Framer Motion for a refined user experience. This platform allows users to browse, purchase, and learn about premium rose-based products through an elegant and intuitive interface.",
      imaginePreview: HumanSourceLanding,
    },
    {
      id: 5,
      numeProiect: "Portfoliu",
      limbaj: typescriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
      ],
      github: "https://github.com/damonosi/magazin_rose",
      descriere:
        "Developed a responsive and modern portfolio website to present my work and skills in a clean, accessible format. Built using Next.js and TypeScript for optimal performance and maintainability, styled with Tailwind CSS for a sleek, utility-first design. Added smooth, dynamic animations with Framer Motion to enhance user experience. The site supports internationalization (i18n), enabling seamless language switching for a global audience. Also includes a dark mode toggle, allowing users to personalize their browsing experience.",
      imaginePreview: HumanSourceLanding,
    },
  ];
  return proiecte;
};

export const getProjectData = (title: string) => {
  const proiecte: Proiect[] = getProjectsData();
  const proiect = proiecte.find(myFunction);

  function myFunction(value: Proiect) {
    return value.numeProiect == title;
  }

  return proiect;
};

export default getProjectsData;
