import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import Header from './components/Header';
import Box from './components/Box'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <br/>
      <main>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </main>
    </Box>

       
  )    
}

export default App;
