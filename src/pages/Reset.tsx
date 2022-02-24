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
import { Check } from "@mui/icons-material";

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
  const [user, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (user) navigate("/login");
  }, [user]);

  const resetPassword = async () => {
    setMessage(true)
    await sendPasswordReset(email).catch(e => {
      setMessage(true)
    })
  }

  return (
    <>
      <HeaderBase />
      <Box sx={{marginTop: '8px'}}>
        <Typography color="inherit" align="center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="logo"
            className={classes.img} 
          />
          <Box sx={{marginBottom: '20px', marginTop: '20px'}}>
            <TextField id="outlined-basic" label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{width: 300}} />
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
            { message ? <Message messageIcon={<Check />} messageContent='Password reset email successfully sent!' /> : null }
          </Box>
          <Box>
            You don't have an account yet? <Link to='/signup'> Sign up!</Link>
          </Box>
        </Typography>
      </Box>
    </>
        
      
  );
}
export default Reset;