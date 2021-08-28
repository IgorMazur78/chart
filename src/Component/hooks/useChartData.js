import { useState, useEffect, useMemo } from "react";
import { chartColors } from "../Colors/colors";

function useChartData(state) {
  const [chartData, setChartData] = useState({});
  const [arrayScaleX, setarrayScaleX] = useState([]);
  const [arrayScaleY, setarrayScaleY] = useState([]);

  const dataState = useMemo(
    () => state.filter((item, index) => index !== 0),
    [state]
  );

  const timeLabel = useMemo(() => dataState.map((item) => item[0]),[dataState] );
  useEffect(() => {
    setarrayScaleX(timeLabel);
  }, [state, timeLabel]);

  const valueLabel = useMemo(() => dataState.map((item) => item[1]), [dataState]);
  useEffect(() => {
    setarrayScaleY(valueLabel);
  }, [state, valueLabel]);  

  useEffect(() => {
    setChartData({
      labels: arrayScaleX,
      datasets: [
        {
          label: "Bar Chart",
          data: arrayScaleY,
          fill: false,
          backgroundColor: chartColors,
          borderColor: ["rgba(75,192,192,1)"],
        
        },
      ],
    });
  }, [state, arrayScaleX, arrayScaleY]);
  return {
    chartData,
  };
}

export default useChartData;
