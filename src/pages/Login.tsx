import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { HeaderBase } from '../components/HeaderBase'
import { useState } from 'react'
import { logInWithEmailAndPassword, signInWithGoogle } from '../services/firebase'
import GoogleButton from 'react-google-button'
import { Center } from '../components/Center'
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

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);

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
                <Center>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                        alt="logo"
                        className={classes.img} 
                    />
                    <Box sx={{marginBottom: '20px', marginTop: '20px'}} >
                    <TextField id="email" label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style = {{width: 300}} required={true} />
                    </Box>
                    <Box sx={{marginBottom: '20px'}}>
                    <TextField id="password" label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style = {{width: 300}} required={true}/>
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
                        { hasError ? <Center> <Message children='Entered user data are not correct!' /> </Center> : null }
                    </Box>
                    <Box sx={{marginBottom: '10px'}}>
                        <Typography textAlign='center' color='textSecondary'>
                            <Link to='/reset'> Reset Password!</Link>
                        </Typography>
                    </Box>
                    <Box sx={{marginBottom: '10px'}}>
                        <Typography textAlign='center' color='textSecondary' >
                            You don't have an account yet? <Link to='/signup'> Sign up!</Link>
                        </Typography>
                    </Box>
                    <Center>
                        <GoogleButton onClick={signInWithGoogle} style = {{width: 300, padding: 2, borderRadius: 5}}/>
                    </Center>
                </Center>
            </Box>
        </>
    )
}

export default Login;