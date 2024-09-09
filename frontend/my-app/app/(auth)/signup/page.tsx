"use client"
import React, { useState } from "react";
import SignupButton from "@/Components/SignupButton";
import Labeler from "@/Components/Labeler";
import Navbar from "@/Components/Navbar";
const Signup = () => {
  const [mail,setMail]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  return (
    <div className=" flex-cols bg-black text-white h-screen  justify-center h-screen w-full place-content-center">
      <section className="absolute inset-x-0 top-0  ">
        <Navbar />
      </section>
      <section className=" flex-cols justify-center  text-center font-bold text-3xl sm:text-4xl">
        Create an Account here{" "}
      </section>
      <section className="flex grid  justify-center font-bold  place-content-center mt-10">
        <Labeler placeholder={"enter the gmail"} text={"Email"}  setter={setMail}/>
        <Labeler placeholder={"enter the username"} text={"Username"} setter={setUsername} />
        <Labeler placeholder={"enter the password"} text={"Password"} setter={setPassword} />
      </section>
      <section className="text-center">
        <SignupButton text="Login" mail={mail} password={password} username={username} />
      </section>
    </div>
  );
};
export default Signup;
