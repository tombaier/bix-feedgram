import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, where, addDoc, Timestamp } from 'firebase/firestore'
import Typography from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import { HeaderMain } from '../../components/HeaderMain'
import { auth, db } from '../../services/firebase'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import { Button, CardMedia, TextField } from '@mui/material'
import { Center } from '../../components/Center'

const AddPost = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [imageUrl, setImageUrl] = useState("");
    const [caption, setCaption] = useState("");

    const postsCollectionRef = collection(db, "posts");

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
          imageUrl,
          caption,
          username: { name:user?.displayName, uid: user?.uid },
          date: Timestamp.now(),
        });
        navigate("/feed");
      };


    return(
        <>
            <HeaderMain />
            <Box marginTop='20px'>
                <Center>
                    <Grid container>
                        <Grid item container xs={12} justifyContent='center'>
                            <Grid item xs={10} sx={{marginBottom:'20px'}}> 
                                <Card>
                                    <CardContent sx={{paddingBlockStart:'1px'}}>
                                        <Typography color='textSecondary' component='div'>
                                            Select a picture to share with your community
                                        </Typography>
                                    </CardContent>
                                    <CardMedia>
                                        <TextField 
                                            id="imageUrl"  
                                            variant="outlined"
                                            label="Image URL" 
                                            style = {{width: 250}} 
                                            onChange={(event) => {
                                                setImageUrl(event.target.value);
                                            }} 
                                        />    
                                    </CardMedia>
                                    <Box sx={{marginBottom: '20px', marginTop: '20px'}}>
                                        <TextField 
                                            id="postCaption"  
                                            variant="outlined" 
                                            label="Caption" 
                                            style = {{width: 250}}
                                            onChange={(event) => {
                                                setCaption(event.target.value);
                                            }} 
                                        />
                                    </Box>
                                    <Box sx={{marginBottom: '20px'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"    
                                            style = {{width: 250}}
                                            onClick={createPost}
                                        >
                                            Upload Post
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Center>
            </Box>
        </>
    )
}

export default AddPost;