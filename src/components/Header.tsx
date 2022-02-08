import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import { Menu } from 'material-ui'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
    typo: {
        flexGrow: 1,
        textAlign: 'center',
    }
}))

const Header = () => {
    const classes = useStyles();

    return(
        <AppBar position='sticky' color='secondary'>
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.typo}>
                    
                </Typography>
            </Toolbar> 
        </AppBar>
    )
}
export default Header;