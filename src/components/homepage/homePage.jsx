
"use client";

import React from 'react';
import Header from './../navigation';
import HeroSection from './heroSection';
import AboutProgram from './aboutProgram';
import LatestNews from './latestNews';
import InfoEsa from './esa';
import Footer from './footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutProgram />
        <LatestNews />
        <InfoEsa />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
