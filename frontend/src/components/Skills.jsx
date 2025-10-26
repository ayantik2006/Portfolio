import React from "react";
import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";

function Skills() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div
        style={{ position: "relative", zIndex: 1 }}
        className="flex flex-col items-center"
      >
        <div
          className="flex flex-row-reverse justify-between items-center w-full navbar-ham"
          id=""
        >
          <Navbar />
        </div>

        <div className="flex flex-col text-white mt-[2.5rem]">
          <div className="flex items-center">
            <h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient font-bold text-[3rem] text-center mx-2 mt-">
              I have been learning and working with these
              <Typewriter
                words={[" technologies", " tools", " languages"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={110}
                delaySpeed={80}
                deleteSpeed={110}
              />
            </h1>
          </div>
        </div>
        <div className="flex mb-[3rem] flex-wrap mt-6 gap-5 mx-3 justify-center">
          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                className=" m-2 h-[7em] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[-1.08rem] text-[1.8rem]">
                HTML5
            </div>
          </div>

          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                className=" m-2 h-[7em] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[-1.08rem] text-[1.8rem]">
                CSS
            </div>
          </div>

          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
                className=" m-2 h-[5rem] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[1rem] text-[1.6rem]">
                Tailwind CSS
            </div>
          </div>

          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className=" m-2 h-[7em] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[-1.08rem] text-[1.8rem]">
                JavaScript
            </div>
          </div>

          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className=" m-2 h-[7em] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[-1.08rem] text-[1.8rem]">
                ReactJS
            </div>
          </div>

          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                className=" m-2 h-[7rem] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[-1.08rem] text-[1.8rem]">
                NodeJS
            </div>
          </div>

          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                className=" m-2 h-[7rem] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[-1.08rem] text-[1.8rem]">
                ExpressJS
            </div>
          </div>

          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                className=" m-2 h-[7em] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[-1.08rem] text-[1.8rem]">
               MongoDB
            </div>
          </div>

          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg"
                className=" m-2 h-[7em] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[-1.08rem] text-[1.8rem]">
               Git
            </div>
          </div>

          <div className="bg-[#ffffff21] w-[10rem] h-[12rem] rounded-[0.5rem] backdrop-blur-[3px] shadow-[0_0_3px_white] flex flex-col items-center hover:scale-[1.04] duration-300">
            <div className="rounded-[1rem] p-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className=" m-2 h-[7em] rounded-[0.5rem]"
              />
            </div>
            <div className="text-white font-bold mt-[-1.08rem] text-[1.8rem]">
               GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
