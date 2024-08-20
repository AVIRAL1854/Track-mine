"use client"
import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import ValueGenerator from "@/Components/ValueGenerator";


function CalendarChart() {
  const [chartData, setChartData] = useState([]);
  const [width,setWidth]=useState(window.innerWidth);
  const [gCellSize,setGCellSize]=useState(25);

  useEffect(() => {
    // Prepare your data here, similar to the original code
    // here we have to fetch the data from data base to set the data at the graph

    const dataTable = ValueGenerator();

    const handlerResize = () => {
      setWidth(window.innerWidth);
      if (width == window.innerWidth) {
        setWidth(window.innerWidth);
        if (width <= 847) {
          setGCellSize(8);
        } else {
          setGCellSize(20);
        }
      }
    };

    handlerResize();
    window.addEventListener("resize", handlerResize);

    setChartData(dataTable);
  }, [width]);

  const options = {
    title: "My Progress",
    height: 250,
    // Add more options as needed

    calendar: {
      cellSize: gCellSize, //here 10 is normal value
      cellColor: {
        stroke: "#ffffff",
        strokeOpacity: 1.5,
        strokeWidth: 3,
      },
      monthLabel: {
        fontSize: 12,
        color: "#000000",
        bold: true,
        italic: true,
      },
      dayOfWeekLabel: {
        fontName: "Times-Roman",
        fontSize: 12,
        color: "#000000",
        bold: true,
        italic: true,
      },
    },
    noDataPattern: {
      backgroundColor: "#3b3b3b",
      color: "#000000",
    },
  };

  return (
    <div className=" flex w-screen flex-cols">
      {chartData.length > 0 && (
        <Chart
          chartType="Calendar"
          width="100%"
          height="500px"
          data={chartData}
          options={options}
        />
      )}
    </div>
  );
}

export default CalendarChart;
