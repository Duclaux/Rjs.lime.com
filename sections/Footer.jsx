import React, { useState } from 'react'


import Container from '../components/Container'
import GreenLogo from '../src/assets/greenLogo.svg'
import GreenLime from '../src/assets/greenLime.svg'
import Twitter from '../src/assets/twitter.png'
import Facebook from '../src/assets/facebook.png'
import Linkedin from '../src/assets/linkedin.png'
import Youtube from '../src/assets/youtube.png'
import Instagram from '../src/assets/instagram.png'
import Arrow from '../src/assets/arrow.svg'


function Footer() {

    const [ cache, setCache ] = useState(false)
    const [ cache2, setCache2 ] = useState(false)
    const [ cache3, setCache3 ] = useState(false)

    const HiddenLink = () => {
        setCache(!cache)
    }

    const HiddenLink2 = () => {
        setCache2(!cache2)
    }

    const HiddenLink3 = () => {
        setCache3(!cache3)
    }
  return (
    <div className='bg-black pt-[64px] pb-[57px] lg:pt-[80px] lg:pb-[56px]'>
        <Container style='lg:flex lg:items-start lg:justify-between'>
            {/* div logo */}
            <div className='flex items-center mb-[56px] lg:mb-0'>
                <img src={GreenLogo} alt=""  className='w-[45px] h-[45px] lg:w-auto lg:h-auto'/>
                <img src={GreenLime} alt="" className='ml-[5px] lg:ml-[11px] w-[34.7px] h-[34.13px] lg:w-[57.83px] lg:h-[56.88px]'/>
            </div>


            {/* div des liens */}
            <div className='text-white lg:grid lg:grid-cols-3 lg:gap-16 lg:w-[50%]'>
                <div className='lg:col-span-1 relative flex items-center justify-between lg:inline-grid mb-[24px]'>
                    <h1 className='text-[30px] lg:text-[20px] lg:mb-[33px]'>Join Us</h1>
                    <ul className={cache ? `lg:text-[#939292] font-extralight space-y-5 top-11 opacity-100 duration-1000 w-full transition-all absolute lg:relative` : `text-[#939292] absolute space-y-5 -top-10 opacity-0 -z-10 duration-700 transition-all lg:relative lg:opacity-100 lg:z-0`}>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Careers</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Lime Times Blog</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Press</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Partners</li>
                    </ul>

                    <img src={Arrow} alt="" className={cache ? `w-[25px] h-[25px] lg:hidden cursor-pointer rotate-180 duration-500 transition-all` : `w-[30px] h-[30px] lg:hidden cursor-pointer duration-500 transition-all`} onClick={HiddenLink}/>
                </div>  

                <div className={cache ? `lg:col-span-1 mt-64 duration-500 transition-all relative flex items-center justify-between mb-[24px]` : 'lg:col-span-1 duration-500 transition-all flex items-center justify-between relative lg:inline-grid'}>
                    <h1 className='text-[30px] lg:text-[20px] mb-[24px] lg:mb-[33px]'>About</h1>
                    <ul className={cache2 ? `lg:text-[#939292] font-extralight space-y-5 top-11 opacity-100 duration-1000 w-full transition-all absolute lg:relative` : `text-[#939292] absolute space-y-5 top-0 opacity-0 -z-10 duration-700 transition-all lg:relative lg:opacity-100 lg:z-0`}>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Community</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>E-Bike</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>E-Scooter</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Sustainability</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Innovation</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Safety</li>
                    </ul>

                    <img src={Arrow} alt="" className={cache2 ? `w-[25px] h-[25px] lg:hidden cursor-pointer rotate-180 duration-500 transition-all` : `w-[30px] h-[30px] lg:hidden cursor-pointer duration-500 transition-all`} onClick={HiddenLink2}/>
                </div> 

                <div className={cache2 ? `lg:col-span-1 mt-[355px] duration-500 transition-all relative flex items-center justify-between lg:inline-grid` : 'lg:col-span-1 duration-500 transition-all flex items-center justify-between relative lg:inline-grid'}>
                    <h1 className='text-[30px] lg:text-[20px] mb-[24px] lg:mb-[33px]'>Programs</h1>
                    <ul className={cache3 ? `lg:text-[#939292] font-extralight space-y-5 top-11 opacity-100 duration-1000 w-full transition-all absolute lg:relative` : `text-[#939292] absolute space-y-5 top-0 opacity-0 -z-10 duration-700 transition-all lg:relative lg:opacity-100 lg:z-0`}>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Community</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>E-Bike</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>E-Scooter</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Sustainability</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Innovation</li>
                        <li className='text-[20px] lg:text-[14px] border-b-[1px] border-[#939292] pb-3 lg:border-none lg:pb-0'>Safety</li>
                    </ul>

                    <img src={Arrow} alt="" className={cache3 ? `w-[25px] h-[25px] lg:hidden cursor-pointer rotate-180 duration-500 transition-all` : `w-[30px] h-[30px] lg:hidden cursor-pointer duration-500 transition-all`} onClick={HiddenLink3}/>
                </div>               
            </div>

            {/* div des reseaux */}
            <div className={cache3 ? `lg:text-[#939292] text-white mt-[355px] duration-500 transition-all` : `lg:text-[#939292] text-white duration-500 transition-all`}>
                <h1 className='text-[30px] lg:text-[20px] mb-[24px] lg:mb-[33px]'>Find Location</h1>
                <h1 className='text-[30px] lg:text-[20px] mb-[24px] lg:mb-[33px]'>Get help</h1>
                <h1 className='text-[30px] lg:text-[20px] mb-[24px] lg:mb-[33px]'>Sitemap</h1>

                <div className='flex items-center space-x-5'>
                    <img src={Twitter} alt="" className='w-[32px] h-[32px]'/>
                    <img src={Facebook} alt="" className='w-[32px] h-[32px]'/>
                    <img src={Linkedin} alt="" className='w-[32px] h-[32px]'/>
                    <img src={Youtube} alt="" className='w-[32px] h-[32px]'/>
                    <img src={Instagram} alt="" className='w-[32px] h-[32px]'/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer