import { Layout } from "@common/index";
import { Grid } from "@mui/material";
import { Profile } from "../components/Profile/profileBanner";

export function ProfileScreen() {
  return (
    <Layout>
      <Grid
        container
        justifyContent="center"
        bgcolor="#f7f7f7"
        minHeight="100vh"
        width="100%"
        pt={13}
      >
        <Grid item xs={9}>
          <Profile />
          {/* <Post postData={postData} /> */}
        </Grid>
      </Grid>
    </Layout>
  );
}
