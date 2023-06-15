import { Grid, TextField } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import { Error } from "../../Error";
import { InputHeading } from "./InputHeading";
import { sxStyles } from "./index.styles";

const StyledInput = styled(
  TextField,
  {}
)(() => ({
  ".MuiOutlinedInput-input": {
    height: 15,
    fontSize: 14,
    color: "#000",
    padding: "8.5px 14px",
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
}));

interface props {
  name: string;
  type: string;
  placeholder?: string;
  direction?: "row" | "column";
  disable?: boolean;
  control?: any;
  required?: boolean;
  inputHeadingType?: string;
  inputHeadingLabel?: string;
  inputHeadingLabelFontWeight?: number;
  inputHeadingLabelFontSize?: number;
  inputHeadingLabelColor?: string;
  inputTextPaddingLeft?: string;
  inputHeadingGridSpace?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  inputFieldGridSpace?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  leftMarginToInputField?: string;
  onChange?: any;
  rest?: any;
  forgetPasswordLink?: boolean;
  maxDate?: Date | string;
  minDate?: Date | string;
  inputFieldPadding?: string|number;
}

export const Input = ({
  name,
  type,
  placeholder,
  direction,
  disable,
  control,
  required,
  inputHeadingType,
  inputHeadingLabel,
  inputHeadingLabelFontWeight,
  inputHeadingLabelFontSize,
  inputHeadingLabelColor,
  inputTextPaddingLeft,
  inputHeadingGridSpace,
  inputFieldGridSpace,
  leftMarginToInputField,
  rest,
  forgetPasswordLink,
  maxDate,
  minDate,
  inputFieldPadding,
}: props) => {
  const theme = useTheme();
  const styles = sxStyles({
    theme,
    leftMarginToInputField,
    inputTextPaddingLeft,
    inputFieldPadding,
  });

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
          <Grid
            container
            direction={direction}
            alignItems={direction === "row" ? "center" : ""}
          >
            {inputHeadingType && (
              <Grid item xs={direction === "row" ? inputHeadingGridSpace : 12}>
                {inputHeadingType === "Bold" && (
                  <InputHeading
                    label={inputHeadingLabel}
                    forgetPasswordLink={forgetPasswordLink}
                    required={required}
                    fontWeight={
                      inputHeadingLabelFontWeight
                        ? inputHeadingLabelFontWeight
                        : 600
                    }
                    fontSize={
                      inputHeadingLabelFontSize ? inputHeadingLabelFontSize : 16
                    }
                    color={
                      inputHeadingLabelColor
                        ? inputHeadingLabelColor
                        : "#8a89fa"
                    }
                  />
                )}

                {inputHeadingType === "Normal" && (
                  <InputHeading
                    label={inputHeadingLabel}
                    required={required}
                    forgetPasswordLink={forgetPasswordLink}
                    fontWeight={
                      inputHeadingLabelFontWeight
                        ? inputHeadingLabelFontWeight
                        : 400
                    }
                    fontSize={
                      inputHeadingLabelFontSize ? inputHeadingLabelFontSize : 12
                    }
                    color={
                      inputHeadingLabelColor
                        ? inputHeadingLabelColor
                        : "#4b4b4b"
                    }
                  />
                )}
              </Grid>
            )}

            <Grid item xs={direction === "row" ? inputFieldGridSpace : 12}>
              <TextField
                sx={{
                  ...styles.giveLeftMargin,
                  ...styles.giveLeftPaddingInputText,
                  ...styles.inputFieldStyle,
                }}
                type={type}
                placeholder={placeholder}
                fullWidth={true}
                InputLabelProps={{
                  shrink: false,
                }}
                disabled={disable}
                size="small"
                error={
                  error || (required && isTouched && !value) ? true : false
                }
                value={value}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                inputRef={ref}
                inputProps={{
                  max: maxDate ? maxDate : undefined,
                  min: minDate ? minDate : undefined,
                }}
                onKeyDown={(e) => (type === "date" ? e.preventDefault() : {})}
                {...rest}
              />
            </Grid>

            <Error error={error} fontSize={12} />
          </Grid>
        );
      }}
    />
  );
};
