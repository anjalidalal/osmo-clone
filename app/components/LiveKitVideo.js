"use client";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EmptyState, wsUrl } from "./utils";

const LiveKitVideo = ({ room, name }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [redirecting, setRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (!room || !name) {
      setError("Room or name is missing!");
      return;
    }

    const fetchToken = async () => {
      try {
        const res = await fetch(`/api/token?room=${room}&username=${name}`);
        if (!res.ok) throw new Error(`Token fetch failed: ${res.statusText}`);
        const data = await res.json();
        if (!data.token) throw new Error("Invalid token received");
        setToken(data.token);
      } catch (err) {
        console.error("Error fetching token:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, [room, name]);

  useEffect(() => {
    if (redirecting) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        router.push("/");
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [redirecting, router]);

  if (loading) return <EmptyState error="Loading...." />;
  if (error) return <EmptyState error={`Error: ${error}`} />;
  if (!token) return <EmptyState error="Failed to get token" />;

  return (
    <LiveKitRoom
      serverUrl={wsUrl}
      token={token}
      connect={true}
      onDisconnected={() => {
        setRedirecting(true);
      }}
    >
      {redirecting && (
        <p className="redirect-message">
          Redirecting to home page in....{countdown}
        </p>
      )}
      <VideoConference />
    </LiveKitRoom>
  );
};

export default LiveKitVideo;
