import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React,{useState,useEffect} from "react";

interface props {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  open: boolean;
  vertical: "bottom" | "top";
  horizontal: "left"| "right";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CustomSnackbar({ message, severity,open,vertical,horizontal }: props) {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  console.log(open);

  useEffect(() => {
    setOpenSnackbar(open);
  }, [open]);


  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Snackbar
      open={openSnackbar}
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%",fontSize:14 }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
