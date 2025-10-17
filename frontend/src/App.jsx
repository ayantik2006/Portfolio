import StartPage from "./components/StartPage";
import InstallNPM from "./components/InstallNPM";
import { useEffect, useState } from "react";

function App() {
  const [screenLoading, setScreenLoading] = useState(true);
  const [NPMinstall,setNPMinstall]=useState(false)
  useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
      setNPMinstall(true)
    }, 4000);
  }, []);

  return <>{screenLoading && <StartPage />}
  {NPMinstall && <InstallNPM/>}
  </>;
}

export default App;
