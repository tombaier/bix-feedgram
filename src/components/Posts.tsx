import { Grid } from '@mui/material'
import Post from './Post'

export const Posts = () => {
    return (
        <Grid container>
            <Grid item container xs={12} justifyContent='center'>
                <Grid item xs={10}> 
                    <Post /> 
                </Grid>
            </Grid>
        </Grid>
    )
};