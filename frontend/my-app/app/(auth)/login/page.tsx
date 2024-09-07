import React from 'react'
import Button from '@/Components/Button';
import Labeler from '@/Components/Labeler';
const Login=()=>{
    return (
      <div className=" flex-cols bg-black text-white h-screen border-2 border-white justify-center h-screen w-full place-content-center">
        <section className=" flex-cols justify-center  text-center font-bold text-3xl sm:text-4xl">
          Create an Account here{" "}
        </section>
        <section className="flex grid justify-center  place-content-center mt-10">
          <Labeler placeholder={"enter the gmail"} text={"Email"} />
          <Labeler placeholder={"enter the username"} text={"username"} />
          <Labeler placeholder={"enter the password"} text={"password"} />
        </section>
        <section className='text-center'><Button text="Login"/></section>
      </div>
    );
}
 export default Login;
