import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link, useNavigate } from 'react-router-dom'
import { HeaderBase } from '../components/HeaderBase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, signInWithGoogle, signUpWithEmailAndPassword } from "../services/firebase";
import { Center } from '../components/Center'
import GoogleButton from 'react-google-button'
import { ErrorOutline } from '@mui/icons-material'
import { Message } from '../components/Message'


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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [hasError, setHasError] = useState(false);

    const signup = () => {
        setHasError(false)   
        signUpWithEmailAndPassword (name, email, password).catch(e => {
            setHasError(true) 
        })
    };

    useEffect (() => {
        if (user) navigate("/feed");
    }, [user]);
    

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
                    <Box sx={{ marginBottom: '20px', marginTop: '20px' }}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} style = {{width: 300}} />
                    </Box>
                    <Box sx={{ marginBottom: '20px' }}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style = {{width: 300}} /> 
                    </Box>
                    <Box sx={{ marginBottom: '20px' }}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style = {{width: 300}} />
                    </Box>
                    <Box className='style' sx={{ marginBottom: '10px' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={signup}
                            style = {{width: 300}}
                        >
                            Sign Up
                        </Button>
                        { hasError ? <Message messageIcon={<ErrorOutline />} messageContent='Please enter all information' /> : null }
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        You already have an account? <Link to='/Login'>Login!</Link>
                    </Box>
                    <Center>
                        <GoogleButton onClick={signInWithGoogle} style = {{width: 300, padding: 2, borderRadius: 5}} />
                    </Center>
                </Typography>
            </Box>
        </>
    )
}
export default Signup;