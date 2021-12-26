import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Gift=()=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
    
        <CardMedia
          component="img"
          height="200"
          image="./SSGP0149.JPG"
          alt="PICTUR"
        />
        <CardContent >
            <div></div>
          <Typography borderRadius="16%"  sx={{ borderRadius: 16}} gutterBottom variant="h5" component="div">
            BRUNCH
          </Typography>
        </CardContent>
      
    </Card>
  );
}
export default Gift;