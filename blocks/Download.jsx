import React from 'react'

import Container from '../components/Container'
import Phone from '../src/assets/phone.png'
import Play from '../src/assets/playstore.png'
import Pomme from '../src/assets/pomme.svg'

function Download() {
  return (
    <div className='pt-[112px] pb-[96px] lg:py-[95px] bg-[#1A1A1A]'>
        <Container style=''>
            <div className='lg:flex items-center lg:justify-between xl:justify-normal xl:space-x-[200px] space-y-10 lg:space-y-0'>
                <div className='w-fit mx-auto lg:w-auto'>
                    <img src={Phone} alt="" className=''/>
                </div>

                <div className='text-white space-y-5 w-fit mx-auto lg:w-auto'>
                    <h1 className='text-[30px] lg:text-[40px] font-bold'>Download the App</h1>

                    <div className='flex items-center space-x-7'>
                        <button className='border-[2px] border-[#A6A6A6] rounded-[20px] py-[10px] px-[17px] flex items-center text-start'>
                            <img src={Pomme} alt="" className='w-[35px] h-[37px] mr-[10px]'/>
                            <div>
                                <h1 className='text-[10px] md:text-[15px]'>Download on</h1>
                                <h1 className='text-[13px] md:text-[20px] font-bold'>App Store</h1>
                            </div>
                        </button>

                        <button className='border-[2px] border-[#A6A6A6] rounded-[20px] py-[10px] px-[17px] flex items-center text-start'>
                            <img src={Play} alt="" className='w-[35px] h-[37px] mr-[10px]'/>
                            <div>
                                <h1 className='text-[10px] md:text-[15px] uppercase'>Get it on</h1>
                                <h1 className='text-[13px] md:text-[20px] font-bold'>Google Play</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Download