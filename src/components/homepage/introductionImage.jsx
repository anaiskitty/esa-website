import React from 'react';
import { Box, Typography} from '@mui/material';
import heroImage from './../../../src/images/latin.png'; 

const IntroductionImage = () => {
  return (
    <Box 
      sx={{
        position: 'relative',
        height: '600px',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <Box 
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '0 16px',
        }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            mb: 2,
            fontFamily: '"DM Serif Text", serif' // Apply DM Serif Text font
          }}
        >
          European Students Association
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 4,
            fontFamily: '"DM Serif Text", serif' // Apply DM Serif Text font
          }}
        >
          
        </Typography>
      </Box>
    </Box>
  );
};

export default IntroductionImage;