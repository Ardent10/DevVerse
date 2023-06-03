import { Theme } from "@mui/material/styles";

interface props {
  width?: number;
  height?: number;
  fontSize?: number;
  backgroundColor?: string;
  color?: string;
  padding?: string | number;
  borderRadius?: string;
  borderNoBgColor?: boolean;
  borderColor?: string;
  theme: Theme;
}

export const sxStyles = (props: props) => {
	return {
    buttonStyle: {
      background: props.backgroundColor,
			border: props.borderColor,
      color: (props.color && props.color) || "#fff",
      width: props.width && props.width,
      height: (props.height && props.height) || "37px",
      borderRadius: (props.borderRadius && props.borderRadius) || "7px",
      fontFamily: "Poppins,sans-serif;",
      fontWeight: "700",
      fontSize: (props.fontSize && props.fontSize) || "14px",
      display: "inline-flex",
      padding: props.padding && props.padding,
      transition: "all 0.25s ease",
      "&:hover": {
        backgroundColor: "#FFFF",
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: "700",
        transform: "translateY(-0.1em)",
        color: "#2d1956",
      },
    },
  };
};
