import React from "react";
const StreakCard = ({ first, second, third }) => {
  return (
    <div className=" w-full h-full mx-20 flex grid  justify-center place-content-center shadow-lg shadow-cyan-500/80 bg-gradient-to-r from-black via-black to-blue-900 rounded-md drop-shadow-2xl text-white">
      <section className="h-40 font-bold   w-full justify-center  bg-gradient-to-r     rounded-3xl  text-center text-3xl">
        Latest Streak :<span className=" font-bold text-5xl"> 45 days</span>
      </section>
      <section className="h-full w-full flex justify-center ">
        <table className="   w-full  flex-rows">
          <tr className="border-2 border-none  w-full text-xl  md:text-2xl">
            <th className="flex-rows w-1/2 border-2 border-black rounded-tl-lg border-r-white bg-gradient-to-r from-blue-800 to-black ">
              Postion
            </th>
            <th className="flex-rows w-2/3 border-t-blue-900  rounded-tr-lg border-l-white bg-gradient-to-r  from-black  to-blue-800">
              Days
            </th>
          </tr>
          <tr className="border-2 border-black  w-full text-xl  md:text-2xl">
            <td className=" flex-rows w-1/2 border-2 border-blue-800 rounded-sm border-r-white">
              1st{" "}
            </td>
            <td className="flex-rows w-2/3 border-2 border-t-0 border-blue-900 rounded-sm border-l-white">
              {first} days
            </td>
          </tr>
          <tr className="border-2 border-black  w-full text-xl  md:text-2xl">
            <td className="bg-amber1-200 flex-rows w-1/2 border-2 border-blue-800  rounded-sm border-r-white">
              2nd
            </td>
            <td className="flex-rows w-2/3 border-2 border-blue-900 rounded-sm border-l-white">
              {second} days
            </td>
          </tr>
          <tr className="border-2 border-black  w-full text-xl  md:text-2xl">
            <td className="bg-ambe1r-200 flex-rows w-1/2 border-2 border-blue-800 rounded-sm border-r-white">
              3rd
            </td>
            <td className="flex-rows w-2/3 border-2 border-blue-900 rounded-sm border-l-black">
              {third} days
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default StreakCard;
