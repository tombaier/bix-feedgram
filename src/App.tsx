import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Box from './components/Box'


const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <br/>
      <Login />
    </Box> 
  )    
}

export default App;
