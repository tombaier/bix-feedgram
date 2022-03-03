import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Reset from './pages/Reset'
import AddPost from './features/posts/AddPost'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { db, auth } from './services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const isProtectedRoute = () => {
    return window.location.pathname.indexOf("login")===-1 &&
    window.location.pathname.indexOf("signup")===-1 &&
    window.location.pathname.indexOf("reset")===-1
}

export const Router = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    if(loading) {return <div> Loading ..</div>}
    if(!user && isProtectedRoute()) {navigate("/login")} 
    if(user && !isProtectedRoute()) {navigate("/feed")} 
    console.log(user)
    
    return (
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/addPost' element={<AddPost />} />
        </Routes>
    )
}