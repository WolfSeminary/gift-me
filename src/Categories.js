import React, { useState } from 'react';
import Category from './Category';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Categories = () => {    
    const [categories, setCategories] = useState([
        {id:1,name:'Food',image:"./images/food"},
        {id:2,name:'Attractions',image:"./images/Attractions"},
        {id:3,name:'Gift Cards',image:"./images/Gift Cards"},
        {id:4,name:'Toys',image:"./images/Toys"}
    ]);
    
    return (<>
        <Box sx={{ flexGrow: 1 ,margin:3}}>
            <Grid container spacing={2}>
                {
                    categories.map((item) =>
                        <Grid key={item.id} textAlign={'center'} item xs={6} md={6} >
                           <Category category={item}/>
                        </Grid>)
                }
            </Grid>
        </Box>
    </>);
}

export default Categories;
