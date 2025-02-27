import React from 'react'

export default function Button({text}) {
  return (
    <button className="px-10 py-2 rounded-xl border shadow-xl hover:text-white hover:border-white border-text text-text ">
        {text}
    </button>
  )
}
