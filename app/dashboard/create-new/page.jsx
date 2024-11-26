"use client";

import React, { useState } from "react";
import ImageSelection from "../_components/ImageSelection";
import RoomType from "./_component/RoomType";
import DesignType from "./_component/DesignType";
import AdditionalReq from "./_component/Additionalreq";
import { Button } from "@/components/ui/button";

function CreateNew() {

  const [formData,setFormData]=useState([]);

  const onHandleInputChange =(value, fieldName) => {
   setFormData(pre)
  }
  

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
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        {/* Form input Section */}
        <div>
          {/* Room type */}
          <RoomType selectedRoomType={(value)=> onHandleInputChange(value, "roomType")}/>
          {/* Design type */}
          <DesignType SelectedDesignType={(value)=>onHandleInputChange(value, "designType" )}/>
          {/* Additional requierment */}

          <AdditionalReq additionalRequirmentInput={(value)=>onHandleInputChange(value, "additionalReq")}/>

          {/* button to generate */}
          <Button className="w-full mt-5 bg-lime-500">Generate</Button>
          <p className="text-sm text-gray-400 mb-52">NOTE:1 Credit will use to redesign your room</p>
        </div>
      </div>
    </div>
  );
}

export default CreateNew
