import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Grid, FormControlLabel , Checkbox, TextField, Box } from '@mui/material'
import { Favorite, FavoriteBorder, Send } from '@mui/icons-material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline' 
import { makeStyles } from '@mui/styles'
import { useState } from 'react';
import Comments from '../../components/Comments';

interface IPostProps {
	username: any;
	caption: string;
    imageUrl: string;
    date: any;
};

const useStyles = makeStyles({
    post_img: {
        width: '100%',
        objectFit: 'contain',
    },
})



export const Post = (props: IPostProps) => {
    const classes = useStyles();
    const [showComments, setShowComments] = useState(false)
    const [showLiked, setShowLiked] = useState(false)
    

    return (
        <Grid container>
            <Grid item container xs={12} justifyContent='center'>
                <Grid item xs={10} md={4} sx={{marginBottom:'20px'}}> 
                    <Card>
                        <CardHeader 
                            avatar = {<Avatar />}
                            title = {props.username}
                            subheader = {props.date}
                        />

                        <CardMedia>
                            <img alt="postImg" className={classes.post_img} src={props.imageUrl} />
                        </CardMedia>

                        <CardActions disableSpacing sx={{marginBottom:'1px'}}>
                            <IconButton 
                                onClick={() => {
                                    if(showLiked == false) return setShowLiked(true)
                                    if(showLiked == true) return setShowLiked(false)
                                }} 
                            >
                               { showLiked ? <Favorite color='error' /> : <FavoriteBorder />}
                            </IconButton>
                            
                          
                            <IconButton 
                                onClick={() => {
                                    if(showComments == false) return setShowComments(true)
                                    if(showComments == true) return setShowComments(false)
                                }} 
                            >
                                <ChatBubbleOutlineIcon />
                            </IconButton>
                        </CardActions>

                        <CardContent sx={{marginTop:'1px'}}>
                            <Typography color='textSecondary' component='div'>
                                <strong>{props.username}</strong> {props.caption} 
                            </Typography>
                            { showComments ? <Comments user="Tom Baier" date="03/09/2022, 05:12 PM" content="I really appreciate your" /> : null}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}


