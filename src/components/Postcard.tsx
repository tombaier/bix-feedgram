import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, makeStyles} from '@material-ui/core'
import { Favorite, Comment, Share, MoreVert } from '@material-ui/icons' 

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '100%'
    }
})

const Postcard = () => {
  const {media} = useStyles()  
  return (
      <Card>
          <CardHeader 
            avatar = {<Avatar />}
            title = 'Just a Test'
            subheader = {new Date().toDateString()}
            action = {
                <IconButton>
                    <MoreVert />
                </IconButton> 
            }
          />
          <CardMedia className={media} />

          <CardActions disableSpacing>
              <IconButton>
                    <Favorite />
              </IconButton>
              
              <IconButton>
                    <Comment />
              </IconButton>
          
              <IconButton>
                    <Share />
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

export default Postcard;