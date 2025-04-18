"use client";
import { Proiect } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
type GitHubToolbar = {
  github: string;
};
type LiveLink = {
  liveLink?: string;
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
const LivePreviewWithToolbar: React.FunctionComponent<LiveLink> = ({
  liveLink,
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
        href={liveLink}
        target="_blank"
        className="relative"
        rel="noopener noreferrer"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <span>
          <FaExternalLinkAlt size={seeToolbar ? "2em" : "1.5em"} />
        </span>{" "}
        <div
          className={
            seeToolbar
              ? "absolute mt-4 flex h-auto w-16 items-center justify-center rounded bg-black p-2 text-center text-white ring-4"
              : "hidden"
          }
        >
          <p className="text-xs">open to see live website</p>
        </div>
      </a>
    </div>
  );
};

const ProjectCard = ({
  numeProiect,
  descriere,
  id,
  limbaj,
  technologii,
  github,
  liveLink,
}: Proiect) => {
  console.log(liveLink);
  return (
    <div>
      <h1 className="text-2xl">{numeProiect}</h1>
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
        {liveLink && <LivePreviewWithToolbar liveLink={liveLink} />}
      </div>
    </div>
  );
};

export default ProjectCard;
