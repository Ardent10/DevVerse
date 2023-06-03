import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Avatar, Card, CardContent, Grid, IconButton } from "@mui/material";
import { useState } from "react";
import { BasicModal } from "../Modal";
import {PrimaryButton} from "../PrimaryButton";
import AddNewPostModal from "./addNewPostModal";

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <BasicModal
        width={600}
        open={open}
        padding={0}
        CloseModal={handleClose}
        borderRadius={3}
        backdropBackgroundColor="#EFEFE"
      >
        <AddNewPostModal CloseModal={handleClose} />
      </BasicModal>
      <Grid container px={4}>
        <Card
          sx={{
            minWidth: "100%",
            // height: 100,
          }}
        >
          <CardContent>
            <Grid item xs={12}>
              <Grid
                container
                display="flex"
                justifyContent="start"
                alignItems="center"
              >
                <Grid item xs={1}>
                  <Avatar
                    alt="profile-icon"
                    src="Images/boy.png"
                    sx={{ width: 56, height: 56 }}
                  />
                </Grid>
                <Grid item xs={9} alignItems="center">
                  <PrimaryButton
                    fontSize={12}
                    title="+ New CodeLabz Post."
                    type="button"
                    borderColor="1px solid #8a89fa"
                    color="#8a89fa"
                    width={550}
                    borderRadius="30px"
                    height={50}
                    onClick={handleOpen}
                  />
                </Grid>
                <Grid
                  item
                  xs={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <IconButton size="large">
                    <AddPhotoAlternateIcon
                      sx={{ color: "#8a89fa", width: 40, height: 40 }}
                    />
                  </IconButton>
                  <IconButton size="large">
                    <PlayCircleFilledIcon
                      sx={{ color: "#8a89fa", width: 40, height: 40 }}
                    />
                  </IconButton>
                </Grid>

                <Grid item xs={6}></Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default AddPost;
