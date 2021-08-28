import React from "react";
import { Doughnut } from "react-chartjs-2";
import useChartData from "../hooks/useChartData";
import ConversionToPDF from "../hooks/conversionToPDF"


export default function PlotChartDonut({ state }) {
    const {chartData} = useChartData(state)
    return (
     
        <div >
          <h4>Donut</h4>
       <ConversionToPDF/>
          <div id = "divToPrint" style = {{height:"500px",width:"500px"}}>
          <Doughnut data={chartData} />
  
          </div>
        
        </div>
     
    );
  }