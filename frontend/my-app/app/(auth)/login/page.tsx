"use client"
import React, { useState } from 'react'
import Labeler from '@/Components/Labeler';
import Navbar from '@/Components/Navbar';
import LoginButton from '@/Components/LoginButton';
const Login=()=>{
  const [mail,setMail]=useState("");
  const [password,setPassword]=useState("");

    return (
      <div className=" flex-cols bg-black text-white h-screen  justify-center h-screen w-full place-content-center">
        {" "}
        <section className="absolute inset-x-0 top-0  ">
          <Navbar />
        </section>
        <section className=" flex-cols justify-center  text-center font-bold text-3xl sm:text-4xl">
          Login your Account here{" "}
        </section>
        <section className="flex grid justify-center font-bold  place-content-center mt-10">
          <Labeler placeholder={"enter the gmail"} text={"Email"} setter={setMail} />
          {/* <Labeler placeholder={"enter the username"} text={"Username"} /> */}
          <Labeler placeholder={"enter the password"} text={"Password"} setter={setPassword} />
        </section>
        <section className="text-center">
          <LoginButton text="Login" mail={mail} password={password} />
        </section>
      </div>
    );
}
 export default Login;
