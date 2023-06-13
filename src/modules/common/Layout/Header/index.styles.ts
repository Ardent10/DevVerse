export const sxStyles = () => {
  return {
    navStyle: {
      width: "100vw",
      height: 100,
      backgroundColor: "#efeeee",
      boxShadow: "10px 10px 12px 0 rgba(0,0,0,.07)",
      borderRadius: "0 0 10px 10px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0 3rem",
      listStyleType: "none",
    },

    titleStyle: {
      fontSize: 20,
      color: "#8a89fa",
      textShadow:
        "2px 2px 4px rgba(0,0,0,.3), -2px -2px 4px rgba(255,255,255,1)",
    },
    searchStyle: { color: "#8a89fa" },
    searchIconBtnStyle: { zIndex: 2, position: "absolute" },

    editIconButtonStyle: {
      width: "30px",
      height: "30px",
      padding: "1px",
    },
    editIconStyles: {
      width: "20px",
      margin: "0 5px 0",
      zIndex: "2",
    },
    appBarBoxStyle: {
      background: "#ffff",
      flexGrow: 1,
    },
    appBarStyle: {
      boxShadow: "10px 10px 12px 0 rgba(0,0,0,.07)",
      padding: "0 !important",
    },
    toolBarStyle: {
      display: "flex",
      justifyContent: "space-between",
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
