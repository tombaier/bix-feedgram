import Avatar from '@mui/material/Avatar'
import { HeaderBase } from './HeaderBase'
import { SearchBar } from './SearchBar'
import { MenuBase } from './MenuBase';
import { useNavigate } from 'react-router-dom';
import { MenuItem, MenuList } from '@mui/material';
import { logout } from '../services/firebase';


export const HeaderMain = () => {
  const navigate = useNavigate();

  const onFeed = () => {
    navigate("/feed")
  }

  const onProfile = () => {
    navigate("/profile")
  }

  return (
    <HeaderBase>
      <SearchBar/>
      <MenuBase 
        menuIcon={<Avatar sx={{ width: 40, height: 40 }} />} 
        menuContent={
          <MenuList>
            <MenuItem onClick={onProfile}> Profile </MenuItem>
            <MenuItem onClick={onFeed}> Feed </MenuItem>
            <MenuItem onClick={logout} > Logout </MenuItem>
          </MenuList>
        } 
      />
    </HeaderBase>
  )
};