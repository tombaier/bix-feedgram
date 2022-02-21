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

    const signup = () => {
        if (!name ) alert ("Please enter all information ");
        if (!email ) alert ("Please enter email");
        if (!password ) alert ("Please enter password");        
        signUpWithEmailAndPassword (name, email, password);
    };

    useEffect (() => {
        if (user) navigate("/feed");
    }, [user]);
    

    return(
        <>
            <HeaderBase />
            <Box sx={{paddingBottom: '8px'}}/>
            <Box>
                <Typography color="inherit" align="center">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                        alt="logo"
                        className={classes.img} 
                    />
                    <Box sx={{ paddingBottom: '20px' }} />
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                    <Box sx={{ paddingBottom: '20px' }} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Box sx={{ paddingBottom: '20px' }} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Box sx={{ paddingBottom: '20px' }} />
                    <Box className='style'>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={signup}
                        >
                            Sign Up
                        </Button>
                    </Box>
                    <Box sx={{ paddingBottom: '10px' }} />
                    <div>
                        You already have an account? <Link to='/Login'>Login!</Link>
                    </div>
                    <Box sx={{ paddingBottom: '10px' }} />
                    <Center>
                        <GoogleButton onClick={signInWithGoogle}/>
                    </Center>
                    
                </Typography>
            </Box>
        </>
    )
}
export default Signup;