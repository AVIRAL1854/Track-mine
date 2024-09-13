'use client'
import React from "react";
import axios from "axios";

const SignupButton = ({ text, mail, password, username }) => {
  const handler = async () => {
    const data = {
      mail: `${mail}`,
      password: `${password}`,
      username: `${username}`,
    };
    const user_data={
      username:123
    }

    const headers = {
      value: "this is the header value",
    };
    const url = "http://localhost:3000/api/signup";
    const res = await axios.post(url, data, { headers });
    
    
      console.log("this is the mail received the " + res.data.message);
  };
  return (
    <div>
      <button
        className="text-black h-10 font-bold w-44 text-xl border-2 rounded-3xl my-4 bg-white hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500 transition ease-in-out delay-100 bg-blue-100 hover:-translate-y-2 hover:-translate-x-2 hover:scale-110 hover:bg-indigo-100 duration-300"
        onClick={handler}
      >
        {text}
      </button>
    </div>
  );
};

export default SignupButton;
