"use client";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import { useEffect, useState } from "react";

const LIVEKIT_URL = "wss://osmo-clone-wz33hjof.livekit.cloud";

const LiveKitVideo = ({ room, name }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch(`/api/token?room=${room}&username=${name}`)
      .then((res) => res.json())
      .then((data) => setToken(data.token));
  }, [room, name]);

  if (!token) return <p>Loading...</p>;

  return (
    <LiveKitRoom serverUrl={LIVEKIT_URL} token={token} connect={true}>
      <VideoConference />
    </LiveKitRoom>
  );
};

export default LiveKitVideo;
