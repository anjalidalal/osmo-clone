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
