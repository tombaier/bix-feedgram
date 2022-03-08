import CircularProgress from '@mui/material/CircularProgress'
import {Center} from './Center'

export const Loading = () => {
  return (
    <Center sx={{ display: 'flex', marginTop: '20px' }}>
      <CircularProgress />
    </Center>
  );
}