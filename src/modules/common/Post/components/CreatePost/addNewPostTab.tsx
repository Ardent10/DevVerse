import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import DescriptionIcon from "@mui/icons-material/Description";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import { Box, Divider, Grid, IconButton } from "@mui/material";
import { Input, InputHeading, TextAreaInput } from "../../../Form";
import { PrimaryButton } from "../../../PrimaryButton";
import { ChipSelector } from "../../../Select";
import { CustomTooltip } from "../../../Tooltip";

interface props {
  JumpToTab: (TabValue: number) => void;
  onNextClick: () => void;
  formData: any;
  CloseModal: () => void;
  control: any;
  resetForm: any;
  postData: any;
  isDirty: boolean;
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
  {
    id: 4,
    title: "Emoji",
    icon: <SentimentVerySatisfiedOutlinedIcon sx={{ color: "#8a89fa" }} />,
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
  {
    id: 11,
    label: "Node.js",
  },
  {
    id: 12,
    label: "Express.js",
  },
  {
    id: 13,
    label: "MongoDB",
  },
  {
    id: 14,
    label: "Python",
  },
  {
    id: 15,
    label: "Docker",
  },
  {
    id: 16,
    label: "Kubernetes",
  },
  {
    id: 17,
    label: "AWS",
  },
  {
    id: 18,
    label: "GraphQL",
  },
  {
    id: 19,
    label: "Vue.js",
  },
];

export function AddNewPostTab({
  CloseModal,
  onNextClick,
  JumpToTab,
  control,
  postData,
  isDirty,
}: props) {
  return (
    <Grid container>
      <Grid item xs={12} sm={8} md={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Divider />
          <form>
            <Grid item xs={12} container rowSpacing={2} p={3}>
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
                  required={true}
                  inputFieldPadding={2}
                />
              </Grid>
              <Grid item xs={12}>
                <InputHeading label="Description" required color="#8a89fa" />
                <TextAreaInput
                  name="description"
                  control={control}
                  required={true}
                />
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
                  title="Next"
                  type="button"
                  borderColor="1px solid #8a89fa"
                  backgroundColor="#8a89fa"
                  borderRadius="8px"
                  height={45}
                  width={90}
                  disabled={!isDirty}
                  onClick={() => {
                    onNextClick();
                    JumpToTab(2);
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
