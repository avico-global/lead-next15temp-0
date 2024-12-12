import React from 'react'
import About from '../../../components/home/About'
import Navbar from '../../../components/common/Navbar'
import AboutBanner from '../../../components/about/AboutBanner'
import OurJourney from '../../../components/about/OurJourney'
import OurNumbers from '../../../components/about/OurNumbers'
import Choose from '../../../components/about/Choose'
import Footer from '../../../components/common/Footer'

export default function AboutUs() {
  return (
    <>
    <Navbar/>
    <AboutBanner title={"About Us"}  image="" />
    <OurJourney/>
    <OurNumbers/>
    <Choose image=""/>
    <Footer image='' />



    </>
  )
}
