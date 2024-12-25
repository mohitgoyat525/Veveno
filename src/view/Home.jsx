import React from 'react'
import ClientsCard from '../components/ClientsCard';
import Features from '../components/Features';
import GrowthPatners from '../components/GrowthPatners';
import Hero from '../components/Hero';
import Marketing from '../components/Marketing';
import PrimaryInput from '../components/PrimaryInput';
import ResultSlider from '../components/ResultSlider';

const Home = () => {
  return (
      <div>
          <Hero />
          <Features />
          <ClientsCard />
          <Marketing />
          <PrimaryInput />
      <GrowthPatners />
      <ResultSlider/>
      </div>
  )
}

export default Home