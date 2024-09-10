import { NextResponse, NextRequest } from "next/server";
import prisma from "@/Components/prisma"

export async function  POST(req:NextRequest){

    const body= await req.json();
    const value= req.headers.get("value");
    const username=body.username;
    const mail=body.mail;
    const password=body.password;
    console.log(`mail :${mail} + password:${password} +username:${username}`)

   try{ const user = await prisma.loginSystem.create({
        data:{
            username:username,
            mail:mail,
            password:password
        }
    })

    console.log(`here db request done now . this is the ${user}`);

    return NextResponse.json({
        "message":"yes it is received",
        "body":body

    });}
    catch(e){

        console.log("here is the error :"+e);
        return NextResponse.json({
            message:"this is the message given to you",
            error:e.message,
        },{status:500});
        
    }
   
    


}
