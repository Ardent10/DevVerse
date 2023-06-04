import { LoginSchema } from "@/utils/validations";
import { Input } from "@common/Form/InputField";
import { CustomSnackbar, PrimaryButton } from "@common/index";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export function LoginScreen() {
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    severity: "error",
    message: "",
  });

  const defaultValues = {
    email: "developer@devverse.com",
    password: "Test@123",
    remember: true,
  };

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    alert(JSON.stringify(data));
    setOpenSnackbar({
      open: true,
      severity: "success",
      message: "Account Created Successfully",
    });
    router.push("/home");
  });

  const router = useRouter();

  return (
    <>
      <CustomSnackbar
        open={openSnackbar.open}
        severity="success"
        message={openSnackbar.message}
        vertical="top"
        horizontal="right"
      />
      <Grid container height="100vh">
        <Grid item xs={12} display="flex">
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            xs={12}
            sm={8}
            md={5}
          >
            <Grid
              item
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <Link href="/">
                <Box display="flex" justifyContent="start" alignItems="center">
                  <img src="/DevVerse1.jpg" height={50} alt="DevVerse" />
                </Box>
              </Link>
              <Typography fontSize={25} m={2}>
                X
              </Typography>
              <Link href="https://appwrite.io/">
                <Box display="flex" justifyContent="start" alignItems="center">
                  <img src="/appwrite.svg" width={180} alt="appwrite" />
                </Box>
              </Link>
            </Grid>
            <Grid container p={8} justifyContent="center" height="70vh">
              <Grid item xs={10}>
                <Typography
                  component="h1"
                  variant="h5"
                  fontSize={40}
                  fontWeight={500}
                  color="#8a89fa"
                  textAlign="center"
                >
                  Welcome Back
                </Typography>
              </Grid>
              <Grid item xs={9} rowSpacing={2}>
                <form onSubmit={onSubmit}>
                  <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                      <Input
                        name="email"
                        control={control}
                        type="text"
                        placeholder="Enter Email*"
                        disable={false}
                        inputHeadingType="Bold"
                        inputHeadingLabel="Email"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        name="password"
                        control={control}
                        type="password"
                        placeholder="Password*"
                        disable={false}
                        inputHeadingType="Bold"
                        inputHeadingLabel="Password"
                        required
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Controller
                            name="remember"
                            control={control}
                            render={({ field }) => {
                              return (
                                <Checkbox
                                  checked={true}
                                  {...field}
                                  sx={{
                                    "&.Mui-checked": {
                                      color: "#8a89fa",
                                    },
                                  }}
                                />
                              );
                            }}
                          />
                        }
                        label="Remember me"
                      />
                    </Grid>
                    <Grid item xs={12} justifyContent="center" mt={1}>
                      <PrimaryButton
                        fontSize={12}
                        fontWeight={500}
                        title="Login"
                        type="submit"
                        borderColor="1px solid #8a89fa"
                        backgroundColor="#8a89fa"
                        borderRadius="8px"
                        height={35}
                        width={390}
                      />
                    </Grid>
                  </Grid>
                </form>
                <Grid item container xs={12} mt={2}>
                  <Grid item xs>
                    <Link
                      style={{ textDecoration: "none", color: "#8a89fa" }}
                      href="/"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/signup"
                      style={{ textDecoration: "none", color: "#8a89fa" }}
                    >
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            bgcolor="rgb(18, 25, 48)"
            sx={{
              backgroundImage: "url(/Images/bg2.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="body2"
              color="#FFF"
              align="center"
              p={3}
              position="absolute"
              right={0}
              bottom={0}
            >
              {"Copyright © "}
              <Link
                style={{ textDecoration: "none", color: "#8a89fa" }}
                href="https://code-labz-v2.vercel.app/"
              >
                DevVersebz &nbsp;
              </Link>
              {new Date().getFullYear()}.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
