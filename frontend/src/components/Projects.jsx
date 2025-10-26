import Navbar from "./Navbar";
import simonSays from "../assets/simonSays.png";
import todoList from "../assets/todolist.png";
import nitrConfessions from "../assets/nitrConfessions.png";
import elimics from "../assets/elimics.png"

function Projects() {
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

        <div className="flex flex-col mt-[4rem] gap-5 mb-5">
          <div className="flex gap-[2rem] mx-3 flex-col">
            <div>
              <h1 className="text-[4rem] font-bold bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient project-heading">1) Simon Says Game</h1>
              <h2 className="text-[1.3rem] max-w-[30rem] text-gray-400 italic font-semibold">
                A simple game of Simon Says made using pure HTML, CSS and
                JavaScript.
              </h2>
            </div>
            <div className="p-2 bg-purple-800 rounded-[1rem] flex flex-col items-center border-2 border-pink-700">
              <img src={simonSays} alt="" className="w-[40rem] rounded-[1rem]" />
              <div className="flex mt-2 gap-4">
                <button className="bg-pink-700 px-3 py-1 rounded-[2rem] font-semibold hover:scale-[1.05] duration-300"><a href="https://simon-says-game-basic-qrr71xxnd-ayantik-sarkars-projects.vercel.app/" target="_blank"><i className="fa-solid fa-up-right-from-square mr-1"></i>Visit</a></button>
                <button className="text-white font-semibold bg-black px-2 py-1 rounded-[2rem] hover:scale-[1.05] duration-300"><a href="https://github.com/ayantik2006/simon-says-game-basic" target="_blank"><i className="fa-brands fa-github mr-1"></i>GitHub</a></button>
              </div>
            </div>
          </div>

          <div className="flex gap-[2rem] mx-3 flex-col">
            <div>
              <h1 className="text-[4rem] font-bold bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient project-heading">2) CommitList - A todo list</h1>
              <h2 className="text-[1.3rem] max-w-[30rem] text-gray-400 italic font-semibold">
                Users can create account and log in to their respective accounts, then they can create todo tasks, if needed they can edit them too(shows the date and time of last edit). They can mark the task as "done" and delete it if not needed
              </h2>
            </div>
            <div className="p-2 bg-purple-800 rounded-[1rem] flex flex-col items-center border-2 border-pink-700">
              <img src={todoList} alt="" className="w-[40rem] rounded-[1rem]" />
              <div className="flex mt-2 gap-4">
                <button className="bg-pink-700 px-3 py-1 rounded-[2rem] font-semibold hover:scale-[1.05] duration-300"><a href="https://commitlist-a-todo-list-project.onrender.com/" target="_blank"><i className="fa-solid fa-up-right-from-square mr-1"></i>Visit</a></button>
                <button className="text-white font-semibold bg-black px-2 py-1 rounded-[2rem] hover:scale-[1.05] duration-300"><a href="https://github.com/ayantik2006/CommitList-A-todo-list-project" target="_blank"><i className="fa-brands fa-github mr-1"></i>GitHub</a></button>
              </div>
            </div>
          </div>

          <div className="flex gap-[2rem] mx-3 flex-col">
            <div>
              <h1 className="text-[4rem] font-bold bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient project-heading">3) NITR Confessions</h1>
              <h2 className="text-[1.3rem] max-w-[30rem] text-gray-400 italic font-semibold">
                A fun website for the students of NIT Rourkela. Here the students can log in anonymously and share anything without hesitation. Other students can react and comments on them too.
              </h2>
            </div>
            <div className="p-2 bg-purple-800 rounded-[1rem] flex flex-col items-center border-2 border-pink-700">
              <img src={nitrConfessions} alt="" className="w-[40rem] rounded-[1rem]" />
              <div className="flex mt-2 gap-4">
                <button className="bg-pink-700 px-3 py-1 rounded-[2rem] font-semibold hover:scale-[1.05] duration-300"><a href="https://nitrconfessions.fun/" target="_blank"><i className="fa-solid fa-up-right-from-square mr-1"></i>Visit</a></button>
                <button className="text-white font-semibold bg-black px-2 py-1 rounded-[2rem] hover:scale-[1.05] duration-300"><a href="https://github.com/ayantik2006/NITR-Confessions" target="_blank"><i className="fa-brands fa-github mr-1"></i>GitHub</a></button>
              </div>
            </div>
          </div>  

          <div className="flex gap-[2rem] mx-3 flex-col">
            <div>
              <h1 className="text-[4rem] font-bold bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient project-heading">4) Elimics</h1>
              <h2 className="text-[1.3rem] max-w-[30rem] text-gray-400 italic font-semibold">
                This is a platform that I am collboratively developing along with Shuvam Sathapathi and Arka Pal. For now I am the solo developer and it's still under development.
              </h2>
            </div>
            <div className="p-2 bg-purple-800 rounded-[1rem] flex flex-col items-center border-2 border-pink-700">
              <img src={elimics} alt="" className="w-[40rem] rounded-[1rem]" />
              <div className="flex mt-2 gap-4">
                <button className="text-white font-semibold bg-black px-2 py-1 rounded-[2rem] hover:scale-[1.05] duration-300"><a href="https://github.com/ayantik2006/elimics" target="_blank"><i className="fa-brands fa-github mr-1"></i>GitHub</a></button>
              </div>
            </div>
          </div> 

        </div>
      </div>
    </div>
  );
}

export default Projects;
