import React from 'react'



function CardCity(props) {
  return (
    <div className={`${props.styles}`}>
        <img src={props.img} alt="" />

        <div className='after:content-["\2192"] cursor-pointer mt-[28px]'>
            <a href={props.link} target='_blank' className='underline text-black mr-2'>{props.title}</a>
            <p className='text-white text-[28px] mr-2'>{props.text}</p>
        </div>
    </div>
  )
}

export default CardCity