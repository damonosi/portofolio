import ReduxExamples from "./redux/ReduxExamples";

const SkillsSection = () => {
  return (
    <section className="flex flex-col w-full">
      <span className="text-5xl py-6 border-b-2 w-fit border-portocaliu border-r-2 p-6 border-dashed">
        Skills showcase
      </span>
      <div
        className="flex flex-col gap-12 pt-16"
        id="sections-container"
      >
        <ReduxExamples />

        <div id="section2">2</div>
        <div id="section3">3</div>
        <div id="section4">4</div>
        <div id="section5">5</div>
        <div id="section6">6</div>
      </div>
    </section>
  );
};

export default SkillsSection;
