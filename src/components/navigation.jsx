import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const navigationStyle = {
    backgroundColor: '#dbe7f4', // Background color for the navigation
    padding: '10px', // Padding for the navigation
    display: 'flex', // Use flexbox for layout
    justifyContent: 'space-between', // Space out the items evenly
    alignItems: 'center', // Center items vertically
  };

  const logoStyle = {
    width: '200px',
    height: 'auto',
    marginLeft: '20px', // Add margin to the left of the logo
  };

  const brandStyle = {
    fontFamily: "'DM Serif Display', serif", // Font family for the brand
    fontSize: '32px', // Font size for the brand
    color: '#131836', // Text color for the brand
  };

  const linkStyle = {
    color: '#131836', // Text color for the links
    textDecoration: 'none', // Remove underline from links
    margin: '0 10px', // Margin between links
  };

  const dividerStyle = {
    margin: '0 5px', // Margin for the divider
    height: '20px', // Height of the divider
    width: '1px', // Width of the divider
    backgroundColor: '#131836', // Color of the divider
  };

  return (
    <div style={navigationStyle}>
      <img
        src={require('./../../src/images/logo2.png')}
        alt="European Students Association Logo"
        style={logoStyle} // Apply the logo style
      />
      <NavLink to="/" style={brandStyle}>
        European Students Association
      </NavLink>
      <ul style={{ display: 'flex', alignItems: 'center', listStyleType: 'none', padding: 0, margin: 0 }}>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" style={linkStyle}>
            About Us
          </NavLink>
        </li>
        <div style={dividerStyle} />
        <li className="nav-item">
          <NavLink className="nav-link" to="/events" style={linkStyle}>
            Events
          </NavLink>
        </li>
        <div style={dividerStyle} />
        <li className="nav-item">
          <NavLink className="nav-link" to="/merch" style={linkStyle}>
            Merchandise
          </NavLink>
        </li>
        <div style={dividerStyle} />
        <li className="nav-item">
          <NavLink className="nav-link" to="/archive" style={linkStyle}>
            Archive
          </NavLink>
        </li>
        <div style={dividerStyle} />
        <li className="nav-item">
          <NavLink className="nav-link" to="/board" style={linkStyle}>
            Board Members
          </NavLink>
        </li>
        <div style={dividerStyle} />
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog" style={linkStyle}>
            Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;