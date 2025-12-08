import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [isLoved, setIsLoved] = useState(false);
  const [loveCount,setLoveCount]=useState(0);
  useEffect(()=>{
    fetch(import.meta.env.VITE_BACKEND_URL+"",{
      method:"POST",
      headers:{"Content-Type":"application/json"}
    })
    .then((res)=>res.json())
    .then((res)=>{

    })
    .catch((err)=>console.log(err))
  },[]);

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
              words={["Ayantik Sarkar", "A passionate Web Developer"]}
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
            <a
              href="https://drive.google.com/file/d/1TmuYrMKZNFIZGZwdF0aLSo1ypNNkmlCT/view?usp=sharing"
              target="_blank"
            >
              Get Résumé
            </a>
          </button>
          <button
            className="px-8 py-1 rounded-[2rem] text-[1.5rem] hover:scale-[1.05] duration-200 border-pink-500 border-2 text-white font-semibold"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Me!
          </button>
        </div>

        {/* <div className="flex gap-4 mt-10 items-center">
          <div className="text-[2rem] font-bold bg-gradient-to-r from-pink-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-gradient">
            Give a Heart 👉
          </div>
          <Heart
            className="text-[5rem] stroke-[#ff0000] mt-[0.3rem] hover:scale-[1.16] duration-300"
            size={40}
            onClick={(e) => {
              if (!isLoved) {
                e.currentTarget.style.fill = "red";
                setIsLoved(true);
                setLoveCount(loveCount+1);
              } else {
                e.currentTarget.style.fill = "transparent";
                setIsLoved(false);
                setLoveCount(loveCount-1);
              }
            }}
          />
          <p className="text-gray-400 text-[2rem]">{loveCount}</p>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
