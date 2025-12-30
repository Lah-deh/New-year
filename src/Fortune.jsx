import { useState } from "react";

export default function Fortune() {
  const [name, setName] = useState("");
  const [fortune, setFortune] = useState("");

  const fortunes = [
    "You will learn faster than expected.",
    "This year brings you new opportunities.",
    "A project you start will open big doors.",
    "Someone important will notice your work.",
    "This year will favor your growth journey.",
    "Your consistency will reward you.",
    "Expect a surprise win soon.",
    "Joy and progress will follow your steps.",
    "You will write cleaner code than ever.",
    "Great things are forming for you."
  ];

  const generateFortune = () => {
    if(!name.trim()){
      setFortune("Enter your name to receive your 2026 blessing");
      return;
    }
    const random = Math.floor(Math.random() * fortunes.length);
    setFortune(`${name}, ${fortunes[random]}`);
  };

  return (
    <div className="card">
      <h3>2026 Fortune</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginTop:"10px",
          borderRadius: "6px",
          border: "none",
          outline: "none",
          background: "rgba(255,255,255,0.15)",
          color:"white",
        }}
      />

      <button
        onClick={generateFortune}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          borderRadius: "6px",
          border:"none",
          background:"#3d35c8",
          color:"white",
          cursor:"pointer",
          fontSize:"14px"
        }}
      >
        Reveal fortune
      </button>

      {fortune && (
        <p style={{marginTop:"12px", fontSize:"14px", lineHeight:"20px"}}>
          {fortune}
        </p>
      )}
    </div>
  );
}
