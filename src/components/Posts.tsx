import React from 'react'
import { Box, Button, makeStyles, TextField, Grid } from '@mui/material'
import Post from './Post'

function Posts() {
    return (
        <Grid container>
            <Grid item container xs={12} justifyContent='center'>
                <Grid item xs={10}> <Post /> </Grid>
            </Grid>
        </Grid>
    )
}

export default Posts;