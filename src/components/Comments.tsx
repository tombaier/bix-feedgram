import { Send } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { addDoc, collection, onSnapshot, Timestamp } from 'firebase/firestore';
import { ChangeEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../services/firebase'


interface ICommentProps {
	user: any;
	content: string;
    date: any;
};

const Comments = (props: ICommentProps) => {

    return(
        <>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Typography color='textSecondary' component='div'>
                    <strong>{props.user}</strong> {props.content} <em>{props.date}</em>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField 
                    id="addComment"  
                    variant="standard" 
                    label="Add comment..." 
                    style = {{width: 250}}
                />
                <IconButton>
                    <Send />
                </IconButton>
            </Box>
        </>
    )
}

export default Comments;