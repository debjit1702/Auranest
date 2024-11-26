import Image from 'next/image'
import React from 'react'

function DesignType() {
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
  return (
    <div>
      <label className='text-gray-500'>Select Interior Design Type </label>
      <div>
        {Designs.map((design,index)=>(
            <div key={index}>
                <Image src={design.image} width={100} height={100}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DesignType
