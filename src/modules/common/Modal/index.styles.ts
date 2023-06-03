import { Theme } from '@mui/material/styles';

interface props{
  borderRadius?:number,
  width:number,
  height?:number,
  padding: number,
  transform?:string,
  backdropBackgroundColor?:string,
  opacity?:string,
}

export const sxStyles = (props:props) => {
    return {
    boxStyle : {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: props.transform?props.transform : "translate(-50%, -50%)",
        width: props.width? props.width: 500,
        // height: props.height? props.height: "auto",
        bgcolor: "#fff",
        boxShadow: 24,
        border:"none",
        p: props.padding? props.padding: 0,
        "&:focus-visible":{
          outline:"none",
        },
        borderRadius:props.borderRadius? props.borderRadius: 0,
    },
    backdropStyle:{
      ".MuiBackdrop-root":{
        backgroundColor: props.backdropBackgroundColor?  props.backdropBackgroundColor:  "#ddd",
        opacity: props.opacity? props.opacity:"0.9!important",
      }
    },
   }
}
