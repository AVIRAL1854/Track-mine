import { NextResponse, NextRequest } from "next/server";

export async function  POST(req:NextRequest){

    const body= await req.json();
    const value= req.headers.get("value");
    const username=body.username;
    const mail=body.mail;
    const password=body.password;
    console.log(`mail :${mail} + password:${password} +username:${username}`)
    return NextResponse.json({
        "message":"yes it is received",
        "body":body

    });


}
