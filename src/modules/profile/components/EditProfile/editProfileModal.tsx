import { UploadImageTab } from "@/modules/common/Post/components";
import { usePost } from "@/modules/common/Post/hooks";
import { GlobalTabs } from "@/modules/common/Tabs";
import { useAppState } from "@/store";
import { EditUserProfileSchema } from "@/utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { About } from "./Tabs/about";
import { UserPersonalDetails } from "./Tabs/userPersonalDetails";

interface tab {
  id: number;
  value: number;
  index: number;
  label: string;
  panel: React.ReactElement;
}

interface props {
  closeEditProfileModal: any;
  currentTab?: number;
  userProfile: any;
}

export function EditProfiletModal(props: props) {
  const [currentTab, setCurrentTab] = useState(1);
  const [state, dispatch] = useAppState();
  const { addPost } = usePost();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
    email: "",
    github: "",
    portfolio: "",
  });
  const [userData, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
    email: "",
    github: "",
    portfolio: "",
  });

  const defaultValues = {
    firstName: props.userProfile?.firstName || "",
    lastName: props.userProfile?.lastName || "",
    bio: props.userProfile?.bio || "",
    location: props.userProfile?.location || "",
    email: props.userProfile?.email || "",
    github: props.userProfile?.github || "",
    portfolio: props.userProfile?.portfolio || "",
    about: props.userProfile?.about || "",
    skills: props.userProfile?.skills || [],
  };

  const {
    handleSubmit,
    control,
    reset,
    watch,
    getValues,
    setValue,
    formState: { isDirty },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(EditUserProfileSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    alert(JSON.stringify(data));
    props.closeEditProfileModal();
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
    let firstName = getValues("firstName");
    let lastName = getValues("lastName");
    let bio = getValues("bio");
    let location = getValues("location");
    let email = getValues("email");
    let github = getValues("github");
    let portfolio = getValues("portfolio");
    let about = getValues("about");
    let skills = getValues("skills");
    setUserDetails({
      firstName,
      lastName,
      bio,
      location,
      email,
      github,
      portfolio,
    });
  }

  const tabsArray: tab[] = [
    {
      id: 1,
      value: 1,
      index: 1,
      label: "User Details",
      panel: (
        <UserPersonalDetails
          CloseModal={props.closeEditProfileModal}
          JumpToTab={JumpToTab}
          control={control}
          formData={formData}
          onNextClick={onNextClick}
          resetForm={reset}
          userData={userData}
          isDirty={isDirty}
          // errorMsg={errorMsg}
        />
      ),
    },
    {
      id: 2,
      value: 2,
      index: 2,
      label: "About",
      panel: (
        <About
          CloseModal={props.closeEditProfileModal}
          control={control}
          formData={formData}
          JumpToTab={JumpToTab}
          onNextClick={onNextClick}
          resetForm={reset}
          setValue={setValue}
          userData={userData}
          isDirty={isDirty}
          // errorMsg={errorMsg}
        />
      ),
    },
    {
      id: 3,
      value: 3,
      index: 3,
      label: "Upload",
      panel: (
        <UploadImageTab
          CloseModal={props.closeEditProfileModal}
          control={control}
          formData={formData}
          JumpToTab={JumpToTab}
          onNextClick={onNextClick}
          onSubmit={onSubmit}
          resetForm={reset}
          setValue={setValue}
          postData={userData}
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
            Edit Profile
          </Typography>
          <IconButton onClick={props.closeEditProfileModal}>
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
        minWidth={130}
      />
    </Box>
  );
}
