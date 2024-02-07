import connectToDb from "@/database";
import { NextResponse } from "next/server";


export async function GET()
{
    const con = connectToDb()
    return new NextResponse('connected')
}