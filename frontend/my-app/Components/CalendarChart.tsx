"use client"
import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import ValueGenerator from "@/Components/ValueGenerator";


function CalendarChart() {
  // let newWidth=window.innerWidth;
  const [chartData, setChartData] = useState([]);
  const [width,setWidth]=useState(0);
  const [gCellSize,setGCellSize]=useState(25);

  useEffect(() => {
    // Prepare your data here, similar to the original code
    // here we have to fetch the data from data base to set the data at the graph

    const dataTable = ValueGenerator();

    const handlerResize = () => {
      
        setWidth(window.innerWidth);

        if(width<=400){
          setGCellSize(6)
        }
       else if (width <= 820) {
          setGCellSize(7);
        }   
        else if(width <1184){
          setGCellSize(15)
        }
        else  {
          setGCellSize(20);
        }
      
    };

    handlerResize();
    window.addEventListener("resize", handlerResize);

    setChartData(dataTable);

    return()=>{
      window.removeEventListener('resize',handlerResize);
    }
  }, [width]);

  const options = {
    title: "My Progress",
    height: width<=400?200:width<=820?250:300,
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
    <div className="flex w-full  ">
      {chartData.length > 0 && (
        <Chart
          chartType="Calendar"
          width="100%"
          height="300px"
          data={chartData}
          options={options}
        />
      )}
    </div>
  );
}

export default CalendarChart;
