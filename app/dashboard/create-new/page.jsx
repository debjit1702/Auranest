"use client";

import React from "react";
import ImageSelection from "../_components/ImageSelection";
import RoomType from "./_component/RoomType";
import DesignType from "./_component/DesignType";

function CreateNew() {
  // Define the handler function
  const onHandleInputChange =(value, fieldName) => {
   
  }
  

  return (
    <div>
      <h2 className="font-bold text-4xl text-green-400 text-center">
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
          <DesignType/>
          {/* Additional requierment */}

          {/* button to generate */}
        </div>
      </div>
    </div>
  );
}

export default CreateNew
