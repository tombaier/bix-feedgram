import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Reset from './pages/Reset'
import AddPost from './pages/AddPost'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
      <div>
        <Routes>
          <Route path='' element={<Feed />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/addPost' element={<AddPost />} />
        </Routes>
      </div>
  )    
}

export default App;
