import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from '@firebase/firestore'
import Box  from '@mui/material/Box'
import { Post } from '../features/posts/Post'
import { HeaderMain } from '../components/HeaderMain'
import { db } from '../services/firebase'
import { AddCircle } from '@mui/icons-material'
import { Center } from '../components/Center'

const Feed = () => {
    const navigate = useNavigate();

    const createNewPost = () => {
        navigate("/addPost")
    }

    const [posts, setPosts] = useState<any[]>([]);
    
    useEffect(() => {
        const getPosts = async () => {
            const postsData = await getDocs(collection(db, "posts")).catch((error : any) => {
                console.log(error)
            })
            if(postsData) {
                const data = postsData.docs.map((d) => d.data())
                setPosts(data)
                console.log(data)
            }
           
        }
        getPosts();
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
                    posts.map(({username, caption, imageUrl, date}) => (
                        <Post key={date.seconds} username={username.name} caption={caption} imageUrl={imageUrl} date={date.seconds} />
                    ))
                }        
            </Box>
        </>
    )
}

export default Feed;