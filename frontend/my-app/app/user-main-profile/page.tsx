import React from "react";
import Navbar from "@/Components/Navbar";
// import Calendar from '@/Components/CalendarCha'
import CalendarChart from "@/Components/CalendarChart";
import { ProgressGraph } from "@/Components/ProgressGraph";

const page = () => {
  return (
    <div className="h-screen   flex-cols w-full text-black bg-violet-500">
      <section className="flex flex-cols w-full">
        <Navbar />
      </section>
      <section className=" flex-rows w-full">
        this is the main profile here
        <div className="   flex bg-black rounded-xl w-full drop-shadow-lg ">
          <CalendarChart />{" "}
        </div>
        <div className="w-full flex flex-cols w-screen md:w-full">
          <ProgressGraph />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default page;
