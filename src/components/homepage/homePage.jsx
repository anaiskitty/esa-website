
"use client";

import React from 'react';
import Header from './../navigation';
import HeroSection from './heroSection';
import AboutProgram from './aboutProgram';
import LatestNews from './latestNews';
import InfoEsa from './esa';
import Footer from './footer';
import IntroductionImage from './introductionImage';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <IntroductionImage />
        <AboutProgram />
        <LatestNews />
        <InfoEsa />
        <HeroSection />

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
