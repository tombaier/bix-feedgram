import Box from "@mui/material/Box"
import { Close } from "@mui/icons-material"

export const Message = () => (
    <>
      <Box sx={{ paddingBottom: '10px' }} />
      <div
        style={{
          display: 'inline-flex',
          verticalAlign: 'text-bottom',
          boxSizing: 'inherit',
          textAlign: 'center',
          alignItems: 'center',
          background: '#EBEBEB' 
        }}
      >
        <Close />
        Email is not registered.
      </div>
    </>
  ) 