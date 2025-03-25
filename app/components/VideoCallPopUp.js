"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const VideoCallPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const router = useRouter();

  const handleJoin = () => {
    if (!name || !room) {
      alert("Please enter both name and room name.");
      return;
    }
    router.push(`/sales-agent?name=${encodeURIComponent(name)}&room=${encodeURIComponent(room)}`);
  };

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <div className="closeBtn"><button onClick={onClose}>X</button></div>
        <h2>Join a Video Call</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Enter room name"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className="input"
        />
        <button className="startBtn" onClick={handleJoin}>Get Started</button>
      </div>
    </div>
  );
};

export default VideoCallPopup;
