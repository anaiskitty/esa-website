
import React, { useState } from 'react';
import { Grid, Card, CardMedia, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image1 from "./../../../src/images/DSCN0005.JPG";
import Image2 from "./../../../src/images/DSCN0006.JPG";
import Image3 from "./../../../src/images/DSCN0044.JPG";
import Image4 from "./../../../src/images/DSCN0030.JPG";
import Image5 from "./../../../src/images/DSCN0009.JPG";
import Image6 from "./../../../src/images/DSCN0013.JPG";
import Image7 from "./../../../src/images/DSCN0017.JPG";
import Image8 from "./../../../src/images/DSCN0020.JPG";
import Image9 from "./../../../src/images/DSCN0021.JPG";
import Image10 from "./../../../src/images/DSCN0023.JPG";
import Image11 from "./../../../src/images/DSCN0037.JPG";
import Image12 from "./../../../src/images/DSCN0041.JPG";

const EnlargeCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];

const PhotoGallery = () => {
  const [visibleImages, setVisibleImages] = useState(12);

  const loadMore = () => {
    setVisibleImages(prevVisible => prevVisible + 8);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {images.slice(0, visibleImages).map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <EnlargeCard>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`Image ${index + 1}`}
              />
            </EnlargeCard>
          </Grid>
        ))}
      </Grid>
      {visibleImages < images.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" onClick={loadMore}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PhotoGallery;
