import React from "react";


const Button  = ({onClick, label}) => {
return (
<>
<button className = "typesOfCharts" onClick={onClick}>{label}</button>
</>
)
}
export default Button;