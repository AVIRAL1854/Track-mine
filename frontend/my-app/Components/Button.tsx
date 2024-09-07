import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className="bg-white text-black h-10  font-bold w-44 text-xl border-2 rounded-xl my-4 hover:bg-gradient-to-r hover:from-white hover:from-10% hover:to-blue-800 transition duration-150 ease-in-out">
        {text}
      </button>
    </div>
  );
}

export default Button
