import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Container from './Container'

import Img1 from '../src/assets/img1.png'
import Img2 from '../src/assets/img2.png'
import Img3 from '../src/assets/img3.png'
import CardBlog from './CardBlog';

function Partie() {

  const items = [
    <CardBlog 
        img={Img1} 
        title='Sustainability' 
        text={[ "With Our Industry-Leading", <br/>, "Net-Zero Target Validated" , <br/>, "Our Hard Work Continues" ]}
        // styles='mx-[3px] uppercase text-[#00DD00] text-[16px]'
        text2='by Andrew Savage | January 16, 2024'
        styles2=''
    />,

    <CardBlog 
        img={Img2}
        text={[ "Hero of the Month: Respire" ]}
        styles='relative h-[216px]'
        text2='January 10, 2024'
        styles2='absolute bottom-0'
    />,

    <CardBlog 
        img={Img3} 
        text={[ "Lime Recaps 2023 With Its", <br/>, "Annual ​‘Ride Replay’"]}
        styles='relative h-[216px]'
        text2='December 13, 2023'
        styles2='absolute bottom-0'
    />,
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
    <div className='bg-[#1E1E1E]'>
      <Container style='py-[45px] lg:py-[80px]'>

        <div className='text-center mt-[77px] mb-[42px] md:mb-[64px]'>
            <h1 className='text-[#00B200] text-[16px] sm:text-[20px]'>Why Lime</h1>
            <h3 className='text-[30px] sm:text-[40px] text-white'>Our Core Principles</h3>
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