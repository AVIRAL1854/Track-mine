import React from 'react';
// import CardValueGenerator from './Cardgenerator';
const DataCard=({time, inputText})=>{
    return <div className="flex flex-rows bg-green-500">

        <section className="text-3xl font-bold bg-red-500">{time}</section>
        <section className='text-xl bg-blue-200 h-96 w-1/2'><input type="text"/>inputText</section>
    </div>
}

export default DataCard;    