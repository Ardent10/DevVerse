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
    listItemIconStyle: {
      minWidth: 0,
      mr: props.open ? 3 : "auto",
      justifyContent: "center",
      color:"#000",
      "&.MuiListItemIcon-root:hover": {
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
