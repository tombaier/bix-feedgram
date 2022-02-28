import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { query, collection, getDocs, where } from 'firebase/firestore'
import Typography from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import { HeaderMain } from '../components/HeaderMain'
import { auth, db } from '../services/firebase'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { AddAPhoto } from '@mui/icons-material'
import CardContent from '@mui/material/CardContent'
import { Button, CardMedia, TextField } from '@mui/material'

const AddPost = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const results = await getDocs(q);
            const data = results.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert ("An error occurred while fetching user data");
        }
    };

    useEffect (() => {
        if (!user) return navigate("/login");
        fetchUserName();
    }, [user]);

    const addNewPost = () => {
        return navigate("/feed")
    }

    const openGallery = () => {
        return 
    }

    return(
        <>
            <HeaderMain />
            <Box marginTop='20px'>
                <Typography color="inherit" align="center">
                    <Grid container>
                        <Grid item container xs={12} justifyContent='center'>
                            <Grid item xs={10} sx={{paddingBottom:'20px'}}> 
                                <Card>
                                    <CardContent sx={{paddingBlockStart:'1px'}}>
                                        <Typography color='textSecondary' component='div'>
                                            <h4>Select a picture to share with your community</h4>
                                        </Typography>
                                    </CardContent>
                                    <CardMedia>
                                        <AddAPhoto sx={{width: 80, height: 80}} onClick = {openGallery} />
                                    </CardMedia>
                                    <Box sx={{marginBottom: '20px'}}>
                                        <TextField id="postCaption"  variant="outlined" label="Caption" style = {{width: 250}}/>
                                    </Box>
                                    <Box sx={{marginBottom: '20px'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"    
                                            onClick = {addNewPost}
                                            style = {{width: 250}}
                                        >
                                            Upload Post
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>
            </Box>
        </>
    )
}

export default AddPost;