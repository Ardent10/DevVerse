import { TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import { Error } from "../../Error";

const TextArea = styled(TextareaAutosize)(() => ({
  width: "100%",
  padding: 10,
  borderRadius: "8px",
  fontFamily:"Tomorrow, sans-serif",
  "&:disabled": {
    "& .MuiOutlinedInput-input": {
      color: "#4b4b4b",
    },
    backgroundColor: "#ededed",
  },
}));

interface props {
  name: string;
  disable?: boolean;
  required?: boolean;
  control: any;
  minRows?: number;
}

export function TextAreaInput({
  name,
  disable,
  control,
  required,
  minRows,
}: props) {
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
          <>
            <TextArea
              onChange={onChange}
              value={(value && value) || ""}
              minRows={minRows ? minRows : 5}
              maxRows={20}
              disabled={disable}
            />
            <Error error={error} fontSize={12} />
          </>
        );
      }}
    />
  );
}
