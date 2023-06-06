import { Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import { sxStyles } from "./index.styles";

interface props {
  label?: string;
  required?: boolean;
  fontSize?: number;
  direction?: string;
  fontWeight?: number;
  color?: string;
  headingMargin?: string;
  forgetPasswordLink?: boolean;
}

export function InputHeading({
  label,
  required,
  fontSize,
  direction,
  color,
  fontWeight,
  headingMargin,
  forgetPasswordLink,
}: props) {
  const theme = useTheme();
  const sxStylesProps = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
    direction: direction,
    margin: headingMargin,
    theme: theme,
  };
  const styles = sxStyles(sxStylesProps);

  return (
    <Grid sx={styles.inputHeadingGridStyle}>
      <Typography component="h4" variant="h6" sx={styles.inputTitleStyle}>
        {label}
        {required && <span style={styles.requiredStyle}>*</span>}
      </Typography>

      {/* To show Forgot-password link in case of password input */}
      {label === "Password" && forgetPasswordLink && (
        <Grid item xs sx={styles.forgetPasswordGridStyle}>
          <Link
            href="/forgot-password"
            variant="body2"
            sx={styles.forgetPasswordStyle}
          >
            Forgot your password?
          </Link>
        </Grid>
      )}
    </Grid>
  );
}
