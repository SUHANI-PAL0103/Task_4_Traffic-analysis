import React from "react";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#4CAF50", padding: "1rem 0", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h1 style={{ margin: 0, color: "#fff", fontSize: "2rem", fontWeight: "bold" }}>
        🚦 Task 4: Real-Time Accident Dashboard
      </h1>
      <p style={{ color: "#e0f7e9", marginTop: "0.5rem", fontSize: "1.1rem" }}>
        Live Tracking of Road Accidents 📈
      </p>
    </header>
  );
};

export default Header;
