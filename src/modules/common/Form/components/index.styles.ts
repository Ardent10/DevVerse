import { Theme } from "@mui/material/styles";

interface props {
  theme?: Theme;
  leftMarginToInputField?: any;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  inputTextPaddingLeft?: string;
  headingMargin?: string;
  inputFieldPadding?: string | number;
}

export const sxStyles = (props: props) => {
  return {
    loginPageContainer: {
      margin: 9,
      padding: 4,
      alignItems: "center",
    },
    heading: {
      fontWeight: 700,
      letterSpacing: ".56px",
      fontSize: 38,
      lineHeight: 1.5,
      marginBottom: 1,
      color: "#2d1956",
    },
    formContainerStyle: {
      marginTop: 1,
      width: 480,
    },
    boxStyle: {
      display: "flex",
      flexDirection: "column",
      background: "#f9f9f9",
      justifyContent: "center",
    },
    gridStyle: {
      margin: "10px 0",
    },
    InputStyle: {
      padding: "7px 10px",
      border: "0.5px solid #c7c8cb",
      color: "#000",
      background: "#fff",
      borderRadius: 5,
      width: "480px",
      fontSize: "14px",
      ":focusVisible": {
        outline: "#0f0da1",
      },
      ":focus": {
        border: "1px solid #0f0da1",
        boxShadow: "0 0 5px 1px #c8def0",
      },
    },
    checkboxStyle: {
      "& .MuiSvgIcon-root": {
        fontSize: 14,
      },
      "& .Mui-checked": {
        color: "#4e12c3!important",
      },
    },
    labelStyle: {
      "& .MuiTypography-root": {
        fontSize: "12px",
      },
    },
    buttonGridStyle: {
      display: "flex",
      flexDirection: "column",
      "& .Mui-checked": {
        color: "#4e12c3!important",
      },
    },
    // Form Background Styles
    formBgGridStyle: {
      backgroundColor: "#f0f0f5",
    },
    crosscopeImgStyle: {
      maxWidth: "100%",
      maxHeight: "100vh",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      ObjectFit: "fil",
    },
    crosscopeImg: {
      width: "100%",
      height: 775,
    },

    //For InputField
    giveLeftPaddingInputText: {
      ".MuiOutlinedInput-input": {
        paddingLeft: props.inputTextPaddingLeft,
      },
    },
    giveLeftMargin: {
      marginLeft: props.leftMarginToInputField,
    },
    forgetPasswordGridStyle: {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      textDecoration: "none",
      color: "#4e12c3",
    },
    errorStyle: {
      color: "#FF0000",
      margin: "5px 0",
    },
    inputStyle: {
      color: "secondary",
      width: "480px",
      borderRadius: "5px",
      fontSize: "16px",
      "&:focusVisible": {
        outline: "#0f0da1",
      },
      "&:focus": {
        border: "1px solid #0f0da1",
        boxShadow: "0 0 5px 1px #c8def0",
      },
    },

    // For InputHeading
    inputHeadingGridStyle: {
      display: "flex",
    },
    forgetPasswordStyle: {
      textDecoration: "none",
      color: "#4e12c3",
      "&:hover": {
        textDecoration: "underline",
      },
    },

    inputTitleStyle: {
      height: "24px",
      fontWeight: props.fontWeight,
      fontSize: props.fontSize,
      color: props.color,
      lineHeight: "24px",
      marginBottom: "5px",
      padding: "0",
    },

    requiredStyle: {
      color: "red",
      fontWeight: "600",
    },
    // Disabled Inputfields
    disabledStyle: {
      backgroundColor: "#ededed",
      color: "#4b4b4b",
    },

    // InputField Styles
    inputFieldStyle: {
      ".MuiOutlinedInput-input": {
        height: 15,
        fontSize: 14,
        color: "#000",
        padding: props.inputFieldPadding
          ? props.inputFieldPadding
          : "8.5px 14px",
        background: "#fff",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgba(0, 0, 0, 0.23)", // default
        },
        "&.Mui-focused fieldset": {
          boxShadow: "0 0 5px 1px #c8def0",
          border: "1px solid #0f0da1",
          borderColor: "#0f0da1", // focus
        },
      },
      "& .Mui-disabled": {
        "& .MuiOutlinedInput-input": {
          color: "#4b4b4b",
        },
        backgroundColor: "#ededed",
      },
    },
  };
};
