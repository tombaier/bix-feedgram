import { FC } from 'react';
import Box, { BoxProps } from "@mui/material/Box";

export const Center: FC<BoxProps> = ({ children, ...props }) => {

	return <Box display="flex"
	            flexDirection="column"
	            justifyContent="center"
	            alignItems="center"
	            height="inherit"
	            {...props}
	>
		{children}
	</Box>;
};

export default Box;