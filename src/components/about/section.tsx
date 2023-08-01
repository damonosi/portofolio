import WebCert from "../../../public/certificari/completeWeb-cert.png";
import MERNCert from "../../../public/certificari/mern-cert.png";
import ReactCert from "../../../public/certificari/react-cert.png";
import CourseImage from "./CourseImage";

const imgCourse = [
  { alt: "web-course", src: WebCert },
  { alt: "react-course", src: ReactCert },
  { alt: "mern-course", src: MERNCert },
];

const AboutSection = () => {
  return (
    <section className="flex flex-col text-center gap-36">
      <span className="text-3xl">Courses</span>
      <div
        className=" relative grid grid-cols-3 p-6 gap-6"
        id="certificari"
      >
        {imgCourse.map(({ alt, src }, index) => (
          <CourseImage
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
