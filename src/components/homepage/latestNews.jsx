"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NightGlow from './../../../src/images/NightGlow.png';
import Halloween from './../../../src/images/DSCN0026.JPG';
import Guide from './../../../src/images/halloween1.png';

const newsItems = [
  {
    id: 1,
    title: "ESA and USSA's recent Halloween event",
    date: "November 2, 2024",
    image: Halloween
  },
  {
    id: 2,
    title: "Night Glow by ESA",
    date: "September 28, 2024",
    image: NightGlow
  },
  {
    id: 3,
    title: "Welcome new students - a guide by ESA",
    date: "August 22, 2024",
    image: Guide
  }
];

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Racing Sans One, sans-serif', // Set the font family
  },
});

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <ThemeProvider theme={theme}> {/* Wrap with ThemeProvider */}
      <section style={{ padding: '16px', backgroundColor: '#ebf2fe' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Latest News
          </Typography>
          <div style={{ position: 'relative' }}>
            <Card>
              <CardContent style={{ padding: 0 }}>
                <div style={{ position: 'relative', height: '400px' }}>
                  <img
                    src={newsItems[currentSlide].image}
                    alt={newsItems[currentSlide].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: ' 16px'
                  }}>
                    <Typography variant="h6" gutterBottom>
                      {newsItems[currentSlide].title}
                    </Typography>
                    <Typography variant="body2">
                      {newsItems[currentSlide].date}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button
              variant="outlined"
              style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', zIndex: 10 }}
              onClick={prevSlide}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              variant="outlined"
              style={{ position: 'absolute', top: '50%', right: '16px', transform: 'translateY(-50%)', zIndex: 10 }}
              onClick={nextSlide}
            >
              <ChevronRightIcon />
            </Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            {newsItems.map((_, index) => (
              <Button
                key={index}
                style={{
                  height: '8px',
                  width: '8px',
                  borderRadius: '50%',
                  margin: '0 4px',
                  backgroundColor: index === currentSlide ? '#3f51b5' : '#ccc'
                }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default LatestNews;