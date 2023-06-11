import { Input } from "@/modules/common/Form/components/InputField";
import { PrimaryButton } from "@common/PrimaryButton";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { LoginSchema } from "@utils/validations";
import Link from "next/link";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";

export function CompleteProfile() {
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
  });

  const router = useRouter();

  return (
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
          md={6}
        >
          <Grid item display="flex" justifyContent="start" alignItems="center">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box display="flex" justifyContent="start" alignItems="center">
                <img src="/DevVerse1.jpg" height={50} alt="DevVerse" />
              </Box>
            </Link>
            <Typography fontSize={25} m={2}>
              X
            </Typography>
            <Link
              href="https://appwrite.io/"
              style={{ textDecoration: "none" }}
            >
              <Box display="flex" justifyContent="start" alignItems="center">
                <img src="/appwrite.svg" width={180} alt="appwrite" />
              </Box>
            </Link>
          </Grid>
          <Grid
            container
            p={8}
            justifyContent="center"
            alignItems="center"
            height="80vh"
          >
            <Grid item xs={10}>
              <Typography
                component="h1"
                variant="h5"
                fontSize={40}
                fontWeight={500}
                color="#8a89fa"
                textAlign="center"
              >
                Create Your Account
              </Typography>
            </Grid>
            <Grid item xs={9} rowSpacing={2}>
              <form onSubmit={onSubmit}>
                <Grid container rowSpacing={2}>
                  <Grid item xs={12}>
                    <Grid container columnSpacing={2}>
                      <Grid item xs={6}>
                        <Input
                          name="first_name"
                          control={control}
                          type="text"
                          placeholder="Enter First Name*"
                          disable={false}
                          inputHeadingType="Bold"
                          inputHeadingLabel="First Name"
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Input
                          name="last_name"
                          control={control}
                          type="text"
                          placeholder="Enter First Name*"
                          disable={false}
                          inputHeadingType="Bold"
                          inputHeadingLabel="Last Name"
                          required
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container columnSpacing={2}>
                      <Grid item xs={6}>
                        <Input
                          name="username"
                          control={control}
                          type="text"
                          placeholder="Enter Username*"
                          disable={false}
                          inputHeadingType="Bold"
                          inputHeadingLabel="Username"
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Input
                          name="email"
                          control={control}
                          type="email"
                          placeholder="Enter Email*"
                          disable={false}
                          inputHeadingType="Bold"
                          inputHeadingLabel="Email"
                          required
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container columnSpacing={2}>
                      <Grid item xs={6}>
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
                      <Grid item xs={6}>
                        <Input
                          name="confirm_password"
                          control={control}
                          type="password"
                          placeholder="Password*"
                          disable={false}
                          inputHeadingType="Bold"
                          inputHeadingLabel="Confirm Password"
                          required
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
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
                      label="I agree to DevVerse Term & Conditions."
                    />
                  </Grid>
                  <Grid item xs={12} justifyContent="center" mt={1}>
                    <PrimaryButton
                      fontSize={12}
                      fontWeight={600}
                      title="Sign Up"
                      type="submit"
                      borderColor="1px solid #8a89fa"
                      backgroundColor="#8a89fa"
                      borderRadius="8px"
                      height={35}
                      width={480}
                      onClick={() => router.push("/home")}
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
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
              DevVerse &nbsp;
            </Link>
            {new Date().getFullYear()}.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
