import React from 'react';
import Avatar from '@mui/material/Avatar'
import { HeaderBase } from './HeaderBase'
import { SearchBar } from './Search'
import { MenuBase } from './MenuBase';


export default function PrimarySearchAppBar() {
  return (
    <HeaderBase>
      <SearchBar open={false} />
      <MenuBase>
        <Avatar 
          sx={{ width: 40, height: 40 }}
        />
      </MenuBase>  
    </HeaderBase>
  );
}
