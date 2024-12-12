import React from 'react'
import Navbar from '../../../components/common/Navbar'
import AboutBanner from '../../../components/about/AboutBanner'
import FeauturedServices from '../../../components/services/FeauturedServices'
import Footer from '../../../components/common/Footer'
import Form from '../../../components/contact/Form'
import OpeningHour from '../../../components/contact/OpeningHour'

export default function page() {
  return (
    <>

      <Navbar/>
      <AboutBanner title={"Contact Us"} image={''}/>
      <Form/>
      <OpeningHour/>
      <Footer image={''} />


    </>
  )
}
