import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
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
        <div
          id="intro"
          className="flex flex-col items-center mt-[5rem] text-[6rem] flex-wrap text-center mx-2 font-semibold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient mb-[-1rem]"
        >
          <div className="">
            <p>I am&nbsp;</p>
            <Typewriter
              words={["Ayantik Sarkar","A passionate Web Developer"]}
              loop={0} 
              cursor
              cursorStyle="|"
              typeSpeed={80}
              delaySpeed={50}
              deleteSpeed={80}
            />
          </div>
        </div>
        <div className="flex gap-5 mt-[5rem]" id="intro-buttons">
          <button className="bg-linear-65 from-purple-500 to-pink-500 px-10 py-1 rounded-[2rem] text-[1.5rem] hover:scale-[1.05] duration-200 font-semibold">
            Get Résumé
          </button>
          <button className="px-8 py-1 rounded-[2rem] text-[1.5rem] hover:scale-[1.05] duration-200 border-pink-500 border-2 text-white font-semibold">
            <a href="/contact">Contact Me!</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
