import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Button, Typography } from '@mui/material';

const MerchItem = ({ name, primaryImage, secondaryImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <CardMedia
        component="img"
        height="240" // Fixed height for rectangular images
        image={isHovered ? secondaryImage : primaryImage} // Switch image based on hover state
        alt={name}
        style={{ objectFit: 'cover', height: '100%' }} // Ensure the image covers the area
      />
      <CardContent>
        <Typography variant="h5" component="div" style={{ fontFamily: 'Racing Sans One, sans-serif' }}>
          {name}
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Button variant="outlined" style={{ marginTop: '16px', width: '100%', fontFamily: 'Roboto, sans-serif', color: 'inherit' }}>
            Buy Now
          </Button>
          <Button variant="outlined" style={{ marginTop: '8px', width: '100%', fontFamily: 'Roboto, sans-serif', color: 'inherit' }}>
            View More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MerchItem;