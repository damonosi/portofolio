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
  imaginePreview: string;
  descriere: string;
}

const getProjectsData = () => {
  const proiecte: Proiect[] = [
    {
      id: 1,
      numeProiect: "Arena Residence",
      limbaj: javascriptIconLink,
      technologii: [
        { link: reactIconLink, nume: "react" },
        { link: lottieIconLink, nume: "lottie" }
      ],
      github: "https://github.com/damonosi/ArenaResidence",
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg",
      descriere:
        "Am facut un site de prezentare pentru o companie care vinde apartamente. Situl este facut cu React. sectiunea de selectat etajul si apartamentul sunt facute folosind KonvaJs"
    },
    {
      id: 2,
      numeProiect: "UrsitoareBc",
      limbaj: javascriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
        { link: mongodbIconLink, nume: "mongodb" }
      ],
      github: "https://github.com/damonosi/ursitoare",
      descriere:
        "Este o aplicatie care ajuta firma de ursitoare sa isi managerieze rezervarile,sa isi aranjeze traseul. Pe partea de client, clientul poate face programari noi,are un formular de completat pentru a ajuta la preluarea mai usoara de date pentru realizarea spectacolelor.Implementat login si auth.Admin/client siguranta path,stocare date in MongoDbAtlas",
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg"
    },
    {
      id: 3,
      numeProiect: "RoseDimat",
      limbaj: javascriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
        { link: mongodbIconLink, nume: "mongodb" }
      ],
      github: "https://github.com/damonosi/magazin_rose",
      descriere: "Ce am facut in proiect",
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg"
    },
    {
      id: 4,
      numeProiect: "Portofoliu",
      limbaj: typescriptIconLink,
      technologii: [
        { link: nextjsIconLink, nume: "nextjs" },
        { link: reactIconLink, nume: "react" },
        { link: mongodbIconLink, nume: "mongodb" }
      ],
      github: "https://github.com/damonosi/magazin_rose",
      descriere: "Ce am facut in proiect",
      imaginePreview:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1670150078/portofoliu/react-js-icon_bkyalh.svg"
    }
  ];
  return proiecte;
};

export default getProjectsData;
