"use client";
import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import ValueGenerator from "@/Components/ValueGenerator";
import axios from "axios";

function CalendarChart() {
  // let newWidth=window.innerWidth;
  const [chartData, setChartData] = useState(["Date", "Won/loss"]);
  const [width, setWidth] = useState(0);
  const [gCellSize, setGCellSize] = useState(25);
  
  useEffect( function () {
    // Prepare your data here, similar to the original code
    // here we have to fetch the data from data base to set the data at the graph


    const fetchData=async ()=>{
      const url = "http://localhost:3000/api/user-profile/calendar";
    const body={
      uid:" this is uid",
      cookie:"cookie details"
    }
    
    try{
      const res= await axios.post(url,body);
    console.log(" this is api testing " + res.data.value);

    const transformedData = res.data.value.map((item) => {
      // Assuming the first item in each row is a date string
      // Convert it to a Date object
      const date = new Date(item[0]);
      return [date, ...item.slice(1)];
    });

    console.log("Transformed data:", transformedData);
    setChartData(transformedData);
    // setChartData(res.data.value);
    }
    catch(e){
      console.log(`this is the error :`+ e.message());
    }
    }

    fetchData();
    
    
    
    // const dataTable = ValueGenerator();
    // console.log(typeof(dataTable))

    const handlerResize = () => {
      setWidth(window.innerWidth);

      if (width <= 400) {
        setGCellSize(6);
      } else if (width <= 820) {
        setGCellSize(7);
      } else if (width < 1184) {
        setGCellSize(15);
      } else {
        setGCellSize(20);
      }
    };

    handlerResize();
    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
      
    };
  }, [width]);

  
  const options = {
    title: "My Progress",
    height: width <= 400 ? 200 : width <= 820 ? 250 : 300,
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
        color: "#ffffff",
        bold: true,
        italic: true,
      },
      dayOfWeekLabel: {
        fontName: "Times-Roman",
        fontSize: 10,
        color: "#ffffff",
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
