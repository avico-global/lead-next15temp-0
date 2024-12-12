import React from 'react'
import Navbar from '../../../components/common/Navbar'
import AboutBanner from '../../../components/about/AboutBanner'
import FeauturedServices from '../../../components/services/FeauturedServices'
import Footer from '../../../components/common/Footer'

export default function page() {
  return (
    <>
      <Navbar/>
      <AboutBanner title={"Our Services"} image={''}/>
      <FeauturedServices/>
      <Footer image={''} />


    </>
  )
}
