import React  from "react";
import { Pie } from "react-chartjs-2";
import useChartData from "../hooks/useChartData";
import ConversionToPDF from "../hooks/conversionToPDF";



export default function PlotChartDonut({ state }) {
  
  const { chartData} = useChartData(state)
  
  
    return (
     
        <div >
          <h4>Pie</h4>
          <ConversionToPDF/>
          <div id = "divToPrint" style = {{height:"500px",width:"500px"}}>
          <Pie data={chartData} />
  
          </div>
        
        </div>
     
    );
  }