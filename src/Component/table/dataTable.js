import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";

export default function Table({ state }) {
  console.log("state in dataTable", state);
  const uuid = uuid4();

  const [data, setDataForm] = useState(" ");
  const [value, setValue] = useState(" ");
  console.log("value", value);
  console.log("data", data);

  return (
    <div>
      <ul>
        {state.map((item) => (
          <li key={`${item}+${uuid}`}>
            <span>{item}</span>
            <button>edit</button>
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
