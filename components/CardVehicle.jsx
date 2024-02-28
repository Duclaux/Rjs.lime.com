import React from 'react'

function CardVehicle(props) {
  return (
    <div className='bg-[#EEEEEE] pt-[60px] px-[80px] pb-[40px] rounded-[20px] w-fit grid grid-cols-2'>
        <img src={props.img} alt="" className='col-span-1 lg:col-span-2'/>
        <p className='text-[20px] md:mt-[36px] col-span-1 lg:col-span-2 self-center text-center'>{props.txt}</p>
    </div>
  )
}

export default CardVehicle