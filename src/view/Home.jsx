import React from 'react'
import ClientsCard from '../components/ClientsCard';
import Features from '../components/Features';
import GrowthPatners from '../components/GrowthPatners';
import Hero from '../components/Hero';
import Marketing from '../components/Marketing';
import PrimaryInput from '../components/PrimaryInput';
import ResultSlider from '../components/ResultSlider';
import LearnFrom from '../components/LearnFrom';
import Footer from '../common/Footer';
import ThreeCards from '../components/ThreeCards';

const Home = () => {
  return (
      <div>
          <Hero />
          <Features />
          <ClientsCard />
          <Marketing />
          <PrimaryInput />
      <GrowthPatners />
      <ResultSlider />
      <LearnFrom />
      <ThreeCards/>
      <Footer/>
      </div>
  )
}

export default Home