import React from 'react';
import { CardContent, Typography, CardMedia,Card } from '@mui/material';



const Category=({category})=> {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={category.name}
                height="140"
                image={category.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {category.name}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default Category;
