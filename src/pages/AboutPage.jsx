import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from "../components/PageHeader";
import servicesBg from "../assets/pageheader.jpg";
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <Navbar/>
      <PageHeader
        title="About Us"
        subtitle="We Build Your Dreams Into Reality"
        bgImage={servicesBg}
      />
      <About/>


      <Footer/>
    </>
  )
}

export default AboutPage;
