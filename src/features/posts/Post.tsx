import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Grid, FormControlLabel , Checkbox, TextField, Box } from '@mui/material'
import { Favorite, FavoriteBorder, Send } from '@mui/icons-material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline' 
import { makeStyles } from '@mui/styles'

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
                <Grid item xs={10} md={4} sx={{paddingBottom:'20px'}}> 
                    <Card>
                        <CardHeader 
                            avatar = {<Avatar />}
                            title = {props.username}
                            subheader = {props.date}
                        />

                        <CardMedia>
                            <img alt="postImg" className={classes.post_img} src={props.imageUrl} />
                        </CardMedia>

                        <CardActions disableSpacing sx={{paddingBottom:'1px'}}>
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                        icon={<FavoriteBorder />} 
                                        checkedIcon={<Favorite color='error'/>}
                                        name="likeButton"
                                    />
                                }
                                label=""
                            />

                            <IconButton>
                                    <ChatBubbleOutlineIcon />
                            </IconButton>
                        </CardActions>

                        <CardContent sx={{paddingBlockStart:'1px'}}>
                            <Typography color='textSecondary' component='div'>
                                <strong>{props.username}</strong> {props.caption} 
                            </Typography>
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
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}
