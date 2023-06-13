import { AddPost } from "@/modules/common/Post/components";
import { Layout, Post } from "@common/index";
import { Grid } from "@mui/material";
import { postData } from "@utils/SampleData/sampleData";
import { ProfileBanner } from "../components/profileBanner";

export function ProfileScreen() {
  return (
    <>
      <Layout>
        <Grid container justifyContent="center" bgcolor="#f7f7f7" pt={10}>
          <Grid item xs={8}>
            <ProfileBanner />
            <Post postData={postData} />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
