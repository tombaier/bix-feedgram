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
        <div>
        <AppBar position="static" color='secondary'>
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.typo}>
                    
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar> 
        </AppBar>
        </div>
    )
}
export default Header;