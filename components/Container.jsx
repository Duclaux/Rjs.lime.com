import React from 'react'

function Container( { children } ) {
  return (
    <div className="h-96 px-[10px] sm:px-0 sm:w-[500px] md:w-[670px] lg:w-[1000px] xl:w-[1275.4px] mx-auto">{ children }</div>
  )
}

export default Container