import { useState } from "react";

export default function Spin() {
  const [result, setResult] = useState("");
  const [spinning, setSpinning] = useState(false);

  const spinOptions = [
    "Big wins ahead 😍",
    "A surprise gift is coming your way",
    "You will get a promotion",
    "Expect a  surprise",
    "Time to take a break, you earned it",
    "Collaboration will bring success",
    "Your ideas will shine this year",
    "A big opportunity is coming 😘",
    "your next project will be a hit",
    "Your skin will glow this year",
    "You will find love soon",

  ];

  const handleSpin = () => {
    if (spinning) return; 
    setSpinning(true);
    setResult("");

    
    const spinTime = 1500; 
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * spinOptions.length);
      setResult(spinOptions[randomIndex]);
      setSpinning(false);
    }, spinTime);
  };

  return (
    <div className="card">
      <h3>Spin 2026 Wheel</h3>
      <button
        onClick={handleSpin}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          background: spinning ? "#888" : "#3d35c8",
          color: "white",
          cursor: spinning ? "not-allowed" : "pointer",
          fontSize: "14px",
        }}
        disabled={spinning}
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>

      {result && (
        <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: "20px" }}>
          {result}
        </p>
      )}
    </div>
  );
}
