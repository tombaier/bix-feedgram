import Box from "@mui/material/Box"
import { Close } from "@mui/icons-material"
import { IconButtonProps } from "@mui/material/IconButton"

export interface IMessageProps {
	messageIcon: IconButtonProps,
	messageContent: string
};

export const Message = (props: IMessageProps) => (
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
        {props.messageIcon}
        {props.messageContent}
      </div>
    </>
  ) 