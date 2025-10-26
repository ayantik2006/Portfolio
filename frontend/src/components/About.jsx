import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        scrollBehavior: "smooth",
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

        <div className="text-white mt-7 flex gap-0" id="about-index">
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-5 h-5 bg-pink-500 border-5 border-red-800"></div>
            <div className="font-semibold text-pink-400 hover:scale-[1.1] duration-300"><a href="#intro">Intro</a></div>
          </div>
          <div className="w-15 h-1 mr-[-1rem] bg-pink-600 mt-2"></div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-5 h-5 bg-pink-500 border-5 border-red-800"></div>
            <div className="font-semibold text-pink-400 hover:scale-[1.1] duration-300"><a href="#education">Education</a></div>
          </div>
          <div className="w-20 h-1 mr-[-2rem] ml-[-1rem] bg-pink-600 mt-2"></div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-5 h-5 bg-pink-500 border-5 border-red-800"></div>
            <div className="font-semibold text-pink-400 hover:scale-[1.1] duration-300"><a href="#approach">My Approach</a></div>
          </div>
          <div className="w-20 ml-[-2rem] h-1 mr-[-1rem] bg-pink-600 mt-2"></div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-5 h-5 bg-pink-500 border-5 border-red-800"></div>
            <div className="font-semibold text-pink-400 hover:scale-[1.1] duration-300"><a href="#goals">My Goals</a></div>
          </div>
        </div>

        <div className="flex flex-col mt-5 w-full mb-[20rem] about-main-box">
          <div className="text-white font-bold text-[4rem] ml-[5rem] flex items-center gap-4" id="intro">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEjQS2dPfL33Q/profile-displayphoto-shrink_800_800/B56Zd8MGAuHEAc-/0/1750135235156?e=1762992000&v=beta&t=6uODWsDakCNQGkugydVvL9yKv7yX6hzFjWRsxhrt7DM"
              className="w-[5rem] h-[5rem]  rounded-full mt-2 border-orange-700 border-4"
            />
            <div className="about-heading">Intro</div>
          </div>
          <div className="max-w-[60.8rem] text-gray-400 italic p-5 ml-[4rem] mr-[1rem] text-2xl hover:translate-x-5 duration-300 shadow-[-6px_6px_6px_#ef39a5] about-divs hover:font-semibold">
            👋 Hi, I'm Ayantik Sarkar — a passionate web developer and aspiring
            software engineer from NIT Rourkela. I love turning complex problems
            into clean, efficient code.
          </div>

          <div className="text-white font-bold text-[4rem] ml-[4rem] mt-[5rem] mr-[2rem] flex" id="education">
            <p className="mt-[-0.1rem] about-heading">🏫</p>{" "}
            <p className="about-heading">Education</p>
          </div>
          <div className="max-w-[60rem] text-white p-5 justify-self-end mr-[1rem] text-2xl hover:translate-x-5 duration-300 shadow-[-6px_6px_6px_#ef39a5] ml-[4rem] about-divs flex flex-col gap-5">
            <div className="flex gap-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbs6--dxw9FBUMzte0H4J9hH46_VsnRPANg&s"
                className="w-[5rem] h-[5rem] border-4 border-orange-900"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold">
                  National Institute of Technology, Rourkela
                </h1>
                <h2 className="text-[1.1rem] text-gray-300">
                  Bachelor of Technology - Civil Engineering
                </h2>
                <h3
                  className="italic
                 text-[1rem] text-gray-400"
                >
                  2025 - Present
                </h3>
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="https://hemsheela.in/wp-content/uploads/2023/12/1.png"
                className="w-[5rem] h-[5rem] border-4 border-orange-900"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold">
                  Hem Sheela Model School, Durgapur
                </h1>
                <h2 className="text-[1.1rem] text-gray-300">Higher Secondary Education</h2>
                <h3
                  className="italic
                 text-[1rem] text-gray-400"
                >
                  2023 - 2025
                </h3>
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkgV9YPQdwlOO7XpX8OlqXkEs6fE_4kmQpQ&s"
                className="w-[5rem] h-[5rem] border-4 border-orange-900"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold">St. Xavier's School, Durgapur</h1>
                <h2 className="text-[1.1rem] text-gray-300">Secondary Education</h2>
                <h3
                  className="italic
                 text-[1rem] text-gray-400"
                >
                  2012 - 2023
                </h3>
              </div>
            </div>
          </div>
          <div className="text-white font-bold text-[4rem] ml-[5rem] flex items-center gap-4 mt-[5rem]" id="approach">
            <div className="about-heading">💭 My Approach</div>
          </div>
          <div className="max-w-[60rem] italic p-5 ml-[4rem] mr-[1rem] text-2xl hover:translate-x-5 duration-300 shadow-[-6px_6px_6px_#ef39a5] about-divs text-gray-400 hover:font-semibold">
            I believe in clean code, continuous learning, and building tools
            that make life easier for others.
          </div>

          <div className="text-white font-bold text-[4rem] ml-[5rem] flex items-center gap-4 mt-[5rem]" id="goals">
            <div className="about-heading">🎯 My Goals</div>
          </div>
          <div className="max-w-[60rem] text-gray-400 italic hover:font-semibold p-5 ml-[4rem] mr-[1rem] text-2xl hover:translate-x-5 duration-300 shadow-[-6px_6px_6px_#ef39a5] about-divs">
            Currently, I'm focused on building impactful projects and preparing
            to join top tech companies where I can grow and innovate.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
