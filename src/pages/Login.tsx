import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Box, Button, makeStyles, TextField, Grid, Paper, styled } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    style: {
        display: 'flex',
        alignItems: 'center',
        textAlign:'center', 
        justifyContent: 'center',
    },
    img: {
        width: 150, 
        height: 110, 
    }
}))

const Login = () => {
    const classes = useStyles();

    return(
        <Box>
            <Typography color="inherit" align="center">
                <img 
                src={`${process.env.PUBLIC_URL}/assets/logo.png`} 
                alt="logo"
                className={classes.img}/>
                <br/>
                <TextField id="outlined-basic" label="Username" variant="outlined"/>
                <br/>
                <br/>
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
                <br/>
                <br/>
                <Grid container justify="center">
                    <Button 
                        variant="contained" 
                        color="secondary"
                    >
                        Login
                    </Button>
                </Grid>
                <p>
                    <a href="#" className={classes.style}> You don't have an account yet? Sign up! </a>
                </p>
            </Typography>
        </Box>
    )
}

export default Login;