import { GlobalTabs } from "@/modules/common/Tabs";
import { useAppState } from "@/store";
import { EditUserProfileSchema } from "@/utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUserProfile } from "../../hooks";
import { UploadImageTab } from "../EditProfile/Tabs/upload";
import { About } from "./Tabs/about";
import { Qualifications } from "./Tabs/qualifications";
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
  const { updateUserProfile } = useUserProfile();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
    email: "",
    github: "",
    portfolio: "",
    about: "",
    skills: [],
    languages: [],
    company: "",
    jobTitle: "",
    startJobDate: "",
    endJobDate: "",
    university:"",
    degree: "",
    startDegreeDate: "",
    endDegreeDate: "",
  });
  const [userData, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
    email: "",
    github: "",
    portfolio: "",
    about: "",
    skills: [],
    languages: [],
    company: "",
    jobTitle: "",
    startJobDate: "",
    endJobDate: "",
    university:"",
    degree: "",
    startDegreeDate: "",
    endDegreeDate: "",
  });

  const defaultValues = {
    // User Details Tab
    firstName: props.userProfile?.firstName || "",
    lastName: props.userProfile?.lastName || "",
    bio: props.userProfile?.bio || "",
    location: props.userProfile?.location || "",
    email: props.userProfile?.email || "",
    github: props.userProfile?.github || "",
    portfolio: props.userProfile?.portfolio || "",
    // About Tab
    about: props.userProfile?.about || "",
    skills: props.userProfile?.skills || [],
    languages: props.userProfile?.languages || [],

    // Qualifications Tab
    company: props.userProfile?.company || "",
    jobTitle: props.userProfile?.jobTitle || "",
    startJobDate: props.userProfile?.startJobDate || "",
    endJobDate: props.userProfile?.endJobDate || "",
    degree: props.userProfile?.degree || "",
    startDegreeDate: props.userProfile?.startDegreeDate || "",
    endDegreeDate: props.userProfile?.endDegreeDate || "",
    university: props.userProfile?.university || "",
    userImage: [],
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
    let languages = getValues("languages");

    let company = getValues("company");
    let jobTitle = getValues("jobTitle");
    let startJobDate = getValues("startJobDate");
    let endJobDate = getValues("endJobDate");
    let university = getValues("university");

    let degree = getValues("degree");
    let startDegreeDate = getValues("startDegreeDate");
    let endDegreeDate = getValues("endDegreeDate");

    setUserDetails({
      firstName,
      lastName,
      bio,
      location,
      email,
      github,
      portfolio,

      about,
      skills,
      languages,

      company,
      jobTitle,
      startJobDate,
      endJobDate,
      university,
      degree,
      startDegreeDate,
      endDegreeDate,
    });
  }
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await updateUserProfile({
      userId: state.userProfile.$id,
      firstName: data.firstName,
      lastName: data.lastName,
      bio: data.bio,
      location: data.location,
      email: data.email,
      github: data.github,
      portfolio: data.portfolio,

      about: data.about,
      skills: data.skills,
      languages: data.languages,

      company: data.company,
      jobTitle: data.jobTitle,
      startJobDate: data.startJobDate,
      endJobDate: data.endJobDate,
      degree: data.degree,
      startDegreeDate: data.startDegreeDate,
      endDegreeDate: data.endDegreeDate,

      avatar: data.userImage[0],
      bgImg: data.userImage[1],
    });

    // props.closeEditProfileModal();
  });

  // console.log("Form Data", userData);
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
      label: "Qualifications",
      panel: (
        <Qualifications
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
      id: 4,
      value: 4,
      index: 4,
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
        minWidth={150}
      />
    </Box>
  );
}
