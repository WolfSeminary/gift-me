import * as React from 'react';
import { CardContent, Typography, CardMedia, Card } from '@mui/material';

const GiftPreview = ({ info }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={info.name}
                height="140"
                image={info.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {info.id}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default GiftPreview;