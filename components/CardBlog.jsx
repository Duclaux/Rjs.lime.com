import React from 'react'

function CardBlog(props) {
  return (

    <div className={`${props.styles}`}>
        <img src={props.img} alt="" />

        <div className='mt-[28px] text-white relative h-full'>
            <h1 className='mr-2 text-[#00DD00] text-[16px]'>{props.title}</h1>
            <p className=' text-[28px] mb-10'>{props.text}</p>
            <p className={`${props.styles2} text-[16px]`}>{props.text2}</p>
        </div>
    </div>
  )
}

export default CardBlog