import React from 'react'
import ImageSelection from '../_components/ImageSelection'

function CreateNew() {
  return (
    <div>
      <h2 className='font-bold text-4xl text-green-400 text-center'>
        Experiance the magic of AI Remodeling
      </h2>
      <p className='text-center text-gray-500'>Transform any room with a click, select a space, Choose a style, and watch as AI instantly reimagines your Enviourment</p>

      <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-10'>
        {/*Image Selection */}
        <ImageSelection/>
        {/*Form input Section */}
      </div>
    </div>
  )
}

export default CreateNew
