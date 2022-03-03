import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { HeaderBase } from '../components/HeaderBase'
import { auth, signInWithGoogle, signUpWithEmailAndPassword } from "../services/firebase";
import { Center } from '../components/Center'
import GoogleButton from 'react-google-button'
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
    const [hasError, setHasError] = useState(false);

    const signup = () => {
        setHasError(false)   
        signUpWithEmailAndPassword (name, email, password).catch(e => {
            setHasError(true) 
        })
    };
    

    return(
        <>
            <HeaderBase />
            <Box sx={{marginTop: '8px'}}>
                <Center>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                        alt="logo"
                        className={classes.img} 
                    />
                    <Box sx={{ marginBottom: '20px', marginTop: '20px' }}>
                    <TextField id="name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} style = {{width: 300}} required={true} />
                    </Box>
                    <Box sx={{ marginBottom: '20px' }}>
                    <TextField id="email" label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style = {{width: 300}} required={true} /> 
                    </Box>
                    <Box sx={{ marginBottom: '20px' }}>
                    <TextField id="password" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style = {{width: 300}} required={true} />
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
                        { hasError ? <Center> <Message children='Please enter all information!' /> </Center> : null }
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        You already have an account? <Link to='/Login'>Login!</Link>
                    </Box>
                    <Center>
                        <GoogleButton onClick={signInWithGoogle} style = {{width: 300, padding: 2, borderRadius: 5}} />
                    </Center>
                </Center>
            </Box>
        </>
    )
}
export default Signup;