import * as React from 'react';
import Box from "@mui/material/Box";
import Menu from '@mui/material/Menu'
import { IconButton, IconButtonProps } from '@mui/material';

export interface IMenuProps {
	menuIcon: IconButtonProps,
	menuContent: React.ReactNode
};

export const MenuBase = (props: IMenuProps) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			{props.menuContent}
		</Menu>
	)

	return <Box sx={{ display: { sm:'flex', md: 'flex', lg:'flex' }}}>
				<IconButton
				size="large"
				edge="end"
				aria-label="account of current user"
				aria-controls={menuId}
				aria-haspopup="true"
				onClick={handleProfileMenuOpen}
				color="inherit"
				>
					{props.menuIcon}
				</IconButton>
				{renderMenu}
			</Box>
			
	
};