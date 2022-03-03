import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { query, collection, getDocs, where} from '@firebase/firestore'
import Typography from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import { Post } from '../features/posts/Post'
import { HeaderMain } from '../components/HeaderMain'
import { auth, db } from '../services/firebase'
import { AddCircle } from '@mui/icons-material'
import { Center } from '../components/Center'

const Feed = () => {
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
    

    /*
    const getPosts = async () => {
        const results = await getDocs(collection(db, "posts"));
        const post = results.docs[0].data();
        setUsername(post.name);
        setCaption(post.caption);
        setImageUrl(post.imageUrl);
        getPosts();
    };
    */
    

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
                            <div key={username.uid+date.seconds}>
                                {username.name}
                            
                            </div>
                        ))
                    }
                
            </Box>
        </>
    )
}

export default Feed;