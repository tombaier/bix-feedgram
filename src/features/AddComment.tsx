import { CheckCircleOutline, Send } from "@mui/icons-material";
import { IconButton, Box, TextField } from "@mui/material";
import { addDoc, collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../services/firebase";

const AddComment = ({postId = ""}) => {
    const [user] = useAuthState(auth);
    const [comment, setComment] = useState("");
    const [sendComment, setSendComment] = useState(false);
    
    const createComment = async () => {
        await addDoc(collection(db, 'comments'), {
            comment, 
            username: { name: user?.displayName, uid: user?.uid },
            date: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.now()),
            postId: postId,
        })
        if(sendComment == false) return setSendComment(true)
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField 
                id="addComment"  
                variant="standard"  
                label="Add comment..." 
                fullWidth
                onChange={(event) => {
                    setComment(event.target.value);
                }} 
            />
            <IconButton onClick={createComment}>
                { sendComment ? <CheckCircleOutline color="success" /> : <Send />  }
            </IconButton>
        </Box>
    )
}

export default AddComment;


