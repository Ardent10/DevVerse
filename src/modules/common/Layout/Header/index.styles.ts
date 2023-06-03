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
    appBarStyle: { boxShadow: "10px 10px 12px 0 rgba(0,0,0,.07)" },
    toolBarStyle: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
};
