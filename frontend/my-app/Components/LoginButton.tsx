import React from 'react';
import axios from 'axios';

const LoginButton = ({text ,mail,password}) => {

  const handler=async()=>{
    const url = "http://localhost:3000/api/login";
    const data={
      "mail":`this is the username +${mail}`,
      "password":`this is the password + ${password}`
    };

    const headers={
      'value':"hello this is the headers"
    }
    const res=await axios.post(url,data,{headers});
    console.log(res);

  }
  return (
    <div>
      <button className="text-black h-10 font-bold w-44 text-xl border-2 rounded-3xl my-4 bg-white hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 transition ease-in-out delay-100 bg-blue-100 hover:-translate-y-2 hover:-translate-x-2 hover:scale-110 hover:bg-indigo-100 duration-300" onClick={handler}>
        {text}
      </button>
    </div>
  );
}

export default LoginButton
