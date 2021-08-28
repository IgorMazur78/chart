import React from "react";
import { Bar } from "react-chartjs-2";
import useChartData from "../hooks/useChartData";
import ConversionToPDF from "../hooks/conversionToPDF"

export default function PlotBarChart({ state }) {
  const { chartData } = useChartData(state);
  return (
    <div>
      {/* {console.log('chartData', chartData)} */}
      <h4>Bar</h4>
      <ConversionToPDF/>
      <div id = "divToPrint" style={{ height: "500px", width: "500px" }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
}
