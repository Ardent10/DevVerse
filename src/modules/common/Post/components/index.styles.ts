import { Theme } from "@mui/material/styles";

interface props {
  theme?: Theme;
  leftMarginToInputField?: any;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  inputTextPaddingLeft?: string;
  headingMargin?: string;
}

export const sxStyles = () => {
  return {
    avatarStyle: { width: 56, height: 56 },
    cardHeaderStyle: {
      ".MuiCardHeader-title": { fontSize: 14, fontWeight: 500 },
      paddingBottom: 0,
    },
    cardActionTopStyle: { display: "flex", py: 0 },
    cardActionBottomStyle: { display: "flex", justifyContent: "space-between" },
    loveIconStyle: { color: "Red", fontSize: 25 },
    likeIconStyle: { color: "#8a89fa", fontSize: 25 },
    commentIconStyle: { color: "#8a89fa", fontSize: 25 },
    shareIconStyle: { color: "#8a89fa", fontSize: 25 },

    fileTypographyStyle: {
      marginTop: "2%",
      marginBottom: "2%",
    },

    fileContainerStyle: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#F6F6FA",
      height: 70,
      width: "100%",
      borderRadius: 1,
      marginTop: 0.5,
      padding: 1,
    },

    fileNameStyle: {
      fontSize: 12,
      textAlign: "left",
      fontWeight: 600,
      letterSpacing: ".2px",
      color: "#5a5a5a",
      opacity: "1",
    },

    fileSizeStyle: {
      color: "#bcbcbc",
      fontSize: "11px",
      letterSpacing: ".19px",
      fontWeight: "400",
      opacity: "1",
    },
    menuStyle: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  };
};
