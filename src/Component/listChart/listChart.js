import React from 'react';

export default function ListChart({line,bar,donut,pie}) {
 
  return (
    <div>
      <button onClick = {()=>line()}>Line Chart</button>
      <button onClick = {()=>bar()}>Bar Chart</button>
      <button onClick = {()=>donut()}>Donut Chart</button>
      <button onClick = {()=>pie()}>Pie Chart</button>
    </div>
  )
}

