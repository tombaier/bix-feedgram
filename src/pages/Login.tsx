import Typography from '@mui/material/Typography'
import { Box, Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { HeaderBase } from '../components/HeaderBase'
import { useEffect, useState } from 'react'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import GoogleButton from 'react-google-button'
import { Center } from '../components/Center'

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/feed");
    }, [user]);

    return(
        <>
            <HeaderBase />
            <Box sx={{ paddingBottom: '8px' }} />
            <Box>
                <Typography color="inherit" align="center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                        alt="logo"
                        className={classes.img} />
                    <Box sx={{ paddingBottom: '20px' }} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} style = {{width: 300}}/>
                    <Box sx={{ paddingBottom: '20px' }} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style = {{width: 300}}/>
                    <Box sx={{ paddingBottom: '20px' }} />
                    <Box className='style'>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick = {() => logInWithEmailAndPassword(email, password)}
                            style = {{width: 200}}
                        >
                            Login
                        </Button>
                    </Box>
                    <Box sx={{ paddingBottom: '10px' }} />
                    <div>
                        <Link to='/reset'> Reset Password!</Link>
                    </div>
                    <Box sx={{ paddingBottom: '10px' }} />
                    <div>
                        You don't have an account yet? <Link to='/signup'> Sign up!</Link>
                    </div>
                    <Box sx={{ paddingBottom: '10px' }} />
                    <Center>
                        <GoogleButton onClick={signInWithGoogle} style = {{width: 300}}/>
                    </Center>
                </Typography>
            </Box>
        </>
    )
}

export default Login;