"use client";
import { Proiect } from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RxDoubleArrowRight } from "react-icons/rx";
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
        className="flex h-16 w-16  items-center justify-center p-1  "
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
            ? "  absolute right-1/2 bottom-0 h-auto translate-x-1/2 translate-y-full transform items-center justify-center rounded bg-black p-2 text-center text-white ring-1"
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
              ? "absolute mt-4 flex h-auto w-16 items-center justify-center rounded bg-black p-2 text-center text-white ring-1"
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
const CardMask = () => {
  return (
    <div className="absolute backdrop-blur-lg border-t-4 border-portocaliu group-hover:border-0  z-50 group-hover:translate-y-full transform duration-1000 transition-all left-0  bottom-0 h-4/5 right-0 "></div>
  );
};
const ProjectCard = ({
  numeProiect,
  descriere,
  id,
  limbaj,
  technologii,
  github,
  imaginePreview,
  liveLink,
}: Proiect) => {
  const router = useRouter();
  function handleProjectClick() {
    router.push(`/project/${numeProiect}`);
  }
  return (
    <div className="flex flex-col  backdrop-brightness-200 rounded-lg p-6 pt-0 overflow-hidden group relative">
      <div className="z-40">
        <CardMask />
        <div className="flex w-full justify-between py-4">
          <h1 className="text-2xl pt-4 h-1/5 group-hover:translate-x-36 transition-all ease-in-out duration-1000">
            {numeProiect}
          </h1>
          <Image
            width={48}
            height={48}
            alt="javascript"
            src={limbaj}
          />
        </div>
        <hr className="mt-2 h-1 w-1/4 group-hover:w-full transition-all ease-in-out  duration-1000 bg-portocaliu" />
        <div className="min-h-[200px] px-2  w-full  tracking-wide  py-12 text-left ">
          <p>{descriere}</p>
        </div>
        <div className="flex w-full justify-center">
          <button
            className="group/button cursor-pointer border-2 flex items-center  gap-4 rounded  text-2xl border-portocaliu  py-2 px-4"
            onClick={handleProjectClick}
          >
            See More About The Project{" "}
            <RxDoubleArrowRight className="group-hover/button:translate-x-1 transition-transform duration-200 text-portocaliu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
