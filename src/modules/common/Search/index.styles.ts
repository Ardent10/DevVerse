import { Theme } from "@mui/material/styles";

interface props {
	theme?: Theme;
	direction?: any;
	placeHolderFontSize?: string;
}

export const sxStyles = (props: props) => {
	return {
		giveLeftMargin: {
			marginLeft:
				props.direction && props.direction === "row" ? "20px" : "0",
			"& input::placeholder": {
				fontSize: props.placeHolderFontSize,
			},
		},
		errorStyle: {
			color: "#FF0000",
			margin: "5px 0",
			fontSize: 12,
		},
	};
};
