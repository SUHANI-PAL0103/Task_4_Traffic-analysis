import React, { useState, useEffect } from "react";
import AccidentDashboard from "./AccidentDashboard";
import AccidentMap from "./AccidentMap";
import Header from "./Header";

const App = () => {
  const [accidentData, setAccidentData] = useState([]);

  useEffect(() => {
   
    const interval = setInterval(() => {
      const newAccident = {
        location: [
          40.7128 + (Math.random() - 0.5) * 0.2, 
          -74.006 + (Math.random() - 0.5) * 0.2
        ],
        roadCondition: ["Wet", "Dry", "Icy"][Math.floor(Math.random() * 3)],
        weather: ["Clear", "Rain", "Fog"][Math.floor(Math.random() * 3)],
        time: `${Math.floor(Math.random() * 24)}:00`
      };
      
      setAccidentData(prevData => [...prevData, newAccident]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <Header />
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
        {accidentData.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#555" }}>⏳ Loading accident data...</p>
        ) : (
          <>
            <AccidentMap data={accidentData} />
            <AccidentDashboard data={accidentData} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
