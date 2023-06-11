import { userProfilePreview } from "@/utils/SampleData/sampleData";
import { BasicCard, PrimaryButton } from "@common/index";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EditProfilePreviewUserSchema } from "@/utils/validations";
import { InputHeading, TextAreaInput } from "../Form";
import { Input } from "../Form/components/InputField";
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

export const ProfilePreview = () => {
  const [sampleUserData, setSampleUserData] =
    useState<userProfilePreviewData | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (userProfilePreview) {
      setSampleUserData(userProfilePreview);
    }
  }, []);

  const defaultValues = {
    name: "",
    bio: "",
    location: "",
    portfolio: "",
    github: "",
  };

  useEffect(() => {
    if (sampleUserData) {
      reset({
        name: sampleUserData?.name,
        bio: sampleUserData?.bio,
        location: sampleUserData?.location,
        portfolio: sampleUserData?.portfolio,
        github: sampleUserData?.github,
      });
    }
  }, [sampleUserData]);

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(EditProfilePreviewUserSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    alert(JSON.stringify(data));
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
    setEditing(false);
  });

  return (
    <BasicCard
      px={2}
      cardMediaheight={100}
      cardMedia={sampleUserData?.bgImg}
      position="relative"
    >
      <Grid container>
        <Grid item height={50} position="absolute" top={70} left={110}>
          <Avatar
            alt="profile-icon"
            src={sampleUserData?.avatar}
            sx={{ width: 56, height: 56 }}
          />
        </Grid>
        {editing ? (
          <form onSubmit={onSubmit}>
            <Grid item xs={12}>
              <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                  <Input
                    name="name"
                    control={control}
                    type="text"
                    placeholder="Name*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabelFontSize={12}
                    inputHeadingLabel="Name"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputHeading label="Bio" required fontSize={12} />
                  <TextAreaInput name="bio" minRows={3} control={control} />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    name="location"
                    control={control}
                    type="text"
                    placeholder="Location*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabelFontSize={12}
                    inputHeadingLabel="Location"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    name="portfolio"
                    control={control}
                    type="text"
                    placeholder="Portfolio*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabelFontSize={12}
                    inputHeadingLabel="Portfolio"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    name="github"
                    control={control}
                    type="text"
                    placeholder="GitHub*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabelFontSize={12}
                    inputHeadingLabel="GitHub"
                    required
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              columnGap={1}
              justifyContent="start"
              alignItems="start"
              pt={2}
            >
              <PrimaryButton
                fontSize={11}
                title="Cancel"
                type="button"
                borderColor="1px solid #8a89fa"
                color="#8a89fa"
                onClick={() => setEditing(false)}
                padding={0}
              />
              <PrimaryButton
                padding={0}
                fontSize={11}
                title="Save"
                type="submit"
                borderColor="1px solid #8a89fa"
                backgroundColor="#8a89fa"
              />
            </Grid>
          </form>
        ) : (
          <>
            <Grid item xs={12} mt={2}>
              <Typography textAlign="center" fontSize={14} fontWeight={500}>
                {sampleUserData?.name}
              </Typography>
              <Typography pt={1} textAlign="center">
                {sampleUserData?.bio}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              mt={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <PeopleOutlinedIcon />
              <Typography fontSize={12}>
                {sampleUserData?.follower} Followers &nbsp;
              </Typography>
              <Typography fontSize={12}>
                • {sampleUserData?.following} Following
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
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
                onClick={() => setEditing(true)}
              />
            </Grid>

            <Grid item xs={12} mt={2}>
              <Box
                display="flex"
                mb={0.5}
                justifyContent="start"
                alignItems="center"
              >
                <LocationOnOutlinedIcon />
                <Typography ml={1}>{sampleUserData?.location}</Typography>
              </Box>
              <Box display="flex" justifyContent="start" alignItems="center">
                <LanguageOutlinedIcon sx={{ mr: 1 }} />
                <Link href={sampleUserData?.portfolio || ""}>Portfolio</Link>
              </Box>
              <Box display="flex" justifyContent="start" alignItems="center">
                <Avatar
                  alt="github"
                  src="/Images/github.png"
                  sx={{ width: 20, height: 20, mr: 1, mt: 1 }}
                />
                <Link href={sampleUserData?.github || ""}>GitHub</Link>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </BasicCard>
  );
};
