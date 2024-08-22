import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='w-full  bg-red-200  border-red-200  px-8 my-5 flex space-x-10'>
        <section className='w-1/2'><div className='text-xl sm:text-5xl font-bold'> Track Me</div></section>
        <section className='md:w-1/3'> <SearchBar/></section>
        


      
    </div>
  )
}

export default Navbar
