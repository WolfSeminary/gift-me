
import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
const Navigate=()=>{
return(
<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="./Categories">
  categories
  </Link>
  <Link underline="hover" color="inherit" href="./Gifts">
  gifts
  </Link>
  <Typography color="text.primary">gift{/*Replace with the gift name*/}</Typography>
</Breadcrumbs>)}
export default Navigate;