import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from "./../../../src/images/brazil2.png";
import { NavLink } from 'react-router-dom';

// Create a custom theme to apply the Bebas Neue font
const theme = createTheme({
  typography: {
    fontFamily: '"Bebas Neue", "Helvetica", "Arial", sans-serif', // Set Bebas Neue as the default font
  },
});

const InfoEsa = () => {
  return (
    <ThemeProvider theme={theme}>
      <section style={{ padding: '64px 0', backgroundColor: '#ebf2fe' }}>
        <Container>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center">
            <Box flex={1} mb={{ xs: 4, md: 0 }} pr={{ md: 2 }}>
              <Typography variant="h4" gutterBottom>
                European Students Association
              </Typography>
              <Typography paragraph>
                European Students Association is this... and does this... and has done this... and will do this...
              </Typography>
              <NavLink to="/about" style={{ textDecoration: 'none' }}> 
                <Button variant="contained" color="primary">
                  About the Association
                </Button>
              </NavLink>
            </Box>
            <Box flex={1}>
              <img 
                src={Image} 
                alt="European Students Association" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
            </Box>
          </Box>
        </Container>
      </section>
    </ThemeProvider>
  );
};

export default InfoEsa;