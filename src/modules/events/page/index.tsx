import { BasicCard, Layout, PrimaryButton } from "@/modules/common";
import { ColorModeContext } from "@/modules/common/DarkMode";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { eventsArray } from "@utils/SampleData/sampleData";
import Link from "next/link";
import { useContext } from "react";

export default function EventsScreen() {
  const { mode } = useContext(ColorModeContext);
  return (
    <Layout>
      <Grid
        height="100vh"
        container
        display="flex"
        alignItems="center"
        flexDirection="column"
        bgcolor={mode === "light" ? "#f7f7f7" : ""}
        pt={10}
      >
        <BasicCard px={10} height="85vh">
          <Box mt={4} mb={2}>
            <Typography
              variant="h1"
              fontWeight={500}
              component="h1"
              align="center"
            >
              Events
            </Typography>
          </Box>
          <Grid container spacing={3} px={5}>
            {eventsArray.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.key}>
                <Box p={2} boxShadow={1}>
                  <Box
                    mr={2}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Avatar sx={{ height: 50, width: 50 }} src={event.icon} />
                    <Typography
                      variant="h4"
                      component="h2"
                      fontWeight={500}
                      gutterBottom
                    >
                      {event.label}
                    </Typography>
                  </Box>

                  <Box display="flex" justifyContent="flex-end" px={2}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                      Date: {event.date}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <PrimaryButton
                      title="Register"
                      type="button"
                      borderColor="1px solid #8a89fa"
                      backgroundColor="#8a89fa"
                      fontSize={12}
                      fontWeight={500}
                      width={180}
                      height={30}
                      disableElevation
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </BasicCard>
        <Grid item xs={12}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link style={{ textDecoration: "none", color: "#8a89fa" }} href="/">
              DevVerse &nbsp;
            </Link>
            {new Date().getFullYear()}.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
