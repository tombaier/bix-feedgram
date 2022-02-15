import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import HeaderMain from './components/HeaderMain'
import { HeaderBase } from './components/HeaderBase'
import Box from './components/Box'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <HeaderMain />
      <br/>
      <main>
        <Routes>
          <Route path='' element={<Feed />} />
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
