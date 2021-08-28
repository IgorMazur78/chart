import React, { useState, useCallback, useEffect, useRef } from "react";
import Button from "../Component/Button/button";
import { useDropzone } from "react-dropzone";
import XLSX from "xlsx";
import { v4 as uuidv4 } from "uuid";
import Header from "../Component/header/header";
import ListChart from "../Component/listChart/listChart";
import EditTable from "../Component/egitTable/editTable";
import MyChart from "../Component/chart/myChart";
import Table from "../Component/table/dataTable";
import style from "./app.module.css";

export default function App() {
  const uuid = uuidv4();
  const initialState = {
    render: false,
    chartType: null,
    edit: false,
    dataСhanged: false,
    state: [
      ["date", "value"],
      ["січень", 180000],
      ["лютий", 200000],
      ["березень", 250000],
    ],
  };
  let dataNext = [];

  const [stateGlobal, setStateGlobal] = useState(initialState);

  const Possition = useRef(null);

  const handleScroll = () => {
    console.log(Possition);
  };
  const activeEdit = () => {
    setStateGlobal((stateGlobal) => ({
      ...stateGlobal,
      edit: true,
      dataСhanged: false,
    }));
  };
  console.log("stateGlobal.edit", stateGlobal.edit);
  console.log("stateGlobal.dataСhanged", stateGlobal.dataСhanged);

  const activeLineChart = () => {
    setStateGlobal({ ...stateGlobal, chartType: "line" });
  };
  const activeBarChart = () => {
    setStateGlobal({ ...stateGlobal, chartType: "bar" });
  };
  const activeDonutChart = () => {
    setStateGlobal({ ...stateGlobal, chartType: "donut" });
  };
  const activePieChart = () => {
    setStateGlobal({ ...stateGlobal, chartType: "pie" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll());
    return () => {
      window.removeEventListener("scroll", handleScroll());
    };
  }, [Possition.current]);
  // ------------------------------------------------

  const addData = (data, value) => {
    setStateGlobal((stateGlobal) => ({
      ...stateGlobal,
      edit: false,
      dataСhanged: true,
      state: [...stateGlobal.state, [data, value]],
    }));
  };
  console.log("stateGlobal.edit", stateGlobal.edit);
  console.log("stateGlobal.dataChanged", stateGlobal.dataСhanged);
  console.log("stateGlobal.state", stateGlobal.state);

  //-----------------------------------------------------
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        const data = new Uint8Array(binaryStr);
        const workbook = XLSX.read(data, { type: "array" });
        var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dataNext = XLSX.utils.sheet_to_json(first_worksheet, {
          header: 1,
        });
        setStateGlobal((stateGlobal) => ({
          ...stateGlobal,
          render: true,
          dataСhanged: true,
          state: dataNext,
        }));
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
  });

  const files = acceptedFiles.map((file) => (
    <li key={uuid}>
      {file.path} - {file.size} bytes{" "}
    </li>
  ));

  return (
    <div className={style.app} ref={Possition}>
      <Header />

      <div className={style.tableAndChart}>
        <div>
          <ListChart
            line={activeLineChart}
            bar={activeBarChart}
            donut={activeDonutChart}
            pie={activePieChart}
          />

          <div>
            <Button onClick={activeEdit} label={"Edit Data"} />
            {stateGlobal.edit && <EditTable addData={addData} />}
            {!stateGlobal.render && !stateGlobal.dataСhanged ? (
              <Table state={initialState.state} />
            ) : (
              <Table state={stateGlobal.state} />
            )}

            <div>
              <div {...getRootProps()}>
                <input {...getInputProps()} />

                <p>Drag 'n' drop some files here, or click to select files</p>
                <aside>
                  <h4>Files</h4>
                  <ul>{files}</ul>
                </aside>
              </div>
            </div>
          </div>
        </div>

        {!stateGlobal.render && !stateGlobal.dataСhanged ? (
          <MyChart type={stateGlobal.chartType} state={initialState.state} />
        ) : (
          <MyChart type={stateGlobal.chartType} state={stateGlobal.state} />
        )}
      </div>
    </div>
  );
}
