import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import useChartData from "../hooks/useChartData";
import ConversionToPDF from "../hooks/conversionToPDF"

export default function MyChart({ state, type}) {
  const { chartData } = useChartData(state);
  
  return (
    <div>
      {!type ? <h4>Line</h4> : <h4>{type}</h4>}
      
      <ConversionToPDF/>
      <div id = "divToPrint" style={{ height: "500px", width: "500px" }}>
     {type === null && <Line data={chartData}/>}
     {type === "line" && <Line data={chartData}/>}
     {type === "bar" && <Bar data={chartData}/>}
     {type === "donut" && <Doughnut data={chartData}/>}
     {type === "pie" && <Pie data={chartData}/>}
      </div>
    </div>
  );
}
