import React from 'react'

const Labeler = ({placeholder,text}) => {
  return (
    <div className="flex-cols justify-center w-full my-1">
      <div className=" border-white text-white sm:text-2xl	 ">{text}</div>
      <input
        type="text"
        placeholder={placeholder}
        className=" border-white text-current border-2 bg-blue-400 rounded-sm   w-72 sm:w-96 transition ease-in-out delay-100 bg-blue-100 hover:translate-x-2 hover:scale-100 hover:bg-black duration-100"
      />
    </div>
  );
}

export default Labeler;
