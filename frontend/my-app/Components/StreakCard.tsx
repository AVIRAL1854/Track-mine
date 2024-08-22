import React from "react";
const StreakCard = ({first,second,third}) => {
  return (
    <div className=" w-full h-full mx-20 flex grid border-white border-2 justify-center place-content-center bg-blue-200 rounded-md drop-shadow-2xl">
      <section className="h-40 font-bold   w-full justify-center  bg-red-500 border-2 border-white rounded-sm  text-center text-3xl">
        Latest Streak :<span className=" font-bold text-5xl"> 45 days</span>
      </section>
      <section className="h-full w-full flex justify-center bg-green-200">
        <table className="border-2 border-black w-full  flex-rows">
          <tr className="border-2 border-black  w-full text-xl  md:text-2xl">
            <th className="flex-rows w-1/2 border-2 border-white rounded-sm border-r-black">
              Postion
            </th>
            <th className="flex-rows w-2/3 border-2 border-white rounded-sm border-l-black">
              Days
            </th>
          </tr>
          <tr className="border-2 border-black  w-full text-xl  md:text-2xl">
            <td className="flex-rows w-1/2 border-2 border-white rounded-sm border-r-black">
              1st{" "}
            </td>
            <td className="flex-rows w-2/3 border-2 border-white rounded-sm border-l-black">
              {first} days
            </td>
          </tr>
          <tr className="border-2 border-black  w-full text-xl  md:text-2xl">
            <td className="flex-rows w-1/2 border-2 border-white rounded-sm border-r-black">
              2nd
            </td>
            <td className="flex-rows w-2/3 border-2 border-white rounded-sm border-l-black">
              {second} days
            </td>
          </tr>
          <tr className="border-2 border-black  w-full text-xl  md:text-2xl">
            <td className="flex-rows w-1/2 border-2 border-white rounded-sm border-r-black">
              2nd
            </td>
            <td className="flex-rows w-2/3 border-2 border-white rounded-sm border-l-black">
              {third} days
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default StreakCard;