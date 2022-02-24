import { Box, Paper } from '@mui/material'
import { Center } from '../components/Center'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Logout } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import { HeaderMain } from '../components/HeaderMain'
import { auth, db, logout } from '../services/firebase'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { query, collection, getDocs, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [user, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const results = await getDocs(q);
            const data = results.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert ("An error occurred while fetching user data");
        }
    };

    useEffect (() => {
        if (!user) return navigate("/login");
        fetchUserName();
    }, [user]);
    
    return(
        <>
            <HeaderMain />
            <Center sx={{marginTop: '12px'}}>
                <Avatar
                    alt="Placeholder"
                    sx={{ width: 128, height: 128 }} />
                <Typography
                    variant='h6'
                    textAlign='center'
                >
                    <p> {name} </p>
                    <p> {user?.email} </p>
                </Typography>

                <Box p={{ xs: 2, sm: 3, md: 5 }}>
                    <Paper>
                        <Box p={5}>
                            <Typography
                                textAlign='center'
                            >
                                <p>
                                    This application is a demo version.
                                    <br />
                                    If you find any errors in the app, please feel free to contact me:
                                    <br />
                                    <a href="mailto:tombaier27@icloud.com">Tom Baier</a>
                                </p>
                            </Typography>
                        </Box>
                    </Paper>
                </Box>

                <Link to='/login'>
                    <IconButton>
                        <Logout
                            sx={{ width: 40, height: 40 }} 
                            onClick={logout} />
                    </IconButton>
                </Link>


            </Center>
        </>
    )
}

export default Profile;