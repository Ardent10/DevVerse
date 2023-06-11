import {
  AddNewPostTab,
  UploadImageTab,
} from "@/modules/common/Post/components";
import { GlobalTabs } from "@/modules/common/Tabs";
import { NewPostSchema } from "@/utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface tab {
  id: number;
  value: number;
  index: number;
  label: string;
  panel: React.ReactElement;
}

interface props {
  closeCreatePostModal: any;
  currentTab?: number;
}

export function CreatePostModal(props: props) {
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: [],
  });
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    tags: [],
  });

  const { handleSubmit, control, reset, watch, getValues, setValue } = useForm({
    resolver: yupResolver(NewPostSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log("DATA=>", data);
    // addPost({
    //   userId: state.userProfile.id,
    //   title: data.title,
    //   description: data.description,
    //   tags: data.tags,
    // });
    // CloseModal();
  });

  useEffect(() => {
    const subscription: any = watch(async (data: any) => {
      setFormData(data);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  function JumpToTab(tabValue: number) {
    setCurrentTab(tabValue);
  }

  function onNextClick(): void {
    let title = getValues("title");
    let description = getValues("description");
    let tags = getValues("tags");
    setPostData({
      title,
      description,
      tags,
    });
  }

  console.log("PostData", postData);

  const tabsArray: tab[] = [
    {
      id: 1,
      value: 1,
      index: 1,
      label: "Add Post Details",
      panel: (
        <AddNewPostTab
          CloseModal={props.closeCreatePostModal}
          JumpToTab={JumpToTab}
          control={control}
          formData={formData}
          onNextClick={onNextClick}
          resetForm={reset}
          postData={postData}
          // errorMsg={errorMsg}
        />
      ),
    },
    {
      id: 2,
      value: 2,
      index: 2,
      label: "Upload Images",
      panel: (
        <UploadImageTab
          CloseModal={props.closeCreatePostModal}
          control={control}
          formData={formData}
          JumpToTab={JumpToTab}
          onNextClick={onNextClick}
          onSubmit={onSubmit}
          resetForm={reset}
          setValue={setValue}
          postData={postData}
          // errorMsg={errorMsg}
        />
      ),
    },
  ];

  return (
    <Box>
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
          <IconButton onClick={props.closeCreatePostModal}>
            <CloseIcon fontSize="large" sx={{ color: "#8a89fa" }} />
          </IconButton>
        </Box>
      </Box>
      <Divider />

      <GlobalTabs
        NavigateTabs={false}
        tabsArray={tabsArray}
        currentTab={(props.currentTab && props.currentTab) || currentTab}
        setCurrentTab={setCurrentTab}
        displayTabIndicator="none"
        backgroundColor="#E9EDF1"
        tabBgColor="#E9EDF1"
        selectedTabColor="#8a89fa !important"
        selectedtabBgColor="#fff"
        fontWeight={700}
        minHeight={28}
        minWidth={300}
      />
    </Box>
  );
}
