import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Gift = ({ gift }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>

      <CardMedia
        component="img"
        height="200"
        image={gift.giftImage}
        alt={gift.giftName}
      />
      <CardContent >
        <div></div>
        <Typography borderRadius="16%" sx={{ borderRadius: 16 }} gutterBottom variant="h5" component="div">
          {gift.giftName}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default Gift;
