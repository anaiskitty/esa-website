import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme to apply the font
const theme = createTheme({
  typography: {
    fontFamily: '"DM Serif Text", "Bebas Neue", "Montserrat", "Roboto", "Helvetica", "Arial", sans-serif', // Set the font
  },
});

const AboutProgram = () => {
  return (
    <ThemeProvider theme={theme}>
      <section style={{ padding: '64px 0', backgroundColor: '#ebf2fe' }}> 
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <Typography variant="h2" align="center" gutterBottom>
            About the Organization
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            European Students Association is an association at Tsinghua University led by European students to 
            connect European students with other international and Chinese students, and spread European culture.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎓</div>
                  <Typography variant="h5" gutterBottom>
                    Language Exchange
                  </Typography>
                  <Typography variant="body2">
                    Connecting individuals from many countries with buddies and mentors to help elevate their language skills.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>🌍</div>
                  <Typography variant="h5" gutterBottom>
                    Global Network
                  </Typography>
                  <Typography variant="body2">
                    Connect with an unparalleled network of peers, mentors, and leaders across sectors from many different countries.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>🚀</div>
                  <Typography variant="h5" gutterBottom>
                    Leadership Development
                  </Typography>
                  <Typography variant="body2">
                    ... put a third one... if we want
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default AboutProgram;