import React from 'react'
import { IoMdList } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiDiscoBallFill } from "react-icons/pi";
import { IoBeer } from "react-icons/io5";
import { FaF, FaFilter } from "react-icons/fa6";


export default function MapMenu() {


  return (
    <div className='absolute left-[25%] top-[80%] w-[50%] h-28 rounded-xl bg-darkGray shadow-menuShadow'>
        <div className='flex justify-around items-center h-full'>
            <div className='flex flex-col gap-1 cursor-pointer items-center'>
                <IoMdList color='white' size={50}/>
                <h1 className='text-white'>My List</h1>
            </div>

            <div className='flex flex-col gap-1 cursor-pointer items-center'>
                <IoFastFoodOutline color='white' size={50}/>
                <h1 className='text-white'>Food</h1>
            </div>

            <div className='flex flex-col gap-1 cursor-pointer items-center'>
                <PiDiscoBallFill color='white' size={50}/>
                <h1 className='text-white'>Clubs</h1>
            </div>
    
                    <div className='flex flex-col gap-1 cursor-pointer items-center'>
                <IoBeer color='white' size={50}/>
                <h1 className='text-white'>Pubs</h1>
            </div>

            <div className='flex flex-col gap-1 cursor-pointer items-center'>
                <FaFilter color='white' size={50}/>
                <h1 className='text-white'>Filter</h1>
            </div>

        </div>
    </div>
  )
}
