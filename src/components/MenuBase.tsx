import React, { FC } from 'react';
import Box, { BoxProps } from "@mui/material/Box";
import Menu from '@mui/material/Menu'
import { IconButton, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

export const MenuBase: FC<BoxProps> = ({ children, ...props }) => {
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
			<Link to='/profile'>
				<MenuItem> Profile </MenuItem>
			</Link>
				
			<Link to='/login'>
				<MenuItem> Logout </MenuItem> 
			</Link>
		</Menu>
	)

	return (
		<Box 
			sx={{ flexGrow: 1 }}
			{...props}
		>
			<Box sx={{ display: { md: 'flex' } }}>
				<IconButton
				size="large"
				edge="end"
				aria-label="account of current user"
				aria-controls={menuId}
				aria-haspopup="true"
				onClick={handleProfileMenuOpen}
				color="inherit"
				>
					{children}
				</IconButton>
			</Box>
			{renderMenu}
		</Box>
	)
};