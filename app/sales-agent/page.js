"use client";
import { useSearchParams } from "next/navigation";
import "@livekit/components-styles";
import LiveKitVideo from "../components/LiveKitVideo";

export default function SalesAgentPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const room = searchParams.get("room");

  if (!name || !room) {
    return <div style={{height: "100vh", display:"flex", justifyContent: "center", alignItems: "center",color: "#efeeec", textAlign: "center"}}>Error: Missing user details.</div>
  }

  return (
    <div className="salesAgentContainer">
      <h1>Sales Agent - {name}</h1>
      <LiveKitVideo room={room} name={name} />
    </div>
  );
}
