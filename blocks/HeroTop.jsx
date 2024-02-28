import React from 'react'

import Bg_hero from '../src/assets/bg_hero.png'

function HeroTop() {
  return (
    <div className='w-full bg-auto bg-center lg:bg-center h-full heroTop'>
        <div className='bg-gradient-to-b from-[#00000094] h-full w-full text-white text-center'>
            <div className='pt-[250px] lg:pt-[350px]'>
                <h1 className='text-[30px] lg:text-[72px]'>Ride Green</h1>
                <div className='mt-[32px]'>
                    <button className='hover:bg-[#00DD00] hover:border-none hover:text-black border-[2px] rounded-full px-[25px] w-fit py-[14px] transition-all duration-1000'>Our cities</button>
                    <button className='bg-[#00DD00] text-black rounded-full px-[25px] w-fit py-[14px] ml-[8px]'>Download the App</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroTop