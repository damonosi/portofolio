import WebCert from "../../../public/certificari/completeWeb-cert.png";
import MERNCert from "../../../public/certificari/mern-cert.png";
import ReactCert from "../../../public/certificari/react-cert.png";
import CourseCard from "./CourseCard";
const imgCourse = [
  { alt: "web-course", src: WebCert, delay: 0 },
  { alt: "react-course", src: ReactCert, delay: 0.5 },
  { alt: "mern-course", src: MERNCert, delay: 1 },
];

const AboutSection = () => {
  return (
    <section className="flex flex-col text-center gap-36 min-h-[calc(100vh-80px)] py-12">
      <span className="text-3xl py-12">Courses</span>
      <div
        className=" relative grid grid-cols-1 md:grid-cols-3 p-6 gap-6 "
        id="certification"
      >
        {imgCourse.map(({ alt, src, delay }, index) => (
          <CourseCard
            delay={delay}
            key={index}
            alt={alt}
            src={src}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
