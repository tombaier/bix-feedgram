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
import { Message } from '../components/Message'
import { ErrorOutline } from '@mui/icons-material'

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
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (user) navigate("/feed");
    }, [user]);

    const loginWithEmail = async () => {
        setHasError(false)
        await logInWithEmailAndPassword(email, password).catch(e => {
          setHasError(true) 
        })
      }


    return(
        <>
            <HeaderBase />
            <Box sx={{marginTop: '8px'}}>
                <Typography color="inherit" align="center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                        alt="logo"
                        className={classes.img} 
                    />
                    <Box sx={{marginBottom: '20px', marginTop: '20px'}} >
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style = {{width: 300}} />
                    </Box>
                    <Box sx={{marginBottom: '20px'}}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style = {{width: 300}} />
                    </Box>
                    <Box className='style' sx={{marginBottom: '10px'}}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick = {loginWithEmail}
                            style = {{width: 300}}
                        >
                            Login
                        </Button>
                        { hasError ? <Message messageIcon={<ErrorOutline />} messageContent='Entered user data are not correct!' /> : null }
                    </Box>
                    <Box sx={{marginBottom: '10px'}}>
                        <Link to='/reset'> Reset Password!</Link>
                    </Box>
                    <Box sx={{marginBottom: '10px'}}>
                        You don't have an account yet? <Link to='/signup'> Sign up!</Link>
                    </Box>
                    <Center>
                        <GoogleButton onClick={signInWithGoogle} style = {{width: 300, padding: 2, borderRadius: 5}}/>
                    </Center>
                </Typography>
            </Box>
        </>
    )
}

export default Login;