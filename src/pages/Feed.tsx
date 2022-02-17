import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { query, collection, getDocs, where } from 'firebase/firestore'
import Typography from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import { Posts } from '../components/Posts'
import { HeaderMain } from '../components/HeaderMain'
import { auth, db } from '../services/firebase'

const Feed = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const docs = await getDocs(q);
            const data = docs.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert ("An error occured while fetching user data");
        }
    };

    useEffect (() => {
        if (loading) return; 
        if (!user) return navigate("/login");
        fetchUserName();
    }, [user, loading]);

    return(
        <>
            <HeaderMain />
            <Box sx={{ paddingBottom: '12px' }} />
            <Box>
                <Typography color="inherit" align="center">
                    <Posts />
                </Typography>
            </Box>
        </>
    )
}

export default Feed;