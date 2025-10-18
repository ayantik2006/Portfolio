import { useState } from "react";
import dp from "../assets/dp.png";
import simonSays from "../assets/simonSays.png";
import todolist from "../assets/todolist.png";
import elimics from "../assets/elimics.png";

function MainScreen() {
  const [msgSendSuccess, setMsgSendSuccess] = useState(false);
  let backendURL = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="min-w-screen min-h-screen bg-black flex-col items-center justify-center gap-5 scroll-smooth">
      <nav className="w-full h-[4rem] bg-gray-400 fixed top-0 flex gap-7 items-center justify-center border-b-4 border-b-white z-20">
        <a
          href="#about-me"
          className="font-semibold text-[1.1rem] hover:bg-black hover:text-gray-400 p-1 rounded duration-300 underline hover:no-underline"
        >
          About
        </a>
        <a
          href="#my-skills"
          className="font-semibold text-[1.1rem] hover:bg-black hover:text-gray-400 p-1 rounded duration-300 underline hover:no-underline"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="font-semibold text-[1.1rem] hover:bg-black hover:text-gray-400 p-1 rounded duration-300 underline hover:no-underline"
        >
          Projects
        </a>
        <a
          href="#contact-me"
          className="font-semibold text-[1.1rem] hover:bg-black hover:text-gray-400 p-1 rounded duration-300 underline hover:no-underline"
        >
          Contact
        </a>
      </nav>
      <div className="flex flex-col items-center gap-[4rem] mt-[-4.5rem]">
        <div
          className="max-w-fit mx-[2rem] h-fit py-5 pr-5 bg-gray-400 mt-[10rem] rounded-lg flex gap-3 items-center hover:shadow-[0_0_15px_white] duration-300 border-4 border-white"
          id="about-me"
        >
          <img
            src={dp}
            alt="dp"
            className="w-[10rem] h-[10rem] rounded-full border-4 ml-5"
          />
          <div className="flex justify-center flex-col flex-wrap">
            <pre className="mb-[-0.5rem]text-[2rem]">
              const <b>About</b> = {"{"}
            </pre>
            <h1 className="font-bold text-[2rem] flex hover:bg-black hover:text-gray-400 w-fit">
              <pre>name:</pre>"Ayantik Sarkar",
            </h1>
            <pre className="font-semibold whitespace-pre-wrap break-words overflow-auto hover:bg-black hover:text-gray-400 w-fit">
              Institution: "National Institute of Technology, Rourkela
              (2025-Present)",
            </pre>
            <pre className="whitespace-pre-wrap break-words overflow-auto hover:bg-black hover:text-gray-400 w-fit">
              Skills: ["MongoDB", "ExpressJS", "NodeJS", "ReactJS",
              "tailwindcss", "MySQL", "Git & GitHub"],
            </pre>
            <pre className="whitespace-pre-wrap break-words overflow-auto hover:bg-black hover:text-gray-400 w-fit">
              Aspiration: "SDE roles in top companies",
            </pre>
            <pre className="whitespace-pre-wrap break-words overflow-auto hover:bg-black hover:text-gray-400 w-fit">
              Qualities: ["Constant learning attitude", "Not giving up on
              something"]
            </pre>
            <pre className="whitespace-pre-wrap break-words overflow-auto hover:bg-black hover:text-gray-400 w-fit">
              Education: {"{"}ClassX:"St. Xavier's School, Durgapur(2012-2023)",
              ClassXII:"Hem Sheela Model School(2023-25)"{"}"}
            </pre>
            {"}"}
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-5 mx-5"
          id="my-skills"
        >
          <pre className="text-gray-400 font-bold text-[2rem]">
            🛠️ My Skills!
          </pre>
          <div className="flex flex-wrap gap-[3rem] items-center justify-center">
            <div className="text-gray-400 text-[6rem] mr-[-3rem]">
              {"<"}
            </div>
            <div>
              <img
                src="https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
                alt="mongo"
                className="w-[5rem] hover:scale-[1.1] duration-300"
              />
            </div>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4"
                alt="mongo"
                className="w-[5rem] hover:scale-[1.1] duration-300"
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s"
                alt="mongo"
                className="w-[5rem] hover:scale-[1.1] duration-300 rounded-[1.2rem]"
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTokZliYkKkA5G-4WfbuaNpKj5f9PYnTUPLA&s"
                alt="mongo"
                className="w-[5rem] hover:scale-[1.1] duration-300"
              />
            </div>
            <div>
              <img
                src="https://www.pngfind.com/pngs/m/683-6833893_node-js-logo-png-transparent-png.png"
                alt="mongo"
                className="w-[5rem] hover:scale-[1.1] duration-300 rounded-[1rem]"
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaGtuyxK-7RCpyNV5zBiz67YxTar0_d6NfQ&s"
                alt="mongo"
                className="w-[5rem] hover:scale-[1.1] duration-300 rounded-[1rem]"
              />
            </div>
            <div>
              <img
                src="https://images.icon-icons.com/1381/PNG/512/mysqlworkbench_93532.png"
                alt="mongo"
                className="w-[5rem] hover:scale-[1.1] duration-300"
              />
            </div>
            <div>
              <img
                src="https://gitforwindows.org/img/git_logo.png"
                alt="mongo"
                className="w-[5rem] hover:scale-[1.1] duration-300"
              />
            </div>
            <div>
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="mongo"
                className="w-[5rem] hover:scale-[1.1] duration-300 rounded-[1rem]"
              />
            </div>
            <div className="text-gray-400 text-[6rem] ml-[-2rem]">
              {"/>"}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          <pre className="text-gray-400 text-[2rem] font-bold" id="projects">
            Projects
          </pre>
          <div className="flex flex-wrap gap-[2rem] mt-6 justify-center">
            <div className="w-[15rem] h-fit bg-gray-400 rounded-2xl border-3 border-white flex flex-col justify-center items-center hover:scale-[1.04] duration-300">
              <h1 className="p-2 text-[1.3rem] font-bold">
                Simon Says
              </h1>
              <img src={simonSays} alt="" className="" />
              <p className="p-2 text-center font-semibold">
                This is a simple Simon Says game using pure HTML, CSS and
                JavaScript
              </p>
              <div className="p-2 flex items-center justify-center gap-3">
                <button className="bg-black px-2 py-1 rounded-lg text-gray-400 cursor-pointer">
                  <a
                    href="https://simon-says-game-basic-qrr71xxnd-ayantik-sarkars-projects.vercel.app/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-square-arrow-up-right mr-1"></i>Show
                  </a>
                </button>
                <button className="bg-black px-2 py-1 rounded-lg text-gray-400 cursor-pointer">
                  <a
                    href="https://github.com/ayantik2006/simon-says-game-basic"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github mr-1"></i>GitHub
                  </a>
                </button>
              </div>
            </div>
            <div className="w-[18rem] h-fit bg-gray-400 rounded-2xl border-3 border-white flex flex-col items-center hover:scale-[1.04] duration-300">
              <h1 className="p-2 text-[1.3rem] font-bold">
                CommitList
              </h1>
              <img src={todolist} alt="" className="" />
              <p className="p-2 text-center font-semibold">
                A todo list maker which includes authentication(login/signup)
                for the user and features like add, edit and delete todo item,
                shows last edited time and "task done" checkmark
              </p>
              <div className="p-2 flex items-center justify-center gap-3 ">
                <button className="bg-black px-2 py-1 rounded-lg text-gray-400 cursor-pointer">
                  <a
                    href="https://commitlist-a-todo-list-project.onrender.com/"
                    target="_blank"
                  >
                    <i class="fa-solid fa-square-arrow-up-right mr-1"></i>Show
                  </a>
                </button>
                <button className="bg-black px-2 py-1 rounded-lg text-gray-400 cursor-pointer">
                  <a
                    href="https://github.com/ayantik2006/CommitList-A-todo-list-project"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github mr-1"></i>GitHub
                  </a>
                </button>
              </div>
            </div>
            <div className="w-[15rem] h-fit bg-gray-400 rounded-2xl border-3 border-white flex flex-col items-center hover:scale-[1.04] duration-300">
              <h1 className="p-2 text-[1.3rem] font-bold">
                Elimics
              </h1>
              <img src={elimics} alt="" className="" />
              <p className="p-2 text-center font-semibold">
                This is a platform that I am collboratively developing along
                with Shuvam Sathapathi and Arka Pal. For now I am the solo
                developer and it's still under development
              </p>
              <div className="p-2 flex items-center justify-center gap-3">
                <button className="bg-black px-2 py-1 rounded-lg text-gray-400 cursor-pointer">
                  <a
                    href="https://github.com/ayantik2006/elimics"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github mr-1"></i>GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center mb-[3rem]"
          id="contact-me"
        >
          <pre className="text-gray-400 text-[2rem] font-bold">Contact Me</pre>
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              fetch(backendURL + "/contact-me", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: e.currentTarget[0].value,
                  name: e.currentTarget[1].value,
                  msg: e.currentTarget[2].value,
                }),
              })
                .then((res) => res.json())
                .then((res) => {})
                .catch((err) => {
                  console.log(err);
                });
              setMsgSendSuccess(true);
              setTimeout(() => {
                setMsgSendSuccess(false);
              }, 4000);
            }}
          >
            <input
              type="email"
              className="mt-4 border-gray-400 border-2 w-[22rem] h-[2.4rem] rounded-lg font-consolas text-gray-400 px-3 placeholder:text-[1.1rem] "
              placeholder="Your email please"
              required
            />
            <input
              type="text"
              className="mb-5 mt-4 border-gray-400 border-2 w-[22rem] h-[2.4rem] rounded-lg font-consolas text-gray-400 px-3 placeholder:text-[1.1rem]"
              placeholder="Your name please"
              required
            />
            <textarea
              required
              className="border-2 border-gray-400 rounded-lg min-h-[15rem] text-gray-400 p-3 placeholder:text-[1.1rem]"
              placeholder="Your message"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-400 mt-3 rounded-lg font-consolas h-[2.3rem] font-bold cursor-pointer"
            >
              git commit -m your message
            </button>
            {msgSendSuccess && (
              <div className="text-gray-400 mx-auto mt-5">
                <pre>Everything up-to-date...message pushed!</pre>
              </div>
            )}
          </form>
        </div>
        <div className="flex gap-10 mt-[-4rem] mb-[6rem] flex-wrap">
          <a href="https://www.linkedin.com/in/ayantiksarkar" target="_blank">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvuXtVHdB9NTADnUBivfunVmFaPFGdlZuBmg&s"
              alt="linkedin"
              className="rounded-full w-[4rem] cursor-pointer socials"
            />
          </a>
          <a href="https://github.com/ayantik2006" target="_blank">
            <img
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt="linkedin"
              className="rounded-full w-[4rem] cursor-pointer socials"
            />
          </a>
          <a href="https://leetcode.com/u/ayantiksarkar/" target="_blank">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-svg-download-png-3031539.png"
              alt="linkedin"
              className="rounded-full w-[4rem] cursor-pointer socials"
            />
          </a>
          <a href="https://www.instagram.com/ayantik.sarkar" target="_blank">
            <img
              src="https://thumbs.dreamstime.com/b/square-instagram-logo-isolated-white-background-transparent-attached-png-format-311465109.jpg"
              alt="linkedin"
              className="rounded-[1rem] w-[4rem] cursor-pointer socials"
            />
          </a>
        </div>
      </div>
      <footer className="w-full h-[3rem] bg-gray-400 bottom-0 fixed flex justify-center items-center border-t-4 border-white">
        <pre>Made with ❤️ by Ayantik</pre>
      </footer>
    </div>
  );
}

export default MainScreen;
