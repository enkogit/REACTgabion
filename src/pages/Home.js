import React from 'react';
import PriceTable from '../components/Prices';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Products from '../components/Products';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Products />
            <PriceTable />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

