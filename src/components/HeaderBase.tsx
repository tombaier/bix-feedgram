import { FC } from 'react';
import Box, { BoxProps } from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const HeaderBase: FC<BoxProps> = ({ children, ...props }) => {

	return <Box 
        sx={{ flexGrow: 1 }}
	    {...props}
	>
        <AppBar position="static" color="secondary">
            <Toolbar>
                {children}
            </Toolbar>
        </AppBar>
	</Box>;
};