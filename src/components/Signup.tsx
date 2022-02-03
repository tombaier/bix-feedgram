import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Box, Button, makeStyles, TextField, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    style: {
        display: 'flex',
        alignItems: 'center',
        textAlign:'center', 
        justifyContent: 'center',
    },
}))


const Signup = () => {
    const classes = useStyles();

    return(
        <Box>
            <Typography color="inherit" align="center">
                <TextField id="outlined-basic" label="Username" variant="outlined"/>
                <br/>
                <br/>
                <TextField id="outlined-basic" label="Mail" variant="outlined"/>
                <br/>
                <br/>
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
                <br/>
                <br/>
                <TextField id="outlined-basic" label="Repeat Password" variant="outlined" type="password"/>
                <br/>
                <br/>
                <Grid container justify="center">
                    <Button 
                        variant="contained" 
                        color="secondary"
                    >
                        Sign up
                    </Button>
                </Grid>
                <p>
                    <a href="#" className={classes.style}> You already have an account? Login! </a>
                </p>
            </Typography>
        </Box>
    )
}
export default Signup;