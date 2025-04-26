import React from 'react';
import './App.css';
import AccidentMap from './AccidentMap';
import AccidentDashboard from './AccidentDashboard';

const dummyData = [
  { location: [40.7128, -74.006], roadCondition: "Wet", weather: "Rain", time: "08:00" },
  { location: [40.7138, -74.005], roadCondition: "Dry", weather: "Clear", time: "17:30" },
  // Add more dummy data as needed
];

function App() {
  return (
    <div className="App">
      <nav>
        <h1>TASK 5</h1>
        <h3>Traffic Management System</h3>
      </nav>

      <main>
        <AccidentMap data={dummyData} />
        <AccidentDashboard data={dummyData} />
      </main>
    </div>
  );
}

export default App;
