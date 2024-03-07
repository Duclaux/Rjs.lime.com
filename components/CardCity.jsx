import React from 'react'



function CardCity(props) {
  return (
    <div>
        <img src={props.img} alt="" />

        <div className='after:content-["\2192"] cursor-pointer mt-[28px]'>
            <a href={props.link} target='_blank' className='underline text-black mr-2'>{props.title}</a>
        </div>
    </div>
  )
}

export default CardCity