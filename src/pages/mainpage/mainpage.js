import React from 'react';
import Header from '../../components/header/Header';
import PricingBox from '../../components/Cards/Cards';
import Title from '../../components/Cards/Title';

const MainPage = () => {
  return (
    <div className='bg-black'>
      <Header />
      <Title />
      <PricingBox />
    </div>
  );
};

export default MainPage;
