import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Box, Button, makeStyles, TextField, Grid, Paper, styled } from '@material-ui/core'
import Post from '../components/Post'
import InfiniteScroll from 'react-infinite-scroll-component'

const Feed = () => {
    return(
        <Box>
            <Typography color="inherit" align="center">
                <Post />
            </Typography>
        </Box>
    )
}

export default Feed;