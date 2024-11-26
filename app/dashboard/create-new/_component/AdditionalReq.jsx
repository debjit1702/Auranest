import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function Additionalreq() {
  return (
    <div className='mt-5'>
        <label className='text-gray-400'>Enter Additional Requirments</label>
      <Textarea className="mt-2" onChange={(e)=>console.log(e.target.value)}/>
    </div>
  )
}

export default Additionalreq
