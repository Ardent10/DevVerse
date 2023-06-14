import { useAuth } from "@/modules/authentication/hooks";
import { AddPost } from "@/modules/common/Post/components";
import { usePost } from "@/modules/common/Post/hooks";
import { useAppState } from "@/store";
import { BasicModal } from "@common/Modal";
import { BasicCard, Chips, Layout, Post, ProfilePreview } from "@common/index";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import {
  chipsArray,
  eventsArray,
  postData,
} from "@utils/SampleData/sampleData";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CreatePostModal } from "../components/createPostModal";

const HomeScreen: NextPage = () => {
  const [state] = useAppState();
  const [OpenCreatePostModal, setCreateCaseModalOpen] = useState(false);
  function toggleCreatePostModal() {
    setCreateCaseModalOpen((oldState) => !oldState);
  }

  const { getAccount } = useAuth();
  const { getPosts } = usePost();

  useEffect(() => {
    const fetchAccount = async () => {
      await getAccount();
    };
    fetchAccount();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      if (state.userProfile?.$id) {
        await getPosts();
      }
    };

    if (state.userProfile?.$id) {
      fetchPosts();
    }
  }, [state.userProfile?.$id, state.posts.length]);

  return (
    <>
      <BasicModal
        width={600}
        open={OpenCreatePostModal}
        padding={0}
        CloseModal={toggleCreatePostModal}
        borderRadius={3}
        backdropBackgroundColor="#EFEFE"
      >
        <CreatePostModal closeCreatePostModal={toggleCreatePostModal} />
      </BasicModal>

      <Layout>
        <Grid container bgcolor="#f7f7f7" pt={10}>
          <Grid item xs={2.5}>
            <ProfilePreview />
          </Grid>

          <Grid item xs={6.5}>
            <AddPost toggleCreatePostModal={toggleCreatePostModal} />
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
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
    </>
  );
};

export default HomeScreen;
