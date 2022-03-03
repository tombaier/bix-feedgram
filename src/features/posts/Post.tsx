import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Grid } from '@mui/material'
import { Favorite, Comment } from '@mui/icons-material' 
import { makeStyles } from '@mui/styles'
import { Timestamp } from 'firebase/firestore'

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
    return (
        <Grid container>
            <Grid item container xs={12} justifyContent='center'>
                <Grid item xs={10} sx={{paddingBottom:'20px'}}> 
                    <Card>
                        <CardHeader 
                            avatar = {<Avatar />}
                            title = {props.username}
                            subheader = {props.date}
                            // subheader={new Date().toDateString()}
                        />

                        <CardMedia>
                            <img alt="postImg" className={classes.post_img} src={props.imageUrl} />
                        </CardMedia>

                        <CardActions disableSpacing sx={{paddingBottom:'1px'}}>
                            <IconButton>
                                <Favorite />
                            </IconButton>
                        
                            <IconButton>
                                    <Comment />
                            </IconButton>
                        </CardActions>

                        <CardContent sx={{paddingBlockStart:'1px'}}>
                            <Typography color='textSecondary' component='div'>
                                <strong>{props.username}</strong> {props.caption} 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}
