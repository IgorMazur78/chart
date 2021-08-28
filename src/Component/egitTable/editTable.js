import React, { useState } from "react";

function EditTable({ addData }) {
  console.log("addData", addData);

  const [data, setData] = useState(" ");
  const [value, setValue] = useState(" ");

  const handleChangeDate = (evt) => {
    evt.preventDefault();
    setData(evt.target.value);
  };
  const handleChangeValue = (evt) => {
    evt.preventDefault();
    setValue(evt.target.value);
  };
  console.log("value", value);
  console.log("data", data);

  return (
    <div>
      <h2>form edit table</h2>
      <form onSubmit={() => addData(data, value)}>
        <label>
          Date
          <input
            type="text"
            name="data"
            value={data}
            onChange={handleChangeDate}
            placeholder="Add date"
            autoFocus
          ></input>
        </label>
        <label>
          Value
          <input
            type="text"
            name="value"
            value={value}
            onChange={handleChangeValue}
            placeholder="Add value"
            autoFocus
          ></input>
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default EditTable;
