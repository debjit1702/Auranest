import { NextResponse } from "next/server";

export async function POST(req){

    const { imageUrl, roomType, designType, additionalReq } =await req.json();

    //Convert the image to Ai Image
    

    //convert the output Url to BASE64 Image


    //Save Base64 to Appwrite Storage


    // Save all to Database


    return NextResponse.json({result: 'Hello'});
}