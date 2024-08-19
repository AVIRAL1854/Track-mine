import React from 'react'
import Button from './Button'

const SearchBar = () => {
  return (
    <div className="w-full text-white bg-blue-200 py-2 px-2 flex border-black border-2 rounded-lg">
      <input className="w-full outline-none text-black  px-6  " type="text" placeholder="Search here out" />
      <div className='text-black  border-2 rounded-lg  border-black w-20 text-center mx-3'>
        <Button text="Search" />
      </div>
    </div> 
  );
}

export default SearchBar
