import React from 'react';
import Header from '../../components/header/Header';
import PricingBox from '../../components/Cards/Cards';
import Title from '../../components/Cards/Title';
import Testimonials from '../../components/Testimonials/Testimonials';
import bg from '../../assets/images/bg_1.jpg'; 
import Footer from '../../components/footer/Footer';
import About from '../../components/aboutme/About';

const MainPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, minHeight: '100vh', backgroundSize: 'cover' }}>
      <Header />
      <Title />
      <PricingBox />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default MainPage;
