import React,{useState} from 'react'
import { IoMdList } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiDiscoBallFill } from "react-icons/pi";
import { IoBeer } from "react-icons/io5";
import { FaF, FaFilter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BiParty } from "react-icons/bi";
import { DashboardModal } from '@/components/Map/Dashboard/DashboardModal';
import { useVenues } from '@/Context/VenueContext';

export default function MapMenu() {

    const [dashboardOpen, setDashboardOpen] = useState(false);
    const { showClubs, setShowClubs, showPubs, setShowPubs, showFoods, setShowFoods, searchQuery, setSearchQuery } = useVenues();

    
  return (
<div className='absolute left-[30%] top-[85%] px-5 w-[45%] h-24 rounded-xl bg-darkGray shadow-menuShadow
                hover:shadow-menuHovered hover:bg-black transition-all duration-300 ease-in-out'>
        <div className='flex justify-center gap-12 items-center h-full'>
            <div onClick={() => {setDashboardOpen(true)}} className='flex flex-col transition-all hover:-translate-y-0.5 cursor-pointer items-center'>
                <IoMdList color='#A491FF' size={50}/>
                <h1 className='text-white'>Dashboard</h1>
            </div>
              <div className="flex items-center bg-white text-lg text-black px-5 py-1 -mx-5 rounded-xl shadow-md w-[350px] ">
                <IoSearch className="text-gray-500 mr-2" size={40} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none bg-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                </div>

            <div onClick={() => { setShowFoods(!showFoods)}} className={`flex flex-col ${showFoods ? 'opacity-100' : 'opacity-30'} transition-all hover:-translate-y-0.5 gap-1 cursor-pointer items-center`}>
                <IoFastFoodOutline color='#A491FF' size={40}/>
                <h1 className='text-white'>Food</h1>
            </div>


            <div onClick={() => { setShowClubs(!showClubs)}} className={`flex flex-col ${showClubs ? 'opacity-100' : 'opacity-30'} transition-all hover:-translate-y-0.5 cursor-pointer items-center`}>
                <PiDiscoBallFill color='#A491FF' size={40}/>
                <h1 className='text-white'>Clubs</h1>
            </div>
    
            <div onClick={() => { setShowPubs(!showPubs)}} className={`flex flex-col ${showPubs? 'opacity-100' : 'opacity-30'} transition-all hover:-translate-y-0.5 gap-1 cursor-pointer items-center`}>
                <IoBeer color='#A491FF' size={40}/>
                <h1 className='text-white'>Pubs</h1>
            </div>
        
            {/* <div onClick={() => { setShowEvents(!showEvents)}} className=' disabled flex flex-col shrink-0 transition-all hover:-translate-y-0.5 gap-1 cursor-pointer items-center'>
                <BiParty color='#A491FF'  size={40} />
                <h1 className='text-white'>Events</h1>
            </div> */}

        </div>
          <DashboardModal open={dashboardOpen} onOpenChange={setDashboardOpen} />
    </div>
  )
}
