"use client";
import InViewWrapper from "@/utils/InViewWrapper";
import getProjectsData, { Proiect } from "@/utils/data";
import ProjectCard from "./ProjectCard";

const animations = {
  inView: {
    x: 0,
    scale: 1,
  },
  notInView: {
    x: 100,
    scale: 0.5,
  },
  tranzitie: { duration: 0.6 },
};
const ProiecteSection = () => {
  const proiecte: Proiect[] = getProjectsData();

  return (
    <section className=" flex flex-col text-center gap-6 p-6 py-12">
      <h1 className="text-5xl py-12">Some of the projects I have made</h1>{" "}
      <div
        className="grid grid-cols-1 md:grid-cols-1 gap-56  justify-center  "
        id="work"
      >
        {proiecte.map(
          ({
            id,
            limbaj,
            technologii,
            numeProiect,
            github,
            descriere,
            liveLink,
            imaginePreview,
          }) => (
            <InViewWrapper
              key={id}
              inView={animations.inView}
              notInView={animations.notInView}
              tranzitie={animations.tranzitie}
              className="  flex   flex-col  justify-center   text-left  "
            >
              <ProjectCard
                id={id}
                limbaj={limbaj}
                technologii={technologii}
                imaginePreview={imaginePreview}
                numeProiect={numeProiect}
                liveLink={liveLink}
                github={github}
                descriere={descriere}
              />
            </InViewWrapper>
          ),
        )}
      </div>
    </section>
  );
};

export default ProiecteSection;
