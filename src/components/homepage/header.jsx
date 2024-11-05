import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <img
            src="https://placehold.co/200x50?text=Schwarzman+Scholars"
            alt="Schwarzman Scholars Logo"
            style={{ height: '40px' }}
          />
        </Box>
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginRight: '24px' }}>
              <NavLink 
                to="/about" 
                style={({ isActive }) => ({
                  textDecoration: 'none', 
                  color: isActive ? '#000' : '#4A4A4A'
                })}
              >
                <Typography variant="body1">About</Typography>
              </NavLink>
            </li>
            <li style={{ marginRight: '24px' }}>
              <NavLink 
                to="/experience" 
                style={({ isActive }) => ({
                  textDecoration: 'none', 
                  color: isActive ? '#000' : '#4A4A4A'
                })}
              >
                <Typography variant="body1">Experience</Typography>
              </NavLink>
            </li>
            <li style={{ marginRight: '24px' }}>
              <NavLink 
                to="/people" 
                style={({ isActive }) => ({
                  textDecoration: 'none', 
                  color: isActive ? '#000' : '#4A4A4A'
                })}
              >
                <Typography variant="body1">People</Typography>
              </NavLink>
            </li>
            <li style={{ marginRight: '24px' }}>
              <NavLink 
                to="/admissions" 
                style={({ isActive }) => ({
                  textDecoration: 'none', 
                  color: isActive ? '#000' : '#4A4A4A'
                })}
              >
                <Typography variant="body1">Admissions</Typography>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/news" 
                style={({ isActive }) => ({
                  textDecoration: 'none', 
                  color: isActive ? '#000' : '#4A4A4A'
                })}
              >
                <Typography variant="body1">News</Typography>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Button variant="contained" color="primary">Apply</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;