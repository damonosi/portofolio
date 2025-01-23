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
}

const getProjectsData = () => {
  const proiecte: Proiect[] = [
    {
      id: 1,
      numeProiect: "Human Source",
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
        "This is a website made for a company that connects workes with employers.",
    },
    {
      id: 2,
      numeProiect: "Arena Residence",
      limbaj: javascriptIconLink,
      technologii: [
        { link: reactIconLink, nume: "react" },
        { link: lottieIconLink, nume: "lottie" },
      ],
      github: "https://github.com/damonosi/ArenaResidence",
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg",
      descriere:
        "This is a website I made for a company that sells apartments from the buildings they make",
    },
    {
      id: 3,
      numeProiect: "UrsitoareBc",
      limbaj: javascriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
        { link: mongodbIconLink, nume: "mongodb" },
      ],
      github: "https://github.com/damonosi/ursitoare",
      descriere:
        "This is a web app that I made for a company so that they can organise their bookings using Google api",
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
        "This is a website I made for a company that sells rose products that the make",
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
