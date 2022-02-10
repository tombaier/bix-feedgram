import React from 'react'
import { Box, Paper } from '@material-ui/core'
import { Center } from '../components/Center'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Logout } from '@mui/icons-material'

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
                <p> Username </p>
                <p> Mail </p>
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
            <Logout 
                sx={{ width: 24, height: 24 }}
            />
        </Center>
    )
}

export default Profile;