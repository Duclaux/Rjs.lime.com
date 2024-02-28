import React from 'react'

function Container( { children, style } ) {
  return (
    <div className={`px-[10px] sm:px-0 w-full sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1275.4px] mx-auto ${style}`}>{ children }</div>
  )
}

export default Container