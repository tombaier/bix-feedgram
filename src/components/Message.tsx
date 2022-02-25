import Alert, { AlertProps } from "@mui/material/Alert"
import Box from "@mui/material/Box"
import { Center } from "./Center"

export interface IMessageProps {
	messageSeverity: boolean,
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
        width: 300,
      }}
    >
      <Alert

        severity= {props.messageSeverity ? 'success' : 'error'}
      >
        {props.messageContent} 
      </Alert>
      
    </Box>
  </Center>
) 