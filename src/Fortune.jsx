import { useState } from "react";

export default function Fortune() {
  const [name, setName] = useState("");
  const [fortune, setFortune] = useState("");

  const fortunes = [
    "2026 will stress you small 😂",
    "You'll buy a macbook in 2026",
    "Your girlfriend will break your heart😢",
    "You'll land an international gig",
    "You'll have a lot of bugs😂",
    "You will get to 1M followers on X",
    "Expect a surprise win soon",
    "You'll get cheeated on",
    "You will be favoured",
    "Great things are forming for you",
    "You will be consistent this year",
    "Money will locate you",
    "Your favourite celebrity will reply you",
    "You will travel out of the country",
    "You will meet someone special",
    "Your project will go viral",
    "You will be dragged online",
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
