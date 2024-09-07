import React from 'react'


const SearchBar = () => {
  return (
    <div className="w-full text-white bg-black1 py-2 px-2 flex  rounded-lg">
      <input
        className="w-full outline-none text-white  px-6  border-white border-2 rounded-3xl bg-slate-900"
        type="text"
        placeholder="Search here out"
      />
      <div className="text-white  border-2 rounded-lg font-bold border-white w-20 text-center mx-3 hover:bg-white hover:text-black">
        <input type="button" value="search" />
      </div>
    </div>
  );
}

export default SearchBar
