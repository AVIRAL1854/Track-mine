import { NextRequest ,NextResponse } from "next/server";
import ValueGenerator from "@/Components/ValueGenerator";
import axios from "axios";




export async function  POST(req:NextRequest){
    const body=await req.json();
    const val=await ValueGenerator();
    console.log("this is hit and this is calendar api")
    return NextResponse.json({
        message:"yes this got hit",
        value:val
    })
}