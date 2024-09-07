import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className="w-full  bg-black1  border-red-200  px-8 my-5 flex space-x-10">
      <section className="w-1/2">
        <div className="text-3xl sm:text-5xl font-bold"> <a href="/home">Track Me</a></div>
      </section>
      <section className=" w-1/5 md:w-1/3 ">
        {" "} 
        <SearchBar />
      </section>
    </div>
  );
}

export default Navbar
