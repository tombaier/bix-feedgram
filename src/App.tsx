import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import NavBar from './components/Navbar/NavBar';
import Login from './components/Layout/Login'


const App = () => {
  return (
    <Box sx={{
      width: 375,
      height: 667,
      backgroundColor: 'primary.light',
      '&:hover': {
      backgroundColor: 'transparent',
      opacity: [0.9, 0.8, 0.7],
      },
    }}>
      <CssBaseline />
      <NavBar/>
      <Login />
    </Box> 
  )    
}

export default App;
