import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='h-[400px] w-screen border-t-8 shadow-footerShadow border-[#635985] bg-footerbg text-white '>
        <div className='flex justify-around items-top mx-20 pt-20'> { /* idk why pt? */}
            <h1 className='text-4xl'>Festino Copyright</h1>
            <div className='flex gap-20'>

            <div className='flex flex-col text-xl gap-5'>
                <h1 className='text-3xl'>Discover</h1>
                <Link className='text-graytext' href="/">Events</Link>
                <Link className='text-graytext' href="/">Clubs</Link>
                <Link className='text-graytext' href="/">Pubs</Link>
            </div>
            <div className='flex flex-col text-xl gap-5'>
                <h1 className='text-3xl'>Contact Us</h1>
                <Link className='text-graytext' href="/">Email</Link>
                <Link className='text-graytext' href="/">Phone Number</Link>
                <Link className='text-graytext' href="/">Support</Link>
            </div>
            <div className='flex flex-col text-xl gap-5'>
                <h1 className='text-3xl'>Developer</h1>
                <Link className='text-graytext' href="/">API Settings</Link>
                <Link className='text-graytext' href="/">API Key</Link>
                <Link className='text-graytext' href="/">Resources</Link>
            </div>
            </div>
        </div>
    </div>
  )
}
