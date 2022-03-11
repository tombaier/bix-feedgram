import { Box, Paper } from '@mui/material'
import { Center } from '../components/Center'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Logout } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import { HeaderMain } from '../components/HeaderMain'
import { auth, logout } from '../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Profile = () => {
    const [user] = useAuthState(auth);
    
    return(
        <>
            <HeaderMain />
            <Center sx={{marginTop: '12px'}}>
                <Avatar
                    alt="Placeholder"
                    sx={{ width: 128, height: 128, marginBottom: '10px'}} 
                />
                <Typography
                    variant='h6'
                    textAlign='center'
                    color='textSecondary'
                >
                    {user?.displayName}
                    <br />
                    {user?.email}
                </Typography>

                <Box p={{ xs: 10, md: 4 }}>
                    <Paper>
                        <Box p={5}>
                                <Typography color='textSecondary' component='div'>
                                    This application is a demo version.
                                    <br />
                                    If you find any errors in the app, please feel free to contact me:
                                    <br />
                                    <a href="mailto:tombaier27@icloud.com">Tom Baier</a>
                                </Typography>
                        </Box>
                    </Paper>
                </Box>

                <Link to='/login'>
                    <IconButton sx={{ width: 40, height: 40 }} onClick={logout} >
                        <Logout/>
                    </IconButton>
                </Link>


            </Center>
        </>
    )
}

export default Profile;