import React from 'react'

const LoginButton = ({text ,mail,password}) => {
  return (
    <div>
      <button className="text-black h-10 font-bold w-44 text-xl border-2 rounded-3xl my-4 bg-white hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 transition ease-in-out delay-100 bg-blue-100 hover:-translate-y-2 hover:-translate-x-2 hover:scale-110 hover:bg-indigo-100 duration-300" onClick={()=>{
        console.log(mail +"+" +password);
      }}>
        {text}
      </button>
    </div>
  );
}

export default LoginButton
