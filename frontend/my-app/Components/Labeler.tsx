import React from 'react'

const Labeler = ({placeholder,text}) => {
  return (
    <div className='flex-cols justify-center w-full my-1'>
        <div className=" border-white text-white sm:text-2xl	 ">{text}</div>
        <input type="text" placeholder={placeholder}  className='border-white border-2  bg-blue-500 rounded-sm   w-72 sm:w-96' />
      
    </div>
  )
}

export default Labeler;
