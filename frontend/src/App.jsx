import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import About from "./components/About";
import Skills from "./components/Skills";
import ParticlesBackground from "./components/ParticlesBackground";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <ParticlesBackground />
      <AnimatedCursor
        innerSize={6}
        outerSize={30}
        color="255, 0, 255"
        outerAlpha={0.25}
        innerScale={0.8}
        outerScale={1.8}
        outerStyle={{
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // triangle pointer
          backgroundColor: "magenta",
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
