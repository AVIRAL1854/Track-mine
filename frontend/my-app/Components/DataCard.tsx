import React from 'react';
// import CardValueGenerator from './Cardgenerator';
const DataCard=({time, inputText})=>{
    return (
      <div className="mx-2 shadow-lg shadow-cyan-500/50 flex-rows bg-black w-84 sm:w-84 justify-center  place-content-center border-black border-2 rounded-3xl my-2 drop-shadow-xl shadow-cyan-500/50">
        <section className="flex justify-center text-center text-white w-full text-4xl font-bold bg-gradient-to-r from-black to-slate-900 rounded-3xl">
          {time}
        </section>
        <section className=" flex text-white text-xl bg-gradient-to-r from-black to-slate-900 rounded-3xl h-96 w-full justify-center shadow-2xl">
          {inputText}
        </section>
      </div>
    );
}

export default DataCard;    