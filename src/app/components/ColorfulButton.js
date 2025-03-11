import React from 'react'

export default function ColorfulButton({text}) {
  return (
   
<button className="px-10 py-2 rounded-xl border border-white text-white bg-gradient-to-r from-gray-700 to-purple-900 hover:from-gray-600 hover:to-purple-800">
  {text}
</button>

  )
}
