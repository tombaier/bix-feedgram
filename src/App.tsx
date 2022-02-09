import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import HeaderStart from './components/HeaderStart';
import HeaderMain from './components/HeaderMain';
import Box from './components/Box'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <HeaderMain />
      <br/>
      <main>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
    </Box>

       
  )    
}

export default App;
