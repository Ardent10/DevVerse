import { ColorModeContext } from "@/modules/common/DarkMode";
import { Layout } from "@common/index";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { Profile } from "../components/Profile/profileBanner";

export function ProfileScreen() {
  const { mode } = useContext(ColorModeContext);
  return (
    <Layout>
      <Grid
        container
        justifyContent="center"
        bgcolor={mode === "light" ? "#f7f7f7" : ""}
        minHeight="100vh"
        width="100%"
        pt={13}
      >
        <Grid item xs={9}>
          <Profile />
        </Grid>
      </Grid>
    </Layout>
  );
}
