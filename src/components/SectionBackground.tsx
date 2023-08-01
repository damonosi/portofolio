type IChildren = {
  children: React.ReactNode;
  className?: React.ReactNode;
};

const SectionBackground = ({ children, className }: IChildren) => {
  return (
    <div
      className={` ${className}  flex items-center justify-center px-6`}
      id="background"
    >
      {children}
    </div>
  );
};

export default SectionBackground;
