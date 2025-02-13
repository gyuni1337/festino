import React from 'react'

export default function ColorfulButton({text}) {
  return (
   
<div class="w-32 h-12 relative cursor-pointer">
  <div class="w-32 h-12 left-0 top-0 absolute bg-gradient-to-r from-[#9a9a9a] via-[#635985] to-[#443c68] rounded-2xl border border-white"></div>
  <div class="w-14 h-6 top-[11.54px] absolute text-center text-white text-base text-nowrap font-normal font-['Inter']">{text}</div>
</div>
  )
}
