import { Theme } from "@mui/material/styles";
import { ReactElement } from "react";

interface props {
  theme: Theme;
  fontSize?: number;
  margin?: string;
  height?: number;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  color?: string;
  padding?: string | number;
  fontWeight?: number;
  tabBgColor?: string;
  indicatorBgColor?: string;
  hoverBgColor?: string;
  borderBottom?: number;
  borderColor?: string;
  displayTabIndicator?: string;
  indicatorHeight?: string;
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  selectedTabColor?: string;
  selectedtabBgColor?: string;
  tabsBgColor?: string;
  tabIconWithState?: string | ReactElement<any, string> | undefined;
  backgroundColor?: string;
  justifyContent?: "space-between" | "space-around" | "space-evenly";
}

export const sxStyles = (props: props) => {
  return {
    tabsContainerStyle: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      position: "relative",
    },
    tabsBoxStyle: {
      display: "flex",
      justifyContent: "space-between",
    },
    tabsStyle: {
      display: "flex",
      justifyContent: "space-between",
      height: props.height,
      backgroundColor: props.backgroundColor ? props.backgroundColor : "none",
      "& .MuiTabs-indicator": {
        backgroundColor: props.indicatorBgColor,
        display: props.displayTabIndicator,
        height: props.indicatorHeight,
      },
      borderBottom: props.borderBottom,
      borderColor: props.borderColor,
      minHeight: props.minHeight,
      "& .Mui-selected": {
        color: props.selectedTabColor,
        backgroundColor: props.selectedtabBgColor,
      },
    },
    tabStyle: {
      display: "flex",
      justifyContent: props.justifyContent
        ? props.justifyContent
        : "space-around",
      textTransform: props.textTransform ? props.textTransform : "uppercase",
      margin: props.margin,
      color: props.color,
      padding:props.padding,
      fontSize: props.fontSize,
      width: props.width,
      fontWeight: props.fontWeight,
      minHeight: props.minHeight,
      minWidth: props.minWidth,
      "& .MuiTabs-indicator": {
        backgroundColor: props.indicatorBgColor,
      },
      "&:hover": {
        backgroundColor: props.hoverBgColor,
      },
    },
  };
};
