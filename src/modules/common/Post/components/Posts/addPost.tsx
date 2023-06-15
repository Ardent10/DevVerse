import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DescriptionIcon from "@mui/icons-material/Description";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { PrimaryButton } from "../../../PrimaryButton";
const postOptions = [
  {
    id: 1,
    title: "Photo",
    icon: <AddPhotoAlternateIcon sx={{ color: "#8a89fa" }} />,
    modalType: "uploadImageModal",
  },
  {
    id: 2,
    title: "Video",
    icon: <PlayCircleOutlineIcon sx={{ color: "#8a89fa" }} />,
    modalType: "uploadVideoModal",
  },
  {
    id: 3,
    title: "Document",
    icon: <DescriptionIcon sx={{ color: "#8a89fa" }} />,
    modalType: "uploadDocumentModal",
  },
];

export const AddPost = ({ toggleCreatePostModal }: any) => {
  return (
    <Grid container px={4}>
      <Card
        sx={{
          minWidth: "100%",
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
                onClick={() => toggleCreatePostModal()}
                disableElevation
              />
            </Grid>
          </Grid>
          {/* <Divider /> */}
          <Grid
            item
            pt={1}
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* {postOptions.map((option) => (
              <PrimaryButton
                key={option.id}
                title=""
                type="button"
                fontSize={12}
                borderColor="1px solid #8a89fa"
                height={40}
                disableElevation
                // onClick={() => handleOpenModal(option.modalType)}
                buttonChild={
                  <>
                    {option.icon}
                    <Typography color="#000" textTransform="none">
                      {option.title}
                    </Typography>
                  </>
                }
              />
            ))} */}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
