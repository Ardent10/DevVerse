import { useAuth } from "@/modules/authentication/hooks";
import AddPost from "@/modules/common/Post/components/addPost";
import { usePost } from "@/modules/common/Post/hooks";
import { BasicCard, Chips, Layout, Post, ProfilePreview } from "@common/index";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import {
  chipsArray,
  eventsArray,
  postData,
} from "@utils/SampleData/sampleData";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";

const HomeScreen: NextPage = () => {
  const { getAccount } = useAuth();
  const { getPosts } = usePost();

  useEffect(() => {
    const fetchAccount = async () => {
      await getAccount();
    };
    const fetchPosts = async () => {
      await getPosts();
    };
    fetchAccount();
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Grid container bgcolor="#f7f7f7" pt={10}>
        <Grid item xs={2.5}>
          <ProfilePreview />
        </Grid>

        <Grid item xs={6.5}>
          <AddPost />
          <Post postData={postData} />
        </Grid>

        <Grid item xs={3}>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <BasicCard title="Popular Tags" px={2}>
                <Chips chipsArray={chipsArray} />
              </BasicCard>
            </Grid>
            <Grid item xs={12}>
              <BasicCard title="Upcoming Events" px={2} py={0}>
                {eventsArray.map((e) => (
                  <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    key={e.key}
                    my={2}
                  >
                    <Box mr={2}>
                      <Avatar src={e.icon} />
                    </Box>
                    <Box>
                      <Typography fontSize={16} fontWeight={500}>
                        {e.label}
                      </Typography>
                      <Typography>{e.date}</Typography>
                    </Box>
                  </Box>
                ))}
              </BasicCard>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link
                  style={{ textDecoration: "none", color: "#8a89fa" }}
                  href="/"
                >
                  DevVerse &nbsp;
                </Link>
                {new Date().getFullYear()}.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomeScreen;
