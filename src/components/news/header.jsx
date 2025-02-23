
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img src="https://placehold.co/200x50?text=Schwarzman+Scholars" alt="Schwarzman Scholars Logo" style={{ marginRight: '10px', height: '40px' }} />
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>News</Button>
          <Button color="inherit">Programs</Button>
          <Button color="inherit">Apply</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
