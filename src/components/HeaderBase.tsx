import { FC } from 'react';
import Box, { BoxProps } from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

export const HeaderBase: FC<BoxProps> = ({ children, ...props }) => {

	return <Box
        sx={{flexGrow: 1, display: { sm:'flex', md: 'flex', lg:'flex' }}}  
	    {...props}
	>
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar>
                    {children}
                </Toolbar>
            </Container>
        </AppBar>
	</Box>;
};