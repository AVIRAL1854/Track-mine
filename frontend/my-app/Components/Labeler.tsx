import React from 'react'

const Labeler = ({placeholder,text}) => {
  return (
    <div>
        <div className="border-black text-white	 ">{text}</div>
        <input type="text" placeholder={placeholder}  className='border-black bg-blue-500' />
      
    </div>
  )
}

export default Labeler;
