import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
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

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient font-bold text-[3rem]" id="connect-heading">
            <h1 >Let's Connect</h1>
            <Typewriter
              words={["..."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={160}
              delaySpeed={100}
              deleteSpeed={160}
            />
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch(import.meta.env.VITE_BACKEND_URL + "/contact-me", {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: e.currentTarget[1].value,
                name: e.currentTarget[0].value,
                msg: e.currentTarget[2].value,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                toast.success("Message has been sent!", {
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          className="mt-8 flex flex-col gap-4"
        >
          <input
            type="text"
            className="border-2 border-gray-700 outline-none text-gray-400 h-[2.4rem] px-2 w-[30rem] contact-input"
            placeholder="Your name"
            required
          />
          <input
            type="text"
            className="border-2 border-gray-700 outline-none text-gray-400 h-[2.4rem] px-2 w-[30rem] contact-input"
            placeholder="Your email"
            required
          />
          <textarea
            className="border-2 border-gray-700 outline-none text-gray-400 min-h-[10rem] p-2 contact-input"
            placeholder="You message"
            required
          ></textarea>
          <button className="bg-linear-65 from-purple-500 to-pink-500 py-1 rounded-[1.2rem] text-[1.2rem] font-semibold hover:scale-[1.02] duration-300 animate-gradient">
            Send message
          </button>
        </form>

        <h2 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient mt-[0.6rem] font-bold text-[2rem]">Other Links</h2>
        <div className="flex gap-8 mt-3">
          <div>
            <a href="https://www.linkedin.com/in/ayantiksarkar/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="w-[3rem] hover:scale-[1.1] duration-200" /></a>
          </div>
          <div className="bg-white rounded">
            <a href="https://github.com/ayantik2006/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-[3rem] hover:scale-[1.08] duration-200" /></a>
          </div>
          <div className="rounded">
            <a href="https://leetcode.com/u/ayantiksarkar/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" className="w-[3rem] hover:scale-[1.1] duration-200" /></a>
          </div>
          <div className="rounded">
            <a href="https://www.instagram.com/ayantik.sarkar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVWPUScCjZkmHdXQXLdWO2PjFfXwflb2l_Q&s" className="w-[3rem] hover:scale-[1.1] rounded duration-200" /></a>
          </div>
        </div>

        <div className="flex flex-col mt-5 mb-5 gap-2 items-center">
          <p className="flex items-center text-gray-400 text-[1.1rem] italic font-semibold hover:text-pink-600"><i className="fa-solid fa-envelope mt-[0.2rem]"></i>&nbsp;ayantik.sarkar2020@gmail.com</p>
          <p className="flex items-center text-gray-400 text-[1.1rem] italic font-semibold hover:text-pink-600"><i className="fa-solid fa-phone mt-[0rem]"></i>&nbsp;7595882545</p>
        </div>

      </div>
    </div>
  );
}

export default Contact;
