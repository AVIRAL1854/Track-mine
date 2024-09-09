import {NextResponse} from 'next/server';
import { NextRequest } from 'next/server';


export async function GET(){

    const d= new Date(Date.now());
    
    return NextResponse.json({
        message:"hello this is working fine",
        date:d}
    )
}

export async function POST(req:NextRequest){
    const headers=req.headers.get("value");
    const body=await req.json();
    // const  username=body.username;
    const password=body.password;
    const mail=body.mail;




    return NextResponse.json({
        message:"this is post and it is working all fine",
        value:headers,
        body:body
    })
}