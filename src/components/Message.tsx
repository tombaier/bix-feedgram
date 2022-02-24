import Box from "@mui/material/Box"
import { IconProps } from "@mui/material/Icon"
import { Center } from "./Center"

export interface IMessageProps {
	messageIcon: IconProps,
	messageContent: string
};

export const Message = (props: IMessageProps) => (
  <Center sx={{marginTop: '10px'}}>
    <Box
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
    </Box>
  </Center>
) 