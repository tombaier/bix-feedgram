import Alert, { AlertProps } from "@mui/material/Alert"


export const Message = ({severity = "error", children, ...props}: AlertProps) => {
  return <Alert 
    sx = {{
      marginTop: '10px',
      width: '300px',
    }}
    severity = {severity}
    {...props}
  >
    {children}
  </Alert>
}