import React from 'react'
import { Box, Paper } from '@mui/material'
import { Center } from '../components/Center'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Logout } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'

const Profile = () => {
    return(
        <Center>
            <Avatar
                alt="Placeholder"
                sx={{ width: 128, height: 128 }}
            />
            <Typography 
                variant='h6'
                textAlign='center'
            >
                <p> {localStorage.getItem("name")} </p>
                <p> {localStorage.getItem("email")} </p>
            </Typography> 
            
            <Box p={{xs: 2, sm: 3, md: 5}}>
                <Paper>
                    <Box p={5}>
                        <Typography
                            textAlign='center'
                        >
                            <p>
                                This application is a demo version. 
                                <br/>
                                If you find any errors in the app, please feel free to contact me:
                                <br/>
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
                    />
                </IconButton>
            </Link>
            

        </Center>
    )
}

export default Profile;