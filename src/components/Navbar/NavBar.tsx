import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    typo: {
        flexGrow: 1,
        textAlign: 'center',
    }
}))

const NavBar = () => {
    const classes = useStyles();

    return(
        <div>
        <AppBar position="static" color='secondary'>
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.typo}>
                Welcome Guest!
                </Typography>
            </Toolbar> 
        </AppBar>
        </div>
    )
}
export default NavBar;