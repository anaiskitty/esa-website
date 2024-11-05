
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import NewsCard from './NewsCard';

const mockNews = [
  {
    id: 1,
    title: 'Schwarzman Scholars Announces Class of 2024',
    date: 'December 7, 2022',
    image: 'https://placehold.co/600x400?text=Class+of+2024',
    excerpt: `Schwarzman Scholars has announced its eighth class. The 151 Schwarzman Scholars were selected from over 3,000 applicants and include students from 36 countries and 121 universities.`
  },
  {
    id: 2,
    title: 'Schwarzman Scholars Holds Fifth Reunion',
    date: 'October 15, 2022',
    image: 'https://placehold.co/600x400?text=Fifth+Reunion',
    excerpt: `Over 500 Schwarzman Scholars alumni gathered in New York City for the program's fifth reunion, celebrating the growing impact of the Schwarzman Scholars network.`
  },
  {
    id: 3,
    title: 'Schwarzman Scholars Launches New Leadership Program',
    date: 'September 1, 2022',
    image: 'https://placehold.co/600x400?text=Leadership+Program',
    excerpt: `Schwarzman Scholars announces a new executive leadership program aimed at mid-career professionals seeking to enhance their global leadership skills.`
  }
];

const NewsGrid = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Latest News
      </Typography>
      <Grid container spacing={4}>
        {mockNews.map((news) => (
          <Grid item xs={12} key={news.id}>
            <NewsCard
              title={news.title}
              date={news.date}
              image={news.image}
              excerpt={news.excerpt}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsGrid;
