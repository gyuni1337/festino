import React,{useState} from 'react'
import { IoMdList } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiDiscoBallFill } from "react-icons/pi";
import { IoBeer } from "react-icons/io5";
import { FaF, FaFilter } from "react-icons/fa6";
import ListModal from '@/components/ListModal';
import { IoSearch } from "react-icons/io5";
import { BiParty } from "react-icons/bi";
import { DashboardModal } from '@/components/Map/Dashboard/DashboardModal';

export default function MapMenu() {

    const [search, setSearch] = useState("");
    const [dashboardOpen, setDashboardOpen] = useState(false);

    const [foodVisible, setFoodVisible] = useState(true);
    const [clubsVisible, setClubsVisible] = useState(true);
    const [pubsVisible, setPubsVisible] = useState(true);
    const [showEvents, setShowEvents] = useState(false);

  return (
<div className='absolute left-[27%] top-[85%] w-[45%] h-24 rounded-xl bg-darkGray shadow-menuShadow
                hover:shadow-menuHovered hover:bg-black transition-all duration-300 ease-in-out'>
        <div className='flex justify-center gap-12 items-center h-full'>
            <div onClick={() => {setDashboardOpen(true)}} className='flex flex-col transition-all hover:-translate-y-0.5 cursor-pointer items-center'>
                <IoMdList color='#A491FF' size={50}/>
                <h1 className='text-white'>Filter</h1>
            </div>
              <div className="flex items-center bg-white text-lg text-black px-5 py-1 -mx-5 rounded-xl shadow-md w-[350px] ">
                <IoSearch className="text-gray-500 mr-2" size={40} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none bg-transparent"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                </div>

            <div onClick={() => { setFoodVisible(!foodVisible)}} className={`flex flex-col ${foodVisible ? 'opacity-100' : 'opacity-30'} transition-all hover:-translate-y-0.5 gap-1 cursor-pointer items-center`}>
                <IoFastFoodOutline color='#A491FF' size={40}/>
                <h1 className='text-white'>Food</h1>
            </div>


            <div onClick={() => { setClubsVisible(!clubsVisible)}} className={`flex flex-col ${clubsVisible ? 'opacity-100' : 'opacity-30'} transition-all hover:-translate-y-0.5 cursor-pointer items-center`}>
                <PiDiscoBallFill color='#A491FF' size={40}/>
                <h1 className='text-white'>Clubs</h1>
            </div>
    
            <div onClick={() => { setPubsVisible(!pubsVisible)}} className={`flex flex-col ${clubsVisible ? 'opacity-100' : 'opacity-30'} transition-all hover:-translate-y-0.5 gap-1 cursor-pointer items-center`}>
                <IoBeer color='#A491FF' size={40}/>
                <h1 className='text-white'>Pubs</h1>
            </div>
        
            <div onClick={() => { setShowEvents(!showEvents)}} className=' disabled flex flex-col shrink-0 transition-all hover:-translate-y-0.5 gap-1 cursor-pointer items-center'>
                <BiParty color='#A491FF'  size={40} />
                <h1 className='text-white'>Events</h1>
            </div>

        </div>
        {/* <ListModal isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
          <DashboardModal open={dashboardOpen} onOpenChange={setDashboardOpen} />
    </div>
  )
}
