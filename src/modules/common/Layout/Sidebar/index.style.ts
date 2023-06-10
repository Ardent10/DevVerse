interface props {
  open:any;
}

export const sxStyles = (props: props) => {
  return {
    listItemBtnStyles: {
      minHeight: 48,
      justifyContent: props.open ? "initial" : "center",
      px: 2.5,
      "&.MuiButtonBase-root:hover": {
        backgroundColor: "#8a89fa",
        color: "#FFFF",
      },
    },
    listItemSelectedBtnStyles: {
      minHeight: 48,
      justifyContent: props.open ? "initial" : "center",
      px: 2.5,
      backgroundColor: "#8a89fa",
      color: "#FFFF",
      "&.MuiButtonBase-root:hover": {
        backgroundColor: "#8a89fa",
        color: "#FFFF",
      },
    },
    listItemIconStyle: {
      minWidth: 0,
      mr: props.open ? 3 : "auto",
      justifyContent: "center",
      color:"#000",
      "&.MuiButtonBase-root:hover": {
        color: "#FFFF",
      },
    },
    listItemSelectedBtnIconStyle: {
      minWidth: 0,
      mr: props.open ? 3 : "auto",
      justifyContent: "center",
      color:"#FFFF",
      "&.MuiButtonBase-root:hover": {
        color: "#FFFF",
      },
    },
    listItemTextStyle: {
      ".MuiTypography-root": {
        fontSize: 14,
        fontWeight: 500,
      },
      opacity: props.open ? 1 : 0,
    },
  };
};
