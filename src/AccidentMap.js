import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AccidentMap = ({ data }) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <MapContainer center={[40.7128, -74.006]} zoom={12} style={{ height: "400px", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((accident, idx) => (
          <CircleMarker
            key={idx}
            center={accident.location}
            radius={10}
            fillOpacity={0.6}
            color="red"
          >
            <Popup>
              <div>
                <strong>Road:</strong> {accident.roadCondition}<br />
                <strong>Weather:</strong> {accident.weather}<br />
                <strong>Time:</strong> {accident.time}
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AccidentMap;
