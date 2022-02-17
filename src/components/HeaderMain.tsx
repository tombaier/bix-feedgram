import Avatar from '@mui/material/Avatar'
import { HeaderBase } from './HeaderBase'
import { SearchBar } from './SearchBar'
import { MenuBase } from './MenuBase';
import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { logout } from '../services/firebase';


export const HeaderMain = () => {

  return (
    <HeaderBase>
      <SearchBar/>
      <MenuBase 
        menuIcon={<Avatar sx={{ width: 40, height: 40 }} />} 
        menuContent={<>
          <Link to='/profile'>
            <MenuItem> Profile </MenuItem>
          </Link>
          <Link to='/feed'>
            <MenuItem> Feed </MenuItem>
          </Link>
          <MenuItem
            onClick={logout}
          > 
            Logout 
          </MenuItem>
        </>} />
    </HeaderBase>
  )
};