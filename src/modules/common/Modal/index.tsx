import React,{useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";
import { sxStyles } from "./index.styles";

interface props {
  children?: React.ReactElement;
  borderRadius?: number;
  width: number;
  height?: number;
  padding: number;
  open: boolean;
  transform?:string,
  BackdropClick?:boolean,
  CloseModal: any;
  OpenModal?: any;
  backdropBackgroundColor?: string;
  opacity?: string;
}

export function BasicModal({
  width,
  height,
  padding,
  borderRadius,
  open,
  backdropBackgroundColor,
  opacity,
  CloseModal,
  OpenModal,
  BackdropClick,
  transform,
  children,
}: props) {
  const theme = useTheme();
  const props = {
    theme: theme,
    borderRadius: borderRadius,
    width: width,
    padding: padding,
    height: height,
    transform:transform,
    backdropBackgroundColor: backdropBackgroundColor,
    opacity: opacity,
  };
  const styles = sxStyles(props);
  const handleBackdropClick =((event: {}, reason: "backdropClick" | "escapeKeyDown") =>{
      if (reason !== "backdropClick" || "escapeKeyDown"){
        OpenModal;
      }
  })
  return (
    <Modal
      sx={styles.backdropStyle}
      open={open}
      onClose={BackdropClick===true?handleBackdropClick: CloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEscapeKeyDown={true}
    >
      <Box sx={styles.boxStyle}>{children}</Box>
    </Modal>
  );
}
