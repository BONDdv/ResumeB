import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact, FaNodeJs,FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiMongodb, SiExpress } from "react-icons/si";
import { FadeIn } from "./FadeIn";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend",
      "Full Stack",
      "Backend ",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Natchaphol Thongmak
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I transitioned from electrical engineering to web development after
          completing an intensive bootcamp at CodeCamp Thailand. I also gained 3
          months of hands-on experience working with a foreign software company
          based in Thailand. I'm now looking for new opportunities to grow and
          contribute in the tech field.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 ">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skills On
          </h2>


          <div className="flex flex-wrap gap-4 items-center text-3xl">
            {/* MongoDB */}
            <span className="bannerIcon text-green-600">
              <SiMongodb title="MongoDB" />
            </span>
            {/* Express.js */}
            <span className="bannerIcon text-gray-700">
              <SiExpress title="Express.js" />
            </span>
            {/* React */}
            <span className="bannerIcon text-blue-500">
              <FaReact title="React.js" />
            </span>
            {/* Node.js */}
            <span className="bannerIcon text-green-500">
              <FaNodeJs title="Node.js" />
            </span>
            {/* Tailwind CSS */}
            <span className="bannerIcon text-cyan-500">
              <SiTailwindcss title="Tailwind CSS" />
            </span>
            {/* Figma */}
            <span className="bannerIcon text-pink-500">
              <SiFigma title="Figma" />
            </span>
            {/* HTML5 */}
            <span className="bannerIcon text-orange-500">
              <FaHtml5 title="HTML5" />
            </span>
            {/* CSS3 */}
            <span className="bannerIcon text-blue-600">
              <FaCss3Alt title="CSS3" />
            </span>
            {/* JavaScript */}
            <span className="bannerIcon text-yellow-400">
              <FaJs title="JavaScript" />
            </span>
          </div>

        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
