import { useAppState } from "@/store/index";
import { yupResolver } from "@hookform/resolvers/yup";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { NewPostSchema } from "../../../../utils/validations";
import { Input, InputHeading, TextAreaInput } from "../../Form";
import { PrimaryButton } from "../../PrimaryButton";
import { ChipSelector } from "../../Select";
import { CustomTooltip } from "../../Tooltip";
import { usePost } from "../hooks";

interface props {
  CloseModal: any;
}

const newPostOptions = [
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
    title: "Document",
    icon: <DescriptionIcon sx={{ color: "#8a89fa" }} />,
  },
];

const tags = [
  {
    id: 1,
    label: "Appwrite",
  },
  {
    id: 2,
    label: "BaaS",
  },
  {
    id: 3,
    label: "TypeScript",
  },
  {
    id: 4,
    label: "JavaScript",
  },
  {
    id: 5,
    label: "NextJs",
  },
  {
    id: 6,
    label: "React",
  },
  {
    id: 7,
    label: "Material UI",
  },
  {
    id: 8,
    label: "HTML",
  },
  {
    id: 9,
    label: "CSS",
  },
  {
    id: 10,
    label: "ChatGPT",
  },
];

export default function AddNewPostModal(props: props) {
  const [state, dispatch] = useAppState();
  const { addPost } = usePost();
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(NewPostSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    addPost({
      userId: state.userProfile.id,
      title: data.title,
      description: data.description,
      tags: data.tags,
    });
    props.CloseModal();
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={8} md={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box borderRadius="12px 12px 0 0">
            <Box
              p={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                display="flex"
                justifyContent="center"
                alignItems="center"
                component="h1"
                variant="h5"
                fontSize={22}
                fontWeight={500}
                color="#8a89fa"
                ml={2}
              >
                Create a Post
              </Typography>
              <IconButton onClick={props.CloseModal}>
                <CloseIcon fontSize="large" sx={{ color: "#8a89fa" }} />
              </IconButton>
            </Box>
          </Box>
          <Divider />
          <form onSubmit={onSubmit}>
            <Grid
              item
              xs={12}
              container
              rowSpacing={2}
              p={3}
            >
              <Grid item xs={12}>
                <Input
                  name="title"
                  control={control}
                  type="text"
                  placeholder="Enter Title*"
                  inputHeadingLabelColor="#8a89fa"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabel="Title"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputHeading label="Description" required color="#8a89fa" />
                <TextAreaInput name="description" control={control} />
              </Grid>
              <Grid item xs={12}>
                <ChipSelector
                  name="tags"
                  control={control}
                  data={tags}
                  label="Tags"
                  required
                  color="#8a89fa"
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              px={3}
              pb={3}
              display="flex"
              justifyContent="space-between"
            >
              <Grid item xs={10}>
                <Grid container spacing={2}>
                  {newPostOptions.map((item) => (
                    <Grid item key={item.id}>
                      <CustomTooltip label={item.title} placement="bottom">
                        <IconButton>{item.icon}</IconButton>
                      </CustomTooltip>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <PrimaryButton
                  fontSize={12}
                  title="Create"
                  type="submit"
                  borderColor="1px solid #8a89fa"
                  backgroundColor="#8a89fa"
                  borderRadius="8px"
                  height={45}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
