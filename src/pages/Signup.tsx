import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, TextField, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { signInWithGoogle } from '../service/firebase'

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


const Signup = () => {
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
                <TextField id="outlined-basic" label="Mail" variant="outlined"/>
                <br/>
                <br/>
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
                <br/>
                <br/>
                <TextField id="outlined-basic" label="Password Confirmation" variant="outlined" type="password"/>
                <br/>
                <br/>
                <Box className='style'>
                    <Link to='/feed'>
                        <Button 
                            variant="contained" 
                            color="secondary"
                        >
                            Sign Up
                        </Button>
                    </Link>
                </Box>
                <br/>
                <Button 
                    variant="contained" 
                    color="inherit"
                    onClick={ signInWithGoogle }
                >
                    Sign in with Google
                </Button>
                <br />   
                <br />
                <Link to='/Login'>You already have an account? Login!</Link>
            </Typography>
        </Box>
    )
}
export default Signup;