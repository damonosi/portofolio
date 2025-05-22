import ReduxCounter from "./Counter";

const ReduxExamples = () => {
  return (
    <div
      className="flex flex-col gap-24 items-center pt-24"
      id="redux"
    >
      <span className="text-4xl border-b-2 border-portocaliu w-fit">
        Redux toolkit
      </span>
      <div className="grid grid-cols-2 w-full gap-6 ">
        <ReduxCounter />
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};
export default ReduxExamples;
