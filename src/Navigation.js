
import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
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
)}
export default Navigation;