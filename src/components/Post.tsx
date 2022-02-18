import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material'
import { Favorite, Comment } from '@mui/icons-material' 


const Post = () => {

  return (
      <Card>
          <CardHeader 
            avatar = {<Avatar />}
            title = 'UserName'
            subheader = {new Date().toDateString()}
          />

          <CardMedia />

          <CardActions disableSpacing>
              <IconButton>
                    <Favorite />
              </IconButton>
              
              <IconButton>
                    <Comment />
              </IconButton>
          
          </CardActions>

          <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                  This is the first post on FEEDGRAM! Welcome to you all!
              </Typography>
          </CardContent>
      </Card>
    )
}

export default Post;