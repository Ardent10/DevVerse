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
    },
    cardActionTopStyle: { display: "flex" },
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
  };
};
