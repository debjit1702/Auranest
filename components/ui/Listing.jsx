"use client"
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { Button } from './button';
import EmptyState from '@/app/dashboard/_components/EmptyState';

function Listing() {
    const {user}=useUser();
    const[userRoomList,setUserRoomList]=useState([]);
  return (
    <div>
             <div className='flex items-center justify-between'>
            <h2 className='font-bold text-3xl'>Hello, {user?.fullName}</h2>
            <Button>+Redesign Room</Button>
            </div>

            
            {userRoomList?.length==0?
            <EmptyState/>
            :
            <div>
               {/*Listing*/} 
               </div>
               
               }


    </div>
  )
}

export default Listing
