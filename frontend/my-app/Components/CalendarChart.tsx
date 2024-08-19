"use client"
import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import ValueGenerator from "@/Components/ValueGenerator";


function CalendarChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Prepare your data here, similar to the original code
    // here we have to fetch the data from data base to set the data at the graph

    const dataTable = ValueGenerator();
  
    setChartData(dataTable);
  }, []);

  const options = {
    title: "My Progress",
    height: 250,
    // Add more options as needed

    calendar: {
      cellSize: 20,
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
    <div >
      {chartData.length > 0 && (
        <Chart
          chartType="Calendar"
          width="100%"
          height="400px"
          data={chartData}
          options={options}
        />
      )}
    </div>
  );
}

export default CalendarChart;
