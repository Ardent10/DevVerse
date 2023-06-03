import { Grid, TextField } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import { sxStyles } from "./index.styles";


const StyledInput = styled(TextField)(() => ({
  ".MuiInputBase-input": {
    "&::placeholder": {
      color: "#8a89fa",
      opacity: 1,
    },
  },
  ".MuiOutlinedInput-input": {
    height: 15,
    fontSize: 13,
    color: "#8a89fa",
    padding: "10px 30px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#8a89fa",
  },
  "& .MuiOutlinedInput-root": {
    "& .Mui-focused fieldset": {
      boxShadow: "0 0 5px 1px #c8def0",
      border: "1px solid #8a89fa",
      borderColor: "#8a89fa",
    },
    borderRadius: 15,
  },
	"& .MuiOutlinedInput-notchedOutline":{
		borderColor: "#8a89fa",
	}
}));

interface props {
  name: string;
  type?: string;
  control?: any;
  placeholder?: string;
  disable?: boolean;
  required?: boolean;
  fontWeight?: number;
  fontSize?: number;
  setIsSearching?: (state: boolean) => any;
  placeHolderFontSize?: string;
  direction?:
    | "row"
    | "column-reverse"
    | "column"
    | "row-reverse"
}
export function SearchBar({
	name,
	type,
	placeholder,
	placeHolderFontSize,
	direction,
	disable,
	setIsSearching,
	control,
}: props) {
	const theme = useTheme();
	const styles = sxStyles({ theme, direction, placeHolderFontSize });

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, onBlur, value, ref },
				fieldState: { isTouched, isDirty, error },
				formState: { isValid },
			}) => {
				return (
					<Grid container direction={direction}>
						<Grid item xs={direction === "row" ? 4 : 12}>
							<StyledInput
								sx={styles.giveLeftMargin}
								type={type}
								placeholder={placeholder}
								fullWidth={true}
								InputLabelProps={{
									shrink: false,
								}}
								autoFocus={true}
								disabled={disable}
								size="small"
								// error={
									// isTouched && !value
										// ? setIsSearching(false)
										// : false
								// }
								value={value}
								onBlur={onBlur} // notify when input is touched
								onChange={onChange} // send value to hook form
								inputRef={ref}
							/>
						</Grid>
					</Grid>
				);
			}}
		/>
	);
}
