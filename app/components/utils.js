export const convertToIST = (utcTime) => {
  const date = new Date(utcTime);
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(date.getTime() + istOffset);

  return istTime.toISOString();
};

export const EmptyState = ({ error }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#efeeec",
        textAlign: "center",
      }}
    >
      {error}
    </div>
  );
};

export const apiKey = "APIGc8Sg5RmH99m";
export const apiSecret = "x3KMpg2QlwyPGse2C7Y7ZizmAAzeaTS2Tddzt6dumfKB";
export const wsUrl = "wss://osmo-clone-wz33hjof.livekit.cloud";
