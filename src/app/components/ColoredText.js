import React from 'react'

const sizeMap = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl",
  xl: "text-6xl",
}

export default function ColoredText({text, size }) {
  return (
<h1 className={` ${sizeMap[size]} lg:w-[70%] leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-700`}>
  {text}
</h1>
  )
}
