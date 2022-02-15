import React from 'react'
import Typography from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import Posts from '../components/Posts'

const Feed = () => {
    return(
        <Box>
            <Typography color="inherit" align="center">
                <Posts />
            </Typography>
        </Box>
    )
}

export default Feed;