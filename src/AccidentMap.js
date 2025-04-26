import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AccidentMap = ({ data }) => {
  return (
    <MapContainer center={[40.7128, -74.006]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((accident, idx) => (
        <CircleMarker
          key={idx}
          center={accident.location}
          radius={10}
          fillOpacity={0.5}
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
  );
};

export default AccidentMap;
