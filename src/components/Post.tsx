import React from 'react'
import { Box, Button, makeStyles, TextField, Grid } from '@material-ui/core'
import Postcard from './Postcard'

function Post() {
    return (
        <Grid container>
            <Grid item container xs={12} justifyContent='center'>
                <Grid item xs={10}> <Postcard /> </Grid>
            </Grid>
        </Grid>
    )
}

export default Post;