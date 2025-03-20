import React from 'react'
import Link from 'next/link'

export default function ColorfulButton({text, href}) {
  {/* <Link href={href} className="px-10 py-2 rounded-xl border border-white text-white bg-gradient-to-r from-gray-500 to-lightPurple transition-all hover:from-gray-400 hover:to-lightPurple"> */}
  return (
   
<Link
  href={href}
  className="px-10 py-2 rounded-xl border border-white text-white 
             bg-gradient-to-r from-gray-400 to-lightPurple 
             bg-[length:200%_200%] transition-all duration-200 
             hover:bg-[position:100%_0]"
>
  {text}
</Link>

  )
}
