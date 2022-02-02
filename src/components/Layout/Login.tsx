import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Box, Button, makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    style: {
        width: 375,
        display: 'flex',
        alignItems: 'center',
        textAlign:'center', 
        justifyContent: 'center',
    },
    btn: {
        width: 375,
        display: 'flex',
        justifyContent: 'center',
    }
}))


const Login = () => {
    const classes = useStyles();

    return(
        <Box>
            <Typography color="inherit">
                <TextField
                    id="email-input"
                    label="E-Mail"
                    className={classes.style}
                />
                <br/>
                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    className={classes.style}
                />
                <br/>
                <br/>
                <Button 
                    variant="contained" 
                    className={classes.btn}
                    color="secondary"
                >
                    LogIn
                </Button>
            </Typography>
        </Box>
    )
}
export default Login;