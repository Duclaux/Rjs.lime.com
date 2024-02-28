import React from 'react'


import CardVehicle from '../components/CardVehicle'
import Container from '../components/Container'
import Moto1 from '../src/assets/moto1.png'
import Moto2 from '../src/assets/moto2.png'

function Vehicles() {
  return (
    <>
        <Container style='pt-[77px] lg:pt-[80px] pb-[56px] lg:pb-[80px]'>
            <div className='text-center mt-[77px] mb-[42px] md:mb-[64px]'>
                <h1 className='text-[#00B200] text-[16px] sm:text-[20px]'>Our Vehicles</h1>
                <h3 className='text-[30px] sm:text-[40px]'>Discover the Gen4</h3>
            </div>

            <div className='space-y-3 md:mx-auto md:w-fit lg:w-auto lg:space-y-0 lg:flex items-center lg:justify-evenly'>
                <CardVehicle img={Moto1} txt='E-Scooter'/>
                <CardVehicle img={Moto2} txt='E-Bike'/>
            </div>
        </Container>
    </>
  )
}

export default Vehicles