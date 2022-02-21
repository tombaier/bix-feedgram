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


const Reset = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [user, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (user) navigate("/login");
  }, [user]);

  const resetPassword = async () => {
    setHasError(false)
    await sendPasswordReset(email).catch(e => {
      setHasError(true)
    })
  }

  return (
    <>
      <HeaderBase />
      <Box sx={{paddingBottom: '8px'}}/>
      <Box>
        <Typography color="inherit" align="center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="logo"
            className={classes.img} />
          <Box sx={{ paddingBottom: '20px' }} />
          <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Box sx={{ paddingBottom: '20px' }} />
          <Box className='style'>
            <Button
              variant="contained"
              color="secondary"
              onClick = {resetPassword}
            >
              Send password reset email
            </Button>
          </Box>
          <Box sx={{ paddingBottom: '10px' }} />
          <div>
            You don't have an account yet? <Link to='/signup'> Sign up!</Link>
          </div>
        </Typography>
      </Box>
    </>
        
      
  );
}
export default Reset;