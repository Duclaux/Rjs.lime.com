import React from 'react'
import Vehicles from '../blocks/Vehicles'
import TheApp from '../blocks/TheApp'
import Location from '../blocks/Location'
import Download from '../blocks/Download'
import WhyLime from '../components/WhyLime'
import LimeTimesBlog from '../components/LimeTimesBlog'

function Body() {
  return (
    <>
        <Vehicles/>
        <TheApp/>
        <Location/>
        <WhyLime/>
        <LimeTimesBlog/>
        <Download/>
    </>
  )
}

export default Body