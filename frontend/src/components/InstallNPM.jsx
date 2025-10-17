import { useRef, useState } from "react";
import MainScreen from "./MainScreen";
export default function InstallNPM() {
  const [isMainScreenVisible, setIsMainScreenVisible] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [outputMsg, setOutputMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const PSinput = useRef();

  return (
    <div
      className="w-screen min-h-screen bg-black flex flex-col items-center justify-center gap-3 selection:bg-gray-400 selection:text-black"
    >
      {isMainScreenVisible && (
        <>
          <div className="text-gray-400 font-semibold text-[1.4rem] mx-5">
            <pre className="text-wrap">
              You need to install the package ayantik-portfolio before
              continuing :)
            </pre>
          </div>

          <div className="text-gray-400 flex gap-3 items-center justify-center">
            <pre>npm i ayantik-portfolio</pre>
            <div>
              <i
                className="fa-solid fa-copy text-gray-400 cursor-pointer"
                onClick={(e) => {
                  if (e.target.classList.contains("fa-copy")) {
                    navigator.clipboard.writeText("npm i ayantik-portfolio");
                    e.target.classList.remove("fa-copy");
                    e.target.classList.add("fa-check");
                    setTimeout(() => {
                      e.target.classList.remove("fa-check");
                      e.target.classList.add("fa-copy");
                    }, 2000);
                  }
                }}
              ></i>
            </div>
          </div>

          <div className="text-gray-400 mb-[-2rem] text-[2rem] font-bold">
            Ayantik's PowerShell
          </div>

          <form
            className="flex mt-10 border-2 border-gray-400 p-2"
            onSubmit={(e) => {
              e.preventDefault();
              const val = e.currentTarget[0].value.trim().toLowerCase();
              if (val !== "npm i ayantik-portfolio" && val !== "") {
                setErrorMsg(
                  `${val} : The term '${val}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.`
                );
                setTimeout(() => {
                  setErrorMsg("");
                }, 3000);
              } else if (val === "npm i ayantik-portfolio") {
                setIsLoading(true);
                setErrorMsg("");
                PSinput.current.disabled = true;

                setTimeout(() => {
                  setIsLoading(false);
                  setOutputMsg(
                    "added 2 packages, and audited 175 packages in 1s\n35 packages are looking for funding\nrun `npm fund` for details\n\n"
                  );
                }, 3000);
                setShowMainScreen(true);
              }
            }}
          >
            <label
              htmlFor="npm-install-ayantik"
              className="text-gray-400 relative"
            >
              <pre>AS C:\Users\Ayantik Sarkar&gt;</pre>
            </label>
            <input
              type="text"
              ref={PSinput}
              className="text-gray-400 w-fit outline-none font-mono bg-transparent"
              id="npm-install-ayantik"
              spellCheck={false}
              autoFocus={true}
              onContextMenu={(e) => {
                e.preventDefault();
                navigator.clipboard
                  .readText()
                  .then((text) => {
                    e.target.value = text;
                  })
                  .catch((err) => {
                    console.error("Failed to read clipboard:", err);
                  });
              }}
            />
            <button className="text-gray-400 ml-6 cursor-pointer hover:underline">
              Install
            </button>
          </form>

          {/* Loader or output */}
          <div className="text-red-600 mx-20">{errorMsg}</div>
          {isLoading ? (
            <div className="text-gray-400 flex items-center gap-2 mt-4">
              <div className="w-4 h-4 border-2 border-t-transparent border-gray-400 rounded-full animate-spin"></div>
              <span>Installing ayantik-portfolio...</span>
            </div>
          ) : (
            <div className="text-gray-400 whitespace-pre-line text-center">
                {outputMsg}
                {(outputMsg!=="")&&<button className="bg-gray-400 text-black px-5 py-2 font-semibold rounded cursor-pointer" onClick={()=>{
                    setIsMainScreenVisible(false)
                }}>
                    Continue
                </button>}
            </div>
          )}
        </>
      )}
      {!isMainScreenVisible && <MainScreen/>}
    </div>
  );
}
