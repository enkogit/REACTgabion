import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Products from '../components/Products';
import Calculator from '../components/Calculator';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import TrustBar from '../components/TrustBar';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <Services />
      <Products />
      <Calculator />
      <HowItWorks />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;