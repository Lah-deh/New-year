import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import "./App.css";
import Music from '/happy-new-year-music-457512.mp3';
import Spin from './Spin.jsx';
import Fortune from './Fortune.jsx';
import Tax from './Tax.jsx';
import { Helmet } from "react-helmet-async";

function App() {
  const [fireworks, setFireworks] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const audioRef = useRef(null);

  const FIREWORK_DURATION = 10000; 
  const FADE_DURATION = 3000; 

  const circles = Array.from({ length: 30 });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const fadeOutMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    let volume = 1;
    const fadeStep = 0.02;

    const fadeInterval = setInterval(() => {
      if (!audio) return;

      volume -= fadeStep;
      if (volume > 0) {
        audio.volume = volume;
      } else {
        clearInterval(fadeInterval);
        audio.pause();
        audio.currentTime = 0;
      }
    }, 100);
  };

  const handleCelebrate = () => {
    setFireworks(true);
    setCelebrate(true);

    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.play();
    }

    setTimeout(fadeOutMusic, FIREWORK_DURATION - FADE_DURATION);
    setTimeout(() => setFireworks(false), FIREWORK_DURATION);
  };

  return (
    <div className="App">

      {fireworks && <Confetti width={dimensions.width} height={dimensions.height} />}

      <audio ref={audioRef} src={Music} preload="auto" />

      {circles.map((_, i) => {
        const startY = `${Math.random() * 100}vh`;
        const scale = Math.random() * 0.6 + 0.4;
        const opacityStart = Math.random() * 0.5 + 0.3;
        const duration = Math.random() * 6 + 6;

        return (
          <span
            key={i}
            className="circle"
            style={{
              left: `${Math.random() * 100}%`,
              "--startY": startY,
              "--scale": scale,
              "--opacityStart": opacityStart,
              animationDuration: `${duration}s`,
              width: `${scale * 6}px`,
              height: `${scale * 6}px`,
            }}
          />
        );
      })}

      <div className={`content ${celebrate ? "slide-up" : ""}`}>

        <h1 >Happy New Year 2026</h1>
        <p style={{ marginTop: "3%", marginBottom: "3%" }}>
          Wishing you more codes, more wins and more soft life
        </p>

        <button className="but"
          onClick={handleCelebrate}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(45deg, #2031c9ff, #281eb7ff)",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(65, 48, 200, 0.4)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Tap to celebrate 🎉
        </button>

        <div className="cards">
          <Fortune />
          <Spin />
          <Tax />
        </div>

        <footer className="footer" style={{ marginTop: "10%" }}>
          © 2026 Tifeh. All rights reserved.
        </footer>

      </div>

    </div>
  );
}

export default App;
