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
  imaginePreview?: string;
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
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg",
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
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg",
      descriere:
        "I developed a modern, interactive website for a real estate company to showcase and sell newly built apartments. The site features a custom floor plan viewer using Konva.js for canvas-based interactivity, smooth animations powered by Framer Motion, and responsive UI components styled with Styled-Components. The overall architecture is built with React, ensuring performance, scalability, and maintainability. The result is an engaging, user-friendly platform that enhances the apartment-buying experience.",
    },
    {
      id: 3,
      numeProiect: "Ursitoare Events",
      limbaj: javascriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
        { link: mongodbIconLink, nume: "mongodb" },
      ],
      github: "https://github.com/damonosi/ursitoare",
      descriere:
        "Developed a custom web application for a company that organizes entertainment shows for weddings and baptisms, streamlining the event booking and management process. Built with React and TypeScript for a scalable and maintainable frontend, the platform features secure authentication via NextAuth and a MongoDB-backed backend managed with Mongoose. Integrated Google Maps for venue location visualization and route planning, while Sass was used to craft a clean, structured UI. Animations and transitions are powered by Framer Motion, enhancing user experience with smooth, modern interactions. The platform supports both clients and administrators in coordinating event logistics efficiently.",
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg",
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
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg",
    },
    {
      id: 5,
      numeProiect: "Portofoliu",
      limbaj: typescriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
        { link: mongodbIconLink, nume: "mongodb" },
      ],
      github: "https://github.com/damonosi/magazin_rose",
      descriere: "This is my portofolio website",
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg",
    },
  ];
  return proiecte;
};

export default getProjectsData;
