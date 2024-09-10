import {NextResponse} from 'next/server';
import { NextRequest } from 'next/server';
import prisma from "@/Components/prisma";
import { id } from 'date-fns/locale';

export async function GET(){

    const d= new Date(Date.now());
    
    return NextResponse.json({
        message:"helloo this is working fine",
        date:d}
    )
}

export async function POST(req:NextRequest){

    
    const headers=req.headers.get("value");
    const body=await req.json();
    // const  username=body.username;
    const password=body.password;
    const mail=body.mail;
    console.log(`message receieved successfully ,${mail}+${password}`);


    try{ 

        const db_res= await prisma.loginSystem.findMany({
            where:{
                mail,
                password
            }
        });
        const user=db_res[0];

        if(user==undefined){
            console.log("this is not correct data");
            return NextResponse.json({
                message:"this is not correct mail or password please try again"
            })
        }
       console.log(`this is the db res :`+user);
       


        
        
        return NextResponse.json({
        message:"this is post and it is working all fine",
        value:headers,
        body:body,
        db_res:db_res,
        status:"done"
    })}
    catch(e){
        console.log("thisis the error"+e.message)
        return NextResponse.json({
            error:e.message,
            message:"this donot work "
        },{status:500})
    }

   
}