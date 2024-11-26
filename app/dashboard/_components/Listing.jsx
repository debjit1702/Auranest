"use client"
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { Button } from '../../../components/ui/button';
import EmptyState from '@/app/dashboard/_components/EmptyState';
import Link from 'next/link';

function Listing() {
    const {user}=useUser();
    const[userRoomList,setUserRoomList]=useState([]);
  return (
    <div>
             <div className='flex items-center justify-between'>
            <h2 className='font-bold text-3xl'>Hello, {user?.fullName}</h2>
            <Link href={'/dashboard/create-new'}>
            <Button>+Redesign Room</Button>
            </Link>
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
