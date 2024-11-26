import Image from 'next/image'
import React, { useState } from 'react'

function DesignType(selectedDesignType) {
    const Designs = [
        {
            name: 'Modern',
            image: '/modern.png',
            alt: 'modern'
        },

        {
            name: 'Industrial',
            image: '/industrial.png',
            alt: 'industrial'
        },
        {
            name: 'Bohemian',
            image: '/bohemian.png',
            alt: 'bohemian'
        },
        {
            name: 'Traditional',
            image: '/traditional.png',
            alt: 'traditional'
        },
        {
            name: 'Rustic',
            image: '/rustic.png',
            alt: 'rustic'
        },
        
    ]

    const [selectedOption, setSelectedOption]=useState();
  return (
    <div className='mt-5'>
      <label className='text-gray-500'>Select Interior Design Type </label>
      <div className='grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5'
      >
        {Designs.map((design,index)=>(
            <div key={index} onClick={()=>{setSelectedOption(design.name);selectedDesignType(design.name)}}>
                <Image src={design.image} width={100} height={100} 
                className={`h-[70px] rounded-md
                 hover:scale-105 transition-all
                  cursor-pointer ${design.name==selectedOption&&'border-2 border-green-400 rounded-md p-1'}`}/>
                <h2>{design.name}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DesignType
