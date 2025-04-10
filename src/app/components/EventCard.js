import React from 'react'

export default function EventCard(props) {
  return (
    <div className='w-96 h-96 text-black text-xl bg-white'>
        <h1>{props.title}</h1>
    </div>
)
}
