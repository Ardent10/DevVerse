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
  };
};
