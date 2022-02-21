import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { query, collection, getDocs, where } from 'firebase/firestore'
import Typography from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import { Post } from '../components/Post'
import { HeaderMain } from '../components/HeaderMain'
import { auth, db } from '../services/firebase'
import { AddCircle } from '@mui/icons-material'
import { Center } from '../components/Center'

const Feed = () => {
    const [user, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const docs = await getDocs(q);
            const data = docs.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert ("An error occurred while fetching user data");
        }
    };

    const [posts, setPosts] = useState([
        {
            username: 'TomBaier27',
            caption: 'Look at these amazing cats *_*',
            imageUrl: 'https://www.rover.com/blog/wp-content/uploads/2019/12/two-gray-kittens-pixabay.jpg'
        },
        {
            username: 'NiklasW471',
            caption: 'Look at this beautiful dog <3',
            imageUrl: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
        }
    ]);

    useEffect (() => {
        if (!user) return navigate("/login");
        fetchUserName();
    }, [user]);

    return(
        <>
            <HeaderMain />
            <Box sx={{ paddingBottom: '20px' }} />
            <Center>
                <AddCircle
                    color='secondary'
                    fontSize='large'
                />
            </Center>
            <Box sx={{ paddingBottom: '20px' }} />
            <Box>
                <Typography color="inherit" align="center">
                    {
                        posts.map(post => (
                            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
                        ))
                    }
                </Typography>
            </Box>
        </>
    )
}

export default Feed;