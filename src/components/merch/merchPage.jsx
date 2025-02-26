import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import MerchItem from './merchItem';
import Footer from '../homepage/footer';
import Header from "../navigation";
import merch1 from "./../../../src/images/merch1.png";
import merch2 from "./../../../src/images/merch2.png";
import merch3 from "./../../../src/images/merch3.png";
import merch4 from "./../../../src/images/merch4.png";

const merchItems = [
  { id: 1, name: 'T-Shirt #1', primaryImage: merch1, secondaryImage: merch2 },
  { id: 2, name: 'T-Shirt #2', primaryImage: merch2, secondaryImage: merch1 },
  { id: 3, name: 'T-Shirt #3', primaryImage: merch3, secondaryImage: merch2 },
  { id: 4, name: 'T-Shirt #4', primaryImage: merch4, secondaryImage: merch2 },
];

const MerchPage = () => {
  return (
    <div>
      <Header />
      <main style={{ backgroundColor: '#ebf2fe', padding: '64px 0' }}>
      <Container maxWidth="lg" style={{ marginTop: '32px' }}> {/* Improved top spacing */}
        <Typography variant="h2" component="h1" align="center" gutterBottom   style={{ fontFamily: '"DM Serif Display", serif' }} className="text-center mt-5">
          Merchandise
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {merchItems.map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <MerchItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      </main>
      <Footer />
    </div>
  );
};

export default MerchPage;