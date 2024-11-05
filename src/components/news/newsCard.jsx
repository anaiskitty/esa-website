
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const NewsCard = ({ title, date, image, excerpt }) => {
  return (
    <Card sx={{ display: 'flex', mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
      <CardMedia
        component="img"
        sx={{ width: 250, height: 250, objectFit: 'cover' }}
        image={image}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {excerpt}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button size="small" color="primary">
            Read More
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default NewsCard;
