import { Textarea } from '@/components/ui/textarea' 
import React from 'react'

function AdditionalReq({ additionalRequirmentInput }) { // Destructure the prop here
  return (
    <div className='mt-5'>
        <label className='text-gray-400'>Enter Additional Requirements</label>
      <Textarea 
        className="mt-2" 
        onChange={(e) => additionalRequirmentInput(e.target.value)} // This now works properly
      />
    </div>
  )
}

export default AdditionalReq;
