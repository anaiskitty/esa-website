
import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.grey[200],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Schwarzman Scholars is a highly selective, one-year master's program at Tsinghua University in Beijing.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@schwarzmanscholars.org
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 (212) 903-4301
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/SchwarzmanScholars" color="inherit">
              Facebook
            </Link>
            <br />
            <Link href="https://twitter.com/SchwarzmanOrg" color="inherit">
              Twitter
            </Link>
            <br />
            <Link href="https://www.linkedin.com/company/schwarzman-scholars" color="inherit">
              LinkedIn
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.schwarzmanscholars.org/">
              Schwarzman Scholars
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
