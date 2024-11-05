import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram'; 
import logo from './../../../src/images/logo2.png'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#131836', color: 'white', padding: '32px 0' }}> {/* Dark blue color */}
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={logo}
              alt="European Students Association Logo"
              style={{ height: '120px', marginBottom: '16px' }}
            />
            <Typography variant="body2">
              European Students Association
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <NavLink to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</NavLink>
              </li>
              <li>
                <NavLink to="/events" style={{ color: 'inherit', textDecoration: 'none' }}>Events</NavLink>
              </li>
              <li>
                <NavLink to="/archive" style={{ color: 'inherit', textDecoration: 'none' }}>Archive</NavLink>
              </li>
              <li>
                <NavLink to="/merch" style={{ color: 'inherit', textDecoration: 'none' }}>Merch</NavLink>
              </li>
              <li>
                <NavLink to="/board" style={{ color: 'inherit', textDecoration: 'none' }}>Board</NavLink>
              </li>
              <li>
                <NavLink to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">European Students Association, Tsinghua University</Typography>
            <Typography variant="body2">Beijing 100084, China</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton href="#" target="_blank" rel="noopener noreferrer" color="inherit">
                <FacebookIcon />
                <span className="sr-only">Facebook</span>
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener noreferrer" color="inherit">
                <TwitterIcon />
                <span className="sr-only">Twitter</span>
              </IconButton>
              <IconButton href="https://www.linkedin.com/company/thuesa" target="_blank" rel="noopener noreferrer" color="inherit">
                <LinkedInIcon />
                <span className="sr-only">LinkedIn</span>
              </IconButton>
              <IconButton href="https://www.instagram.com/tsinghua.europe" target="_blank" rel="noopener noreferrer" color="inherit">
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} borderTop={1} borderColor="divider" pt={2} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} European Students Association. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;