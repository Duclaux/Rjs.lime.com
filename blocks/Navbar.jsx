import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


import Container from '../components/Container'
import Logo from '../src/assets/logo.svg'
import Lime from '../src/assets/lime.svg'
import Usa from '../src/assets/usa.svg'

function Navbar() {

  const [ nav, setNav ] = useState(false)

  const shown = () => {
    setNav(!nav)
  }

  return (
    <>
    <Container style='absolute top-0 left-1/2 -translate-x-[50%]'>
        {/* div principale */}
        <div className="py-[36px] flex items-center justify-between">
          {/* div des logo et langue*/}
          <div className='flex items-center'>
            {/* div pour logo */}
            <div className='flex items-center'>
              <img src={Logo} alt="" className='w-[31.81px] h-[31.27px] lg:w-[40.48px] lg:h-[39.81px]'/>
              <img src={Lime} alt="" className='ml-[5px] lg:ml-[11px] w-[47.35px] h-[15.56px] lg:w-[60.26px] lg:h-[19.81px]'/>
            </div>

            {/* div pour la langue */}
            <button className='flex items-center py-[9px] px-[8px] border-[2px] border-gray-400 rounded-lg ml-[20px] lg:ml-[40px]'>
              <img src={Usa} alt="" />
              <p className='text-white text-[14px] ml-[8px]'>EN</p>
            </button>
          </div>

          {/* lien en mode plein ecran */}
          <ul className='hidden lg:flex text-white items-center justify-between w-[70%]'>
            <li>
              <a href="#" className='text-[14px]'>About Us</a>
            </li>

            <li>
              <a href="#" className='text-[14px]'>Why Lime</a>
            </li>

            <li>
              <a href="#" className='text-[14px]'>Vehicles</a>
            </li>

            <li>
              <a href="#" className='text-[14px]'>Locations</a>
            </li>

            <li>
              <a href="#" className='text-[14px]'>Advertise</a>
            </li>

            <li>
              <a href="#" className='text-[14px]'>Blog</a>
            </li>

            <li>
              <a href="#" className='text-[14px]'>Help</a>
            </li>

            <li className='bg-[#00DD00] rounded-full px-[25px] py-[14px]'>
              <a href="#" className='text-[14px] text-black'>Download App</a>
            </li>
          </ul>

          <div onClick = {shown} className='lg:hidden'>
            {
              !nav ? 
              <AiOutlineMenu 
                size={35}
                color='white'
              /> 
              
              :

              <AiOutlineClose 
                size={35}
                color='white'
              />
            }
          </div>
        </div>
    </Container>

    {/* lienks en responsive */}
    <ul className={nav?'lg:hidden text-white absolute bg-black h-full w-[60%] top-0 left-0 pl-12 pt-12 transition-all duration-700' : 'lg:hidden text-white absolute bg-black h-full w-[60%] top-0 -left-full pl-12 pt-12 transition-all duration-700'}>
    <div className='flex items-center'>
      <img src={Logo} alt="" className='w-[31.81px] h-[31.27px] lg:w-[40.48px] lg:h-[39.81px]'/>
      <img src={Lime} alt="" className='ml-[5px] lg:ml-[11px] w-[47.35px] h-[15.56px] lg:w-[60.26px] lg:h-[19.81px]'/>
    </div>
    <li className='mt-10'>
      <a href="#" className='text-[14px]'>About Us</a>
    </li>

    <li className='mt-10'>
      <a href="#" className='text-[14px]'>Why Lime</a>
    </li>

    <li className='mt-10'>
      <a href="#" className='text-[14px]'>Vehicles</a>
    </li>

    <li className='mt-10'>
      <a href="#" className='text-[14px]'>Locations</a>
    </li>

    <li className='mt-10'>
      <a href="#" className='text-[14px]'>Advertise</a>
    </li>

    <li className='mt-10'>
      <a href="#" className='text-[14px]'>Blog</a>
    </li>

    <li className='mt-10'>
      <a href="#" className='text-[14px]'>Help</a>
    </li>

    <li className='bg-[#00DD00] rounded-full px-[25px] w-fit py-[14px] mt-10'>
      <a href="#" className='text-[14px] text-black'>Download App</a>
    </li>
  </ul>
  </>
  )
}

export default Navbar