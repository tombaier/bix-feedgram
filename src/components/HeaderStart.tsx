import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'



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