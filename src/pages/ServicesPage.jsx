import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from "../components/PageHeader";
import servicesBg from "../assets/pageheader.jpeg";
import ServicesComponent from '../components/Services';

const ServicesPage = () => {
  return (
    <>
    <Navbar/>
    <PageHeader
        title="Our Services"
        subtitle="We Provide Professional Construction & Development Solutions"
        bgImage={servicesBg}
      />
      <ServicesComponent/>
    <Footer/>
    
    </>
  )
}

export default ServicesPage