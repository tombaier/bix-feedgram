import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Grid } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline' 
import { makeStyles } from '@mui/styles'
import { useState } from 'react';
import Comments from '../Comments';
import Likes from '../Likes';


interface IPostProps {
	username: any;
	caption: string;
    imageUrl: string;
    date: any;
    id: any;
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
                            
                            <Likes postId={props.id} />
                          
                            <IconButton 
                                onClick={() => {
                                    if(showComments == false) return setShowComments(true)
                                    if(showComments == true) return setShowComments(false)
                                }} 
                            >
                                <ChatBubbleOutlineIcon />
                            </IconButton>
                        </CardActions>

                        <CardContent sx={{marginTop:'1px', marginBottom: '1px'}}>
                            <Typography color='textSecondary' component='div'>
                                <strong>{props.username}</strong> {props.caption} 
                            </Typography>
                            { showComments ? <Comments postId={props.id} /> : null}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}
