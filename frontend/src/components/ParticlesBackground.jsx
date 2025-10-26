import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      options={{
        fullScreen: { enable: false },
        background: { color: "#0f0f0f" }, // dark background for neon effect
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            bubble: { distance: 150, size: 8, duration: 2, opacity: 0.8, color: "#00ffff" },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          number: { value: 70, density: { enable: true, area: 800 } },
          color: { value: ["#00ffff", "#ff00ff", "#ff9900"] },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: { enable: true, minimumValue: 0.3 }, anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
          size: { value: 3, random: { enable: true, minimumValue: 1 } },
          links: { enable: true, distance: 120, color: "#00ffff", opacity: 0.3, width: 1 },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
