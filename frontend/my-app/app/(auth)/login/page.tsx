import React from 'react'
import Button from '@/Components/Button';
import Labeler from '@/Components/Labeler';
const Login=()=>{
    return (
      <div className="bg-black text-white h-screen border-2 border-white ">
        <section>Createqs an Account here </section>
        <section>
          <Labeler placeholder={"enter the gmail"} text={"Email"} />
          <Labeler placeholder={"enter the username"} text={"username"} />
          <Labeler placeholder={"enter the password"} text={"password"} />
        </section>
        <section></section>
      </div>
    );
}
 export default Login;
