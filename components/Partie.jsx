import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';


import CardCity from './CardCity'
import Container from './Container'

import NewYork from '../src/assets/newYork.png'

function Partie() {
  return (
    <div>
      <Container style='py-[45px] lg:py-[80px]'>

        <div className='text-center mt-[77px] mb-[42px] md:mb-[64px]'>
            <h1 className='text-[#00B200] text-[16px] sm:text-[20px]'>Locations</h1>
            <h3 className='text-[30px] sm:text-[40px]'>Our U.S. Cities</h3>
        </div>
      

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >

          <SwiperSlide>
            <CardCity img={NewYork} link='https://www.visittheusa.fr/destination/new-york' title='New York'/>
          </SwiperSlide>
          <SwiperSlide>
            <CardCity img={NewYork} link='https://www.visittheusa.fr/destination/new-york' title='New York'/>
          </SwiperSlide>
          <SwiperSlide>
            <CardCity img={NewYork} link='https://www.visittheusa.fr/destination/new-york' title='New York'/>
          </SwiperSlide>
          <SwiperSlide>
            <CardCity img={NewYork} link='https://www.visittheusa.fr/destination/new-york' title='New York'/>
          </SwiperSlide>
          <SwiperSlide>
            <CardCity img={NewYork} link='https://www.visittheusa.fr/destination/new-york' title='New York'/>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  )
}

export default Partie