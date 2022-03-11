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

const Feed = () => {
    const navigate = useNavigate();

    const createNewPost = () => {
        navigate("/addPost")
    }

    const [posts, setPosts] = useState<any[]>([]);
    
    

    useEffect(() => {
        onSnapshot(query(collection(db, "posts"), orderBy("date", "desc")), (snapshot) => {
          setPosts(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return(
        <>
            <HeaderMain />
            <Center sx={{ marginTop: '20px', marginBottom: '20px' }}>
                <AddCircle
                    color='primary'
                    fontSize='large'
                    onClick = {createNewPost}
                />
            </Center>
            <Box>
               {
                    posts.map(({ username, caption, imageUrl, date}) => (
                        <Post key={date} username={username.name} caption={caption} imageUrl={imageUrl} date={date} />
                    ))
                }        
            </Box>
        </>
    )
}

export default Feed;