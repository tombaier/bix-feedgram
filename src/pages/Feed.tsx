import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from '@firebase/firestore'
import Box  from '@mui/material/Box'
import { Post } from '../features/posts/Post'
import { HeaderMain } from '../components/HeaderMain'
import { db } from '../services/firebase'
import { AddCircle } from '@mui/icons-material'
import { Center } from '../components/Center'
import { onSnapshot, orderBy, query } from 'firebase/firestore'
import { Typography } from '@mui/material'

const Feed = () => {
    const navigate = useNavigate();

    const createNewPost = () => {
        navigate("/addPost")
    }

    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        onSnapshot(query(collection(db, "posts"), orderBy("date", "desc")), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
            }));
        });
    }, []);

    return(
        <>
            <HeaderMain />
            <Center sx={{ marginTop: '20px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AddCircle
                        color='primary'
                        fontSize='large'
                        onClick = {createNewPost}
                    /> 
                    <Typography color='textSecondary' component='div' >
                        Add Post
                    </Typography>
                </Box>
            </Center>
            <Box>
                {
                    posts.map(({ username, caption, imageUrl, date, id}) => (
                        <Post key={id} username={username.name} caption={caption} imageUrl={imageUrl} date={date} id={id} />
                    ))
                }        
            </Box>
        </>
    )
}

export default Feed;