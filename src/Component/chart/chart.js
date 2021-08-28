import React from "react";
import { Line } from "react-chartjs-2";
import useChartData from "../hooks/useChartData";
import ConversionToPDF from "../hooks/conversionToPDF"


export default function PlotChart({ state }) {
  const { chartData} = useChartData(state)


  return (
   
      <div >
        <h4>Line</h4>
        <ConversionToPDF/>
        <div id = "divToPrint" style = {{height:"500px",width:"500px"}}>
        <Line data={chartData} />

        </div>
      
      </div>
   
  );
}
