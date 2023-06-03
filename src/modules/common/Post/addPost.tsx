import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BasicModal } from "../Modal";
import { PrimaryButton } from "../PrimaryButton";
import AddNewPostModal from "./addNewPostModal";

const postOptions = [
  {
    id: 1,
    title: "Photo",
    icon: <AddPhotoAlternateIcon sx={{ color: "#8a89fa" }} />,
  },
  {
    id: 2,
    title: "Video",
    icon: <PlayCircleOutlineIcon sx={{ color: "#8a89fa" }} />,
  },
  {
    id: 3,
    title: "Attachment",
    icon: <AttachFileIcon sx={{ color: "#8a89fa" }} />,
  },
  {
    id: 4,
    title: "Audio",
    icon: <MicIcon sx={{ color: "#8a89fa" }} />,
  },
];

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
            p: 0,
          }}
        >
          <CardContent id="CardContent">
            <Grid
              item
              container
              xs={12}
              py={1}
              display="flex"
              // justifyContent="center"
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
                  fontWeight={400}
                  title="What's on your mind..."
                  type="button"
                  borderColor="1px solid #8a89fa"
                  color="#8a89fa"
                  width={630}
                  borderRadius="30px"
                  height={50}
                  onClick={handleOpen}
                  disableElevation
                />
              </Grid>
            </Grid>
            <Divider />
            <Grid
              item
              pt={1}
              xs={12}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {postOptions.map((option) => (
                <PrimaryButton
                  title=""
                  type="button"
                  backgroundColor="#eeeeeed1"
                  fontSize={12}
                  height={40}
                  disableElevation
                  buttonChild={
                    <>
                      {option.icon}
                      <Typography color="#000" textTransform="none">
                        {option.title}
                      </Typography>
                    </>
                  }
                />
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default AddPost;
