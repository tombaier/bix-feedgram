import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Box } from '@material-ui/core'



const HeaderStart = () => {

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
            <Toolbar>

            </Toolbar>
        </AppBar>
        </Box>
    )
}
export default HeaderStart;