import { useAppState } from "@/store";
import { userProfilePreview } from "@/utils/SampleData/sampleData";
import { BasicCard, BasicModal, Chips, PrimaryButton } from "@common/index";
import { yupResolver } from "@hookform/resolvers/yup";
import EditIcon from "@mui/icons-material/Edit";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import LocationJson from "@utils/SampleData/location.json";
import { chipsArray } from "@utils/SampleData/sampleData";
import { EditProfilePreviewUserSchema } from "@utils/validations";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EditProfiletModal } from "../EditProfile/editProfileModal";

interface userProfilePreviewData {
  name: string;
  avatar: string;
  bgImg: string;
  bio: string;
  follower: number;
  following: number;
  location: string;
  portfolio: string;
  github: string;
}

export const Profile = () => {
  const [state] = useAppState();
  const [sampleUserData, setSampleUserData] =
    useState<userProfilePreviewData | null>(null);
  const [userProfile, setUserProfile] = useState<any>(null);

  const [OpenCreatePostModal, setCreateCaseModalOpen] = useState(false);

  function toggleEditProfileModal() {
    setCreateCaseModalOpen((oldState) => !oldState);
  }

  useEffect(() => {
    if (state?.userProfile) {
      setUserProfile({
        id: state.userProfile?.$id,
        firstName: state.userProfile?.firstName,
        lastName: state.userProfile?.lastName,
        email: state.userProfile?.email,
        username: state.userProfile?.username,
        location: state.userProfile?.location,
        github: state.userProfile?.github,
        portfolio: state.userProfile?.portfolio,
        bio: state.userProfile?.bio,
        about: state.userProfile?.about,

        avatar: state.userProfile?.avatar,
        bgImg: state.userProfile?.bgImg,
        follower: state.userProfile?.follower,
        following: state.userProfile?.following,
      });
    }
    setSampleUserData(userProfilePreview);
  }, [state.userProfile]);

  const defaultValues = {
    name: "",
    bio: "",
    location: "",
    portfolio: "",
    github: "",
  };

  useEffect(() => {
    if (userProfile) {
      reset({
        name: `${userProfile?.firstName} ${userProfile?.lastName}`,
        bio: userProfile?.bio,
        location: userProfile?.location,
        portfolio: userProfile?.portfolio,
        github: userProfile?.github,
      });
    } else {
      reset({
        name: sampleUserData?.name,
        bio: sampleUserData?.bio,
        location: sampleUserData?.location,
        portfolio: sampleUserData?.portfolio,
        github: sampleUserData?.github,
      });
    }
  }, [sampleUserData, userProfile]);

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(EditProfilePreviewUserSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    alert(JSON.stringify(data));
    if (!userProfile) {
      setSampleUserData({
        name: data?.name,
        avatar: sampleUserData?.avatar || "",
        bgImg: sampleUserData?.bgImg || "",
        follower: sampleUserData?.follower || 0,
        following: sampleUserData?.following || 0,
        bio: data?.bio,
        location: data?.location,
        portfolio: data?.portfolio,
        github: data?.github,
      });
    }
  });

  return (
    <>
      <BasicModal
        width={600}
        open={OpenCreatePostModal}
        padding={0}
        CloseModal={toggleEditProfileModal}
        borderRadius={3}
        backdropBackgroundColor="#EFEFE"
      >
        <EditProfiletModal userProfile={userProfile} closeEditProfileModal={toggleEditProfileModal} />
      </BasicModal>
      <Grid container>
        <BasicCard
          px={2}
          py={1}
          cardMediaheight={350}
          cardMedia={sampleUserData?.bgImg}
          position="relative"
        >
          <Grid container p={4}>
            <Grid item height={50} position="absolute" top={300} left={40}>
              <Avatar
                alt="profile-icon"
                src={sampleUserData?.avatar}
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  border: "5px solid #8a89fa",
                  bgcolor: "#FFF",
                }}
              />
            </Grid>

            <>
              <Grid
                item
                container
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="baseline"
                xs={12}
                mt={3}
                width="100%"
              >
                <Grid item xs={9.5}>
                  <Typography fontSize={25} fontWeight={500}>
                    {userProfile
                      ? `${userProfile?.firstName} ${userProfile?.lastName}`
                      : sampleUserData?.name}
                  </Typography>
                  <Grid item xs={12} display="flex" alignItems="center">
                    <img
                      src={
                        LocationJson.find(
                          (location) => location.label === userProfile?.location
                        )?.icon
                      }
                      style={{ width: 25, height: 25 }}
                      alt=""
                    />
                    <Typography fontSize={16} ml={1}>
                      {userProfile
                        ? userProfile?.location
                        : sampleUserData?.location}
                    </Typography>
                  </Grid>
                  <Typography pt={1} width={495}>
                    {userProfile
                      ? `@${userProfile?.username}`
                      : sampleUserData?.bio}
                  </Typography>
                  <Typography pt={1} width={495}>
                    {userProfile ? userProfile?.bio : sampleUserData?.bio}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                >
                  <PrimaryButton
                    title="Edit Profile"
                    type="button"
                    borderColor="1px solid #8a89fa"
                    backgroundColor="#8a89fa"
                    fontSize={12}
                    fontWeight={500}
                    width={180}
                    height={30}
                    disableElevation
                    onClick={toggleEditProfileModal}
                    buttonChild={<EditIcon sx={{ mr: 1 }} fontSize="small" />}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} mt={2}>
                <Typography fontSize={16} fontWeight={500}>
                  Portfolio
                </Typography>
                <Grid item xs={12} mt={1} display="flex" alignItems="center">
                  <LanguageOutlinedIcon sx={{ mr: 1 }} />
                  <a
                    href={
                      userProfile
                        ? userProfile?.portfolio
                        : sampleUserData?.portfolio
                    }
                  >
                    <Typography
                      fontSize={16}
                      fontWeight={400}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      Portfolio <LaunchOutlinedIcon fontSize="small" />
                    </Typography>
                  </a>
                </Grid>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Typography fontSize={16} fontWeight={500}>
                  GitHub
                </Typography>
                <Grid item xs={12} mt={1} display="flex" alignItems="center">
                  <GitHubIcon sx={{ mr: 1 }} />
                  <a
                    href={
                      userProfile !== undefined
                        ? userProfile?.github
                        : sampleUserData?.github || "/"
                    }
                  >
                    <Typography
                      fontSize={16}
                      fontWeight={400}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      GitHub <LaunchOutlinedIcon fontSize="small" />
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </>
          </Grid>
        </BasicCard>

        <BasicCard px={2} py={1}>
          <Grid container p={4}>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                About
              </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Typography fontSize={14} fontWeight={400}>
                {userProfile ? userProfile?.about : sampleUserData?.bio}
              </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Typography fontSize={16} fontWeight={500}>
                Location
              </Typography>

              <Grid
                item
                display="flex"
                justifyContent="start"
                alignItems="center"
              >
                <img
                  src={
                    LocationJson.find(
                      (location) => location.label === userProfile?.location
                    )?.icon
                  }
                  style={{ width: 25, height: 25, marginRight: 5 }}
                  alt=""
                />
                <Typography fontSize={16} fontWeight={400}>
                  {userProfile
                    ? userProfile?.location
                    : sampleUserData?.location}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </BasicCard>

        <BasicCard px={2} py={1}>
          <Grid container p={4}>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                Skills
              </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Chips chipsArray={state.tags ? state.tags : chipsArray} />
            </Grid>
          </Grid>
        </BasicCard>

        <BasicCard px={2} py={1}>
          <Grid container p={4}>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                Experience
              </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Typography fontSize={16} fontWeight={500}>
                Software Engineer Intern
              </Typography>
              <Typography fontSize={14} fontWeight={400}>
                Appwrite
              </Typography>
              <Typography fontSize={14} fontWeight={400}>
                2021 - Present
              </Typography>
              <Divider />
            </Grid>
          </Grid>
        </BasicCard>

        <BasicCard px={2} py={1}>
          <Grid container p={4}>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                Education
              </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Typography fontSize={16} fontWeight={500}>
                University of California, Los Angeles
              </Typography>
              <Typography fontSize={14} fontWeight={400}>
                Bachelor of Science in Computer Science
              </Typography>
              <Typography fontSize={14} fontWeight={400}>
                2020 - 2024
              </Typography>
            </Grid>
          </Grid>
        </BasicCard>

        <BasicCard px={2} py={1}>
          <Grid container p={4}>
            <Grid item xs={12}>
              <Typography fontSize={20} fontWeight={500}>
                Languages
              </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Typography fontSize={16} fontWeight={400}>
                English , Hindi , Spanish , French.
              </Typography>
            </Grid>
          </Grid>
        </BasicCard>
      </Grid>
    </>
  );
};
