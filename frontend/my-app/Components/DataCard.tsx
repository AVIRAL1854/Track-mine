import React from 'react';
// import CardValueGenerator from './Cardgenerator';
const DataCard=({time, inputText})=>{
    return (
      <div className="mx-2 flex-rows bg-yellow-300 w-84 sm:w-84 justify-center  place-content-center border-black border-2 rounded-3xl my-2 drop-shadow-xl">
        <section className="flex justify-center text-center text-white w-full text-4xl font-bold bg-yellow-400 rounded-3xl">
          {time}
        </section>
        <section className=" flex text-xl bg-white rounded-3xl h-96 w-full justify-center drop-shadow-2xl">
          {inputText}
        </section>
      </div>
    );
}

export default DataCard;    