import React,{useState} from 'react'
import { IoMdList } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiDiscoBallFill } from "react-icons/pi";
import { IoBeer } from "react-icons/io5";
import { FaF, FaFilter } from "react-icons/fa6";
import ListModal from '@/components/ListModal';
import { IoSearch } from "react-icons/io5";


export default function MapMenu() {

    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);


  return (
<div className='absolute left-[25%] top-[80%] w-[50%] h-24 rounded-xl bg-darkGray shadow-menuShadow
                translate-y-16 hover:translate-y-0 hover:bg-black transition-all duration-300 ease-in-out'>
        <div className='flex justify-center gap-12 items-center h-full'>
            <div onClick={() => {setIsOpen(true)}} className='flex flex-col transition-all hover:-translate-y-0.5 cursor-pointer items-center'>
                <IoMdList color='#A491FF' size={50}/>
                <h1 className='text-white'>Filter</h1>
            </div>
              <div className="flex items-center bg-white text-lg text-black px-5 py-1 rounded-xl shadow-md w-[350px] ">
                <IoSearch className="text-gray-500 mr-2" size={40} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none bg-transparent"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                </div>

            <div className='flex flex-col transition-all hover:-translate-y-0.5 gap-1 cursor-pointer items-center'>
                <IoFastFoodOutline color='#A491FF' size={40}/>
                <h1 className='text-white'>Food</h1>
            </div>


            <div className='flex flex-col gap-1 transition-all hover:-translate-y-0.5 cursor-pointer items-center'>
                <PiDiscoBallFill color='#A491FF' size={40}/>
                <h1 className='text-white'>Clubs</h1>
            </div>
    
                    <div className='flex flex-col  transition-all hover:-translate-y-0.5 gap-1 cursor-pointer items-center'>
                <IoBeer color='#A491FF' size={40}/>
                <h1 className='text-white'>Pubs</h1>
            </div>
        

        </div>
        <ListModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </div>
  )
}
