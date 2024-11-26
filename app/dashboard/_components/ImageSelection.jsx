"use client";
import Image from 'next/image';
import React, { useState } from 'react';

function ImageSelection() {
  const [file, setFile] = useState(null);

  const onFileSelected = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <label className="block text-lg font-medium mb-2">Select Image of Your Room</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`border rounded-xl border-dotted flex justify-center items-center 
              border-green-500 bg-slate-200 cursor-pointer hover:shadow-lg overflow-hidden
              ${file ? 'p-0 bg-white' : 'p-28'}`}
            style={{ width: '300px', height: '300px' }} // Fixed dimensions
          >
            {!file ? (
              <Image
                src="/imageupload.png"
                width={70}
                height={70}
                alt="Upload Placeholder"
              />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                width={300}
                height={300}
                className="object-cover w-full h-full"
                alt="Uploaded Room"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{ display: 'none' }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
}

export default ImageSelection;
