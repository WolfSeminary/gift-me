
import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
//import Link from '@mui/material/Link';
import { Route,Routes ,Link} from "react-router-dom";
import Categories from './Categories';
import Gifts from './Gifts';
const Navigation=()=>{
return(
<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" to="categories">
  categories
  </Link>
  <Link underline="hover" color="inherit" to="gifts">
  gifts
  </Link>
  <Typography color="text.primary">gift{/*Replace with the gift name*/}</Typography>
  <Routes>
    <Route path="categories" element={<Categories/>}/>
    <Route path="gifts" element={<Gifts/>}/>
  </Routes>
</Breadcrumbs>


//<Breadcrumbs aria-label="breadcrumb">
  //<Link underline="hover" color="inherit" href="./Categories">
 // categories
 // </Link>
  //<Link underline="hover" color="inherit" href="./Gifts">
  //gifts
 // </Link>
 // <Typography color="text.primary">gift{/*Replace with the gift name*/}</Typography>
//</Breadcrumbs>
)}
export default Navigation;