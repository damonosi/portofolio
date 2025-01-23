type IChildren = {
  children: React.ReactNode;
  className?: React.ReactNode;

};

const SectionBackground = ({ children, className }: IChildren) => {
  return (
    <div
      className={` ${className}  flex w-full items-center justify-center  md:px-6`}
      id="background"
    >
      {children}
    </div>
  );
};

export default SectionBackground;
