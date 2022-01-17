import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{margin:0}}>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            Gift Me-Your gifts store
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;