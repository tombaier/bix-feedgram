import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { addDoc, arrayRemove, collection, deleteDoc, doc, onSnapshot, query, setDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../services/firebase';

const Likes = ({postId = ""}) => {
    const [user] = useAuthState(auth);
    const [likes, setLikes] = useState<Number>();
    const [likeId, setLikeId] = useState("");
    const hasLiked = likeId.length !== 0;

    //current user (un-)likes a photo
    const likePost = async () => {
        if(likeId.length){
            await deleteDoc(doc(db, 'likes', likeId))
            setLikeId("")
        }
        else{
            const result = await addDoc(collection(db, 'likes'), { 
                user: user?.uid,
                postId: postId
            })
            setLikeId(result.id)
        }
    }

    // store/save red heart, if current user has liked the post (show red heart also after refreshing)
    useEffect(() => {
        onSnapshot(query(collection(db, "likes" ), where("user", "==", user?.uid), where("postId", "==", postId)), (snapshot) => {
            if(!snapshot.empty){
                setLikeId(snapshot.docs[0].id)
            }
        });
    }, [db, user?.uid]);

    //get all likes for a post with the same postId
    useEffect(() => {
        onSnapshot(query(collection(db, "likes" ), where("postId", "==", postId)), (snapshot) => {
            const totalLikes = snapshot.size
            setLikes(totalLikes)
        });
    }, [db, postId]);
    
    return(
        <>
            <IconButton onClick={likePost} >
                { hasLiked ? <Favorite color='error'/> : <FavoriteBorder />}
            </IconButton>
            <Typography color='error' component='div'>
                {likes} 
            </Typography>
        </>
    )
}

export default Likes;