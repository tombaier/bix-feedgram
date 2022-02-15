import React, { FC } from 'react';
import Menu, { MenuProps } from "@mui/material/Menu";

export const MenuBase: FC<MenuProps> = ({ children, ...props }) => {

	return <Menu 
	            {...props}
	>
		{children}
	</Menu>;
};