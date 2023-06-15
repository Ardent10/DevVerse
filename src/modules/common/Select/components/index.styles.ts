interface Props {
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  color?: string;
  margin?: string;
  menuItemFontSize?: number;
  menuItemFontWeight?: number;
  menuItemFontColor?: string;
  fontWeight?: number;
  backgroundColor?: string;
}
export const sxStyles = (props: Props) => {
  return {
    selectGridStyle: {
      // marginTop: props.theme.spacing(0.5),
      display: props.display ? props.display : "flex",
      justifyContent: props.justifyContent ? props.justifyContent : "center",
      alignItems: props.alignItems ? props.alignItems : "center",
      flexDirection: props.flexDirection ? props.flexDirection : "row",
    },
    selectStyle: {
      width: props.width ? props.width : "100%",
      height: props.height ? props.height : 30,
      margin: props.margin ? props.margin : 0,
      padding: 0,
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : "#FFF",
      ".Mui-disabled": {
        backgroundColor: "rgb(107, 115, 122)",
        color: "#FFFF",
        height: props.height ? props.height : 30,
        margin: 0,
        padding: "1px 0 0 15px",
        textFillColor: "#FFFF",
      },
      ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
        {
          padding: 0.5,
        },
    },
    titleStyle: {
      fontSize: props.fontSize ? props.fontSize : "14px",
      color: props.color ? props.color : "#4b4b4b",
      margin: props.margin ? props.margin : 0,
    },
    selectMenuItemStyle: {
      maxHeight: 200,
      overflowY: "scroll",
    },
    menuItemStyle: {
      display: "flex",
      margin: "0 10px 0 0",
      fontSize: props.menuItemFontSize ? props.menuItemFontSize : "14px",
      color: props.menuItemFontColor ? props.menuItemFontColor : "#4b4b4b",
      fontWeight: props.menuItemFontWeight ? props.menuItemFontWeight : 500,
      padding: 1,
    },
    boxStyle: {
      display: "flex",
      justifyContent: "space-between",
    },
    expandIcon: {
      fontSize: 30,
    },
    errorStyle: {
      color: "#FF0000",
    },
    requiredStyle: {
      color: "red",
      fontWeight: 600,
    },
    checkBoxStyle: {
      "&.Mui-checked": {
        color: "#4E12C3",
      },
    },
    checkBoxLabelStyle: {
      "& .MuiFormControlLabel-label": {
        fontSize: props.menuItemFontSize || 13,
      },
    },
    selectedStyle: {
      my:0.5,
      "&.Mui-selected": {
        backgroundColor: "#8a89fa",
        color: "#FFFF",
      },
    },
  };
};
