import React from "react";
import Navbar from "@/Components/Navbar";
// import Calendar from '@/Components/CalendarCha'
import CalendarChart from "@/Components/CalendarChart";
import { ProgressGraph } from "@/Components/ProgressGraph";
import StreakCard from "@/Components/StreakCard";
import CardValueGenerator from "@/Components/Cardgenerator";
import DataCard from "@/Components/DataCard";

const page = () => {
  
  const cardData = CardValueGenerator();
  return (
    <div className="h-full  flex-cols w-full text-black bg-violet-500 ">
      <section className="flex flex-cols w-full  ">
        <Navbar />
      </section>
      <section className=" flex-rows w-full">
        this is the main profile here
        <div className="  w-full flex bg-white rounded-xl  drop-shadow-lg place-content-center h-40 md:h-min  ">
          <CalendarChart />
          {/* <div className="text-white">Streak : 45 days</div> */}
        </div>
        <div className="w-full flex grid lg:flex  my-5 md:my-5 lg:my-10">
          <div className="flex w-full  bg-black1 justify-center sm:my-10">
            {" "}
            <ProgressGraph />
          </div>
          <div className="flex w-full  h-96 bg-white1  justify-center my-10 text-center justify-center rounded-lg drop-shadow-2xl ">
            <StreakCard first={45} second={25} third={10} />
          </div>
        </div>
      </section>

      {/* here the datacard is stored */}
      <section className=" grid   lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {cardData?.data.map((item) => (
          <DataCard time={item.DATE} inputText={item.inputText} />
        ))}
      </section>

      {/* here the datacard is stored */}
      {/* <section className="flex grid w-full">
        {cardData?.data.map((item, index) => (
          <DataCard key={index} time={item.DATE} inputText={item.inputText} />
        ))}
      </section> */}
    </div>
  );
};

export default page;
