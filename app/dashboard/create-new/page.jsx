"use client";

import React, { useState } from "react";
import ImageSelection from "../_components/ImageSelection";
import RoomType from "./_component/RoomType";
import DesignType from "./_component/DesignType";
import AdditionalReq from "./_component/Additionalreq";
import { Button } from "@/components/ui/button";
import axios from "axios";
//import { storage } from '../config/appwrite';
import { Client, ID, Storage } from "appwrite";

function CreateNew() {

  const [formData,setFormData]=useState([]);

  const onHandleInputChange =(value, fieldName) => {
   setFormData(prev=>({
    ...prev,
    [fieldName]:value
   }))

   console.log(formData);

  }
  const GenerateAiImage = async () => {
    try {
      // Upload the raw image and get its public URL
      const rawImageUrl = await SaveRawImageToBucket();
  
      // Log the URL to the console for verification
      console.log('Raw Image URL:', rawImageUrl);
  
      // The API call for testing
      const result = await axios.post('/api/redesign-room', { 
        imageUrl: rawImageUrl,
        roomType: formData?.roomType,
        designType: formData?.designType,
        additionalReq: formData?.additionalReq,});
      console.log('AI Redesign Result:', result);
  
    } catch (error) {
      console.error('Error generating AI image:', error);
    }
  };
  

  const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("675acbb4003b97de3053"); // Your Project ID

const SaveRawImageToBucket = async () => {
  try {
    const storage = new Storage(client);

    // Generate a unique file name
    const fileName = `${Date.now()}_raw.png`;

    // Upload file to Appwrite Storage
    const response = await storage.createFile(
      "675ad34d002ebed2332d", // Your Storage
      ID.unique(), // Generate a unique ID for the file
      formData.image // Assuming formData.image is a `File` object
    );

    console.log("File uploaded successfully:", response);

    // Retrieve the public URL for the uploaded file
    const downloadUrl = storage.getFileDownload("675ad34d002ebed2332d", response.$id);
    console.log("Download URL:", downloadUrl);

    return downloadUrl;
  } catch (error) {
    console.error("Error uploading file to Appwrite:", error);
    throw error;
  }
};
  


  return (
    <div>
      <h2 className="font-bold text-4xl text-lime-500 text-center">
        Experience the magic of AI Remodeling
      </h2>
      <p className="text-center text-gray-500">
        Transform any room with a click, select a space, choose a style, and watch as AI
        instantly reimagines your environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        {/* Image Selection */}
        <ImageSelection
  selectedImage={(value) => onHandleInputChange(value, "image")}/>

        {/* Form input Section */}
        <div>
          {/* Room type */}
          <RoomType selectedRoomType={(value) => onHandleInputChange(value, "roomType")} />
          {/* Design type */}
          <DesignType selectedDesignType={(value) => onHandleInputChange(value, "designType")}/>

          {/* Additional requierment */}

          <AdditionalReq additionalRequirmentInput={(value) => onHandleInputChange(value, "additionalReq")} />

          {/* button to generate */}
          <Button className="w-full mt-5 bg-lime-500" onClick={GenerateAiImage}>Generate</Button>
          <p className="text-sm text-gray-400 mb-52">NOTE:1 Credit will use to redesign your room</p>
        </div>
      </div>
    </div>
  );
}

export default CreateNew
