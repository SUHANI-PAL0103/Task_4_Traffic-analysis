import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const processData = (data) => {
  const stats = {};
  data.forEach(({ roadCondition, weather, time }) => {
    const hour = `${parseInt(time.split(':')[0])}:00`;
    stats[roadCondition] = (stats[roadCondition] || 0) + 1;
    stats[weather] = (stats[weather] || 0) + 1;
    stats[hour] = (stats[hour] || 0) + 1;
  });

  return Object.entries(stats).map(([key, value]) => ({ name: key, count: value }));
};

const AccidentDashboard = ({ data }) => {
  const chartData = processData(data);

  return (
    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginTop: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>
        📊 Accident Pattern Analysis
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" radius={[10, 10, 0, 0]} fill="#8884d8">
            <LabelList dataKey="count" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccidentDashboard;
