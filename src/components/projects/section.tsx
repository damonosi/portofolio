"use client";
import InViewWrapper from "@/utils/InViewWrapper";
import getProjectsData, { Proiect } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

type GitHubToolbar = {
  github: string;
};
type TechnologiiComponent = {
  link: string;
  nume: string;
};

const TechnologiiComponent: React.FunctionComponent<TechnologiiComponent> = ({
  link,
  nume,
}) => {
  const [seeToolbar, setSeeToolbar] = useState(false);
  const handleOnMouseEnter = () => {
    setSeeToolbar(true);
  };
  const handleOnMouseLeave = () => {
    setSeeToolbar(false);
  };

  return (
    <div
      className="relative flex w-full cursor-help items-center  justify-center "
      id="technologie-toolbar"
    >
      <div
        className="flex h-16 w-16  items-center justify-center p-1  ring-4"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <Image
          width={48}
          height={48}
          src={link}
          alt="img-technologii"
        />
      </div>

      <div
        className={
          seeToolbar
            ? "  absolute right-1/2 bottom-0 h-auto translate-x-1/2 translate-y-full transform items-center justify-center rounded bg-black p-2 text-center text-white ring-4"
            : "hidden"
        }
      >
        <p className="text-xs">{nume}</p>
      </div>
    </div>
  );
};

const GithubWithToolbar: React.FunctionComponent<GitHubToolbar> = ({
  github,
}) => {
  const [seeToolbar, setSeeToolbar] = useState(false);
  const handleOnMouseEnter = () => {
    setSeeToolbar(true);
  };
  const handleOnMouseLeave = () => {
    setSeeToolbar(false);
  };

  return (
    <div className="relative flex w-1/3 items-center justify-center">
      <a
        href={github}
        target="_blank"
        className="relative"
        rel="noopener noreferrer"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <span>
          <AiFillGithub size={seeToolbar ? "2em" : "1.5em"} />
        </span>{" "}
        <div
          className={
            seeToolbar
              ? "absolute mt-4 flex h-auto w-16 items-center justify-center rounded bg-black p-2 text-center text-white ring-4"
              : "hidden"
          }
        >
          <p className="text-xs">open github in a new tab</p>
        </div>
      </a>
    </div>
  );
};
const animations = {
  inView: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  notInView: {
    opacity: 0,
    x: 100,
    scale: 0.5,
  },
  tranzitie: { duration: 2 },
};
const ProiecteSection = () => {
  const proiecte: Proiect[] = getProjectsData();

  return (
    <section className=" flex flex-col gap-6 p-6">
      <h1>Proiectele Mele</h1>{" "}
      <div className="flex flex-col content-center items-center justify-center gap-16 ">
        {proiecte.map(
          ({ id, limbaj, technologii, numeProiect, github, descriere }) => (
            <InViewWrapper
              key={id}
              inView={animations.inView}
              notInView={animations.notInView}
              tranzitie={animations.tranzitie}
              className="m-2  flex  w-1/2 flex-col  justify-center border-2 p-6 text-left ring-2 "
            >
              <h1>{numeProiect}</h1>
              <hr className="mt-2 h-1 w-1/4 bg-black" />
              <div className="min-h-[100px] w-full border-b-2 border-black pt-4 text-left ">
                <p>{descriere}</p>
              </div>
              <div
                className="flex w-full items-center   justify-between p-6"
                key={id}
                id={id.toString()}
              >
                <div
                  className="w-1/3"
                  id="limbaj-folosit"
                >
                  <Image
                    width={48}
                    height={48}
                    alt="javascript"
                    src={limbaj}
                  />
                </div>
                <div
                  className="flex w-1/3 items-center justify-between"
                  id="sectiune-technologii"
                >
                  {technologii.map(({ link, nume }) => (
                    <TechnologiiComponent
                      key={nume}
                      link={link}
                      nume={nume}
                    />
                  ))}
                </div>

                <GithubWithToolbar github={github} />
              </div>
            </InViewWrapper>
          ),
        )}
      </div>
    </section>
  );
};

export default ProiecteSection;
