import React from 'react'


import CardApp from '../components/CardApp'
import Container from '../components/Container'
import MapApp from '../src/assets/mapApp.png'
import ScanApp from '../src/assets/scan.png'
import RideApp from '../src/assets/ride.png'

function TheApp() {
  return (
    <div className='pt-[77px] lg:pt-[84px] pb-[56px] lg:pb-[128px] bg-[#EEEEEE]'>
       <Container >
            <div className='text-center mt-[77px] mb-[42px] md:mb-[64px]'>
                <h1 className='text-[#00B200] text-[16px] sm:text-[20px]'>The App</h1>
                <h3 className='text-[30px] sm:text-[40px]'>How to Lime</h3>
            </div>

            <div className='lg:flex items-center justify-between w-fit mx-auto lg:w-auto space-y-4 lg:space-x-3 xl:space-x-0'>
                <CardApp 
                    img={MapApp} 
                    title='Locate' 
                    txt={["Download the Lime app to find a", <br className='hidden lg:flex'/>, "vehicle."]}
                />
                <CardApp 
                    img={ScanApp} 
                    title='Scan' 
                    txt={["Scan the QR code on the vehicle to ", <br className='lg:hidden xl:flex'/>, "unlock. Learn how to ride safely in ", <br className='hidden xl:flex'/>, "the app."]}
                />

                <CardApp 
                    img={RideApp} 
                    title='Ride' 
                    txt={["Follow all traffic rules, stick to the ", <br className='lg:hidden xl:flex'/>, "streets and bike lanes where ", <br className='hidden xl:flex'/>, "legally permitted."]}
                />
            </div>
       </Container>
    </div>
  )
}

export default TheApp