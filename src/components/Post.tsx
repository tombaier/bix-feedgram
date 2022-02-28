import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Grid } from '@mui/material'
import { Favorite, Comment } from '@mui/icons-material' 
import { makeStyles } from '@mui/styles'

export interface IPostProps {
	username: string,
	caption: string,
    imageUrl: string,
};

const useStyles = makeStyles({
    post_img: {
        width: '100%',
        objectFit: 'contain',
    },
    post_text:{
        fontWeight: 'normal',
        textAlign: 'left',
    }
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
                            subheader = {new Date().toDateString()}
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
                                <h4 className={classes.post_text}> <strong>{props.username}</strong> {props.caption} </h4>
                            </Typography>
                        </CardContent>
                    </Card>
                </ Grid>
            </ Grid>
        </ Grid>
    )
}
