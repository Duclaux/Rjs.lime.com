import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import CardCity from './CardCity'
import Container from './Container'

import Safety from '../src/assets/safety.png'
import Sustainability from '../src/assets/sustainability.png'
import Community from '../src/assets/community.png'

function Partie() {

  const items = [
    <CardCity img={Safety} link='https://www.visittheusa.fr/destination/new-york' title='safety' styles='mx-[3px] uppercase'/>,
    <CardCity img={Sustainability} link='https://www.visittheusa.fr/destination/new-york' title='sustainability' styles='mx-[3px] uppercase'/>,
    <CardCity img={Community} link='https://www.visittheusa.fr/destination/new-york' title='community' styles='mx-[3px] uppercase'/>,
  ]

  const responsive={
    0:{
      items:1
    },
    1024:{
      items:3
    }
  }

  return (
    <div>
      <Container style='py-[45px] lg:py-[80px]'>

        <div className='text-center mt-[77px] mb-[42px] md:mb-[64px]'>
            <h1 className='text-[#00B200] text-[16px] sm:text-[20px]'>Why Lime</h1>
            <h3 className='text-[30px] sm:text-[40px]'>Our Core Principles</h3>
        </div>

        <AliceCarousel
          items={items}
          mouseTracking={true}
          infinite={true}
          responsive={responsive}
          autoPlayInterval={1000}
        /> 

      </Container>
    </div>
  )
}

export default Partie