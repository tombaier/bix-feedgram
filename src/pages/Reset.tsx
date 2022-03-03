import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HeaderBase } from "../components/HeaderBase";
import { auth, sendPasswordReset } from "../services/firebase";
import { Message } from "../components/Message";
import { Center } from "../components/Center";

const useStyles = makeStyles((theme) => ({
  style: {
    display: 'flex',
    alignItems: 'center',
    textAlign:'center', 
    justifyContent: 'center'
  },
  img: {
    width: 150, 
    height: 110, 
  }
}))

const Reset = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (user) navigate("/login");
  }, [user]);

  const resetPassword = async () => {
    setMessage(true)
    await sendPasswordReset(email)
  }

  return (
    <>
      <HeaderBase />
      <Box sx={{marginTop: '8px'}}>
        <Center>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="logo"
            className={classes.img} 
          />
          <Box sx={{marginBottom: '20px', marginTop: '20px'}}>
            <TextField 
              id="outlined-basic" 
              label="Email" 
              variant="outlined" 
              type="email" value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{width: 300}}
              required={true}
              inputProps={{ minLength: 13}}
            />
          </Box>
          <Box className='style' sx={{marginBottom: '10px'}}>
            <Button
              variant="contained"
              color="primary"
              onClick = {resetPassword}
              style={{width: 300}}
            >
              Send password reset email
            </Button>
            { message ? <Center> <Message severity='success' children='Password reset email successfully sent!' /> </Center> : null }
          </Box>
          <Box>
            You don't have an account yet? <Link to='/signup'> Sign up!</Link>
          </Box>
        </Center>
      </Box>
    </>
        
      
  );
}
export default Reset;