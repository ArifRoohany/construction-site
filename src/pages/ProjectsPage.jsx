import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from "../components/PageHeader";
import pageHeaderBg from "../assets/pageheader.jpg"; 
import Projects from '../components/Projects';


const ProjectsPage = () => {
  return (
    <>
      <Navbar/>
      <PageHeader
        title="Our Projects"
        subtitle="Check Out Our Latest Works"
        bgImage={pageHeaderBg}
      />
      <Projects/>
      <Footer/>
    </>
  )
}

export default ProjectsPage
