import Avatar from '@mui/material/Avatar'
import { HeaderBase } from './HeaderBase'
import { SearchBar } from './SearchBar'
import { MenuBase } from './MenuBase';


export const HeaderMain = () => {
  return (
    <HeaderBase>
      <SearchBar/>
      <MenuBase>
        <Avatar 
          sx={{ width: 40, height: 40 }}
        />
      </MenuBase>  
    </HeaderBase>
  )
};

export default HeaderMain;
