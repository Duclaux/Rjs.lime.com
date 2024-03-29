import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import CardCity from './CardCity'
import Container from './Container'

import NewYork from '../src/assets/newYork.png'
import SanFancisco from '../src/assets/sanFrancisco.png'
import Washington from '../src/assets/washington.png'

function Partie() {

  const items = [
    <CardCity img={NewYork} link='https://www.visittheusa.fr/destination/new-york' title='New York' styles='mx-[3px]'/>,
    <CardCity img={SanFancisco} link='https://www.visittheusa.fr/destination/new-york' title='San Fancisco' styles='mx-[3px]'/>,
    <CardCity img={Washington} link='https://www.visittheusa.fr/destination/new-york' title='Washington' styles='mx-[3px]'/>,
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
            <h1 className='text-[#00B200] text-[16px] sm:text-[20px]'>Locations</h1>
            <h3 className='text-[30px] sm:text-[40px]'>Our U.S. Cities</h3>
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