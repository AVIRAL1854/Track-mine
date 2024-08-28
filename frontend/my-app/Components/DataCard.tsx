import React from 'react';
// import CardValueGenerator from './Cardgenerator';
const DataCard=({time, inputText})=>{
    return (
      <div className=" mx-4 my-6 shadow-lg shadow-cyan-500/50 flex-rows bg-transparent w-76 sm:w-80  justify-center  place-content-center border-slate-400 border-4 rounded-3xl my-2 drop-shadow-xl shadow-cyan-500/50 hover:border-2 hover:ring-2 hover:shadow-cyan-500/80  hover:bg-slate-900">
        <section className="flex justify-center text-center text-white w-full text-4xl font-bold bg-gradient-1  to-r from-black1 to-slate1-900 rounded-3xl">
          {time}
        </section>
        <section className=" flex text-white text-xl bg-gradient1-to-r from-1black to-slat1e-900 rounded-3xl h-96 w-full justify-center shadow-2xl ">
          {inputText}
        </section>
      </div>
    );
}

export default DataCard;    