import { addDoc, collection, onSnapshot, Timestamp } from 'firebase/firestore';
import { ChangeEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../services/firebase'

const [user] = useAuthState(auth);
const colRef = collection(db, 'posts', 'comments')
const [content, setContent] = useState("");

//realtime collection data
onSnapshot(colRef, (snapshot) => {
    let comments : any[] = []
    snapshot.docs.forEach((doc) => {
        comments.push({...doc.data(), id: doc.id})
    })
    console.log(comments)
})

const createComment = async () => {
    await addDoc(colRef, {
        content,
        username: { name:user?.displayName, uid: user?.uid },
        date: Timestamp.now(),
    });
};

const addComment = (event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    return setContent(event.target.value)
}


export default {createComment, addComment};