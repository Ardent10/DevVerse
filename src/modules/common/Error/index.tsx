import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { sxStyles } from "./index.styles";

interface props {
  error?: any;
  fontSize?:number,
}

export function Error({ error,fontSize }: props) {
  const theme = useTheme();
  const styleProps = { theme: theme,fontSize:fontSize };
  const styles = sxStyles(styleProps);

  return (
    error && <Typography sx={styles.errorStyle}>{error.message}</Typography>
  );
}