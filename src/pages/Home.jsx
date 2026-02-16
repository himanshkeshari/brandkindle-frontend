import React from 'react'
import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";



const Home = () => {
  return (
    <div>
       <Hero />
             <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />

       

      
    </div>
  )
}

export default Home
