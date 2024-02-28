import React from 'react'

function CardApp(props) {
  return (
    <div className='bg-white rounded-[20px] w-fit xl:w-[413.33px] xl:h-[444.89px]'>
        <div>
            <img src={props.img} alt="" className='rounded-t-[20px]'/>
        </div>
        
        <div className='flex items-center w-full py-[25px] pl-[25px] lg:pl-[28px] lg:pr-[50px] lg:pt-[42px] lg:pb-[68px]'>
            <p className='text-[#00B200] text-[16px] lg:text-[20px]'>{props.title}</p>
            <p className='text-[12px] xl:text-[14px] ml-[34px] xl:ml-[41px]'>{props.txt}</p>
        </div>
    </div>
  )
}

export default CardApp