import Box from "@mui/material/Box"
import { IconButtonProps } from "@mui/material/IconButton"
import { Center } from "./Center"

export interface IMessageProps {
	messageIcon: IconButtonProps,
	messageContent: string
};

export const Message = (props: IMessageProps) => (
    <>
      <Box sx={{ paddingBottom: '10px' }} />
      <Center>
      <div
        style={{
          display: 'flex',
          verticalAlign: 'text-bottom',
          boxSizing: 'inherit',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          background: '#EBEBEB',
          width: 300,
          height: 80,
          padding: 2,
          borderRadius: 5
        }}
      >
        {props.messageIcon}
        {props.messageContent}
      </div>
      </Center>
    </>
  ) 