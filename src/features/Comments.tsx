import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import AddComment from './AddComment';

interface ICommentProps {
    username: any;
    comment: string;
    date: any;
};

const Comment = (props : ICommentProps) => {
    
    return (
        <Box>
            <Typography color='textSecondary' component='div'>
                <strong> {props.username} </strong> {props.comment}  <em> {props.date} </em>
            </Typography>
        </Box>
    )
}

const Comments = ({postId = ""}) => {
    const [comments, setComments] = useState<any[]>([]);

    useEffect(() => {
        onSnapshot(query(collection(db, "comments" ), where("postId", "==", postId), orderBy("date", "desc")), (snapshot) => {
            setComments(snapshot.docs.map((doc) => {
                return doc.data()
            }));
        });
    }, []);
    
    return(
        <>
            <AddComment postId={postId} />
            <Box sx={{marginTop: '10px'}}>
            {
                comments.map(({ username, comment, date }) => (
                    <Comment key={date} username={username.name} comment={comment} date={date}/>
                ))
            }        
            </Box>
        </>
    )
}

export default Comments;

