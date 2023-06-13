import { Theme } from "@mui/material/styles";

interface props {
  theme?: Theme;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  inputTextPaddingLeft?: string;
}

export const sxStyles = (props: props) => {
  return {
    menuItemStyle: {
      padding: 2,
      "&.MuiMenuItem-root:hover": {
        borderRadius: 1.5,
        // background: "#8a89fa",
        // color: "#FFFF",
      },
    },
    menuListIconStyle: {
      ".MuiListItemIcon-root::hover": {
        color: "#FFFFF",
      },
    },
    menuListItemsStyle: {
      ".MuiTypography-root": {
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
      },
    },
  };
};
