import {
  chipsArray,
  eventsArray,
  postData,
} from "@/utils/SampleData/sampleData";
import AddPost from "@common/Post/addPost";
import { BasicCard, Chips, Layout, Post, ProfilePreview } from "@common/index";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Avatar, Badge, Box, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
const menuItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "Notifications",
    icon: (
      <Badge color="secondary" badgeContent={5}>
        <NotificationsIcon />
      </Badge>
    ),
  },
  {
    title: "Bookmarks",
    icon: <BookmarkIcon />,
  },
  {
    title: "Events",
    icon: <WhatshotIcon />,
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
  },
  {
    title: "User Settings",
    icon: <ManageAccountsIcon />,
  },
];

const HomeScreen: NextPage = () => {
  return (
    <Layout menuItems={menuItems}>
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
                { new Date().getFullYear()}.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomeScreen;
