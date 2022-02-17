import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, TextField, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'


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
                <Box className='style'>
                    <Link to='/feed'>
                        <Button 
                            variant="contained" 
                            color="secondary"
                        >
                            Login
                        </Button>
                    </Link>
                </Box>
                <br/>
                <Link to='/signup'>You don't have an account yet? Sign up!</Link>
            </Typography>
        </Box>
    )
}

export default Login;