import { ColorModeContext } from "@/modules/common/DarkMode";
import { AddPost } from "@/modules/common/Post/components";
import { usePost } from "@/modules/common/Post/hooks";
import { useAppState } from "@/store";
import { BasicModal } from "@common/Modal";
import { BasicCard, Layout, Post, ProfilePreview } from "@common/index";
import { Avatar, Box, Grid, MenuItem, Typography } from "@mui/material";
import { eventsArray, postData } from "@utils/SampleData/sampleData";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CreatePostModal } from "../components/createPostModal";
import { CreateTags } from "../components/createTags";

const HomeScreen = () => {
  const [state] = useAppState();
  const { mode } = useContext(ColorModeContext);
  const [OpenCreatePostModal, setCreateCaseModalOpen] = useState(false);

  const { getPosts } = usePost();

  function toggleCreatePostModal() {
    setCreateCaseModalOpen((oldState) => !oldState);
  }

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
        <Grid container bgcolor={mode === "light" ? "#f7f7f7" : ""} pt={10}>
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
                <CreateTags />
              </Grid>
              <Grid item xs={12}>
                <BasicCard title="Upcoming Events" divider px={2} py={0}>
                  {eventsArray.map((e) => (
                    <MenuItem key={e.key}>
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
                    </MenuItem>
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
