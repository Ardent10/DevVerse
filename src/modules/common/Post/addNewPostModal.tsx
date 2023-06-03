import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { NewPostSchema } from "../../../utils/validations";
import { Input, InputHeading, TextAreaInput } from "../Form";
import { PrimaryButton } from "../PrimaryButton";

interface props {
  CloseModal: any;
}

export default function AddNewPostModal(props: props) {
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(NewPostSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    alert(JSON.stringify(data));
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
              p={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <PostAddIcon fontSize="large" sx={{ color: "#8a89fa" }} />
              <Typography
                display="flex"
                justifyContent="center"
                alignItems="center"
                component="h1"
                variant="h5"
                fontSize={22}
                fontWeight={500}
                color="#8a89fa"
              >
                New Post
              </Typography>
              <IconButton onClick={props.CloseModal}>
                <CloseIcon
                  fontSize="large"
                  sx={{ color: "#8a89fa" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Divider />
          <form onSubmit={onSubmit}>
            <Grid item xs={12} component="form" noValidate p={3}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <Input
                    name="title"
                    control={control}
                    type="text"
                    placeholder="Enter Title*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabel="Title"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputHeading label="Description" required />
                  <TextAreaInput name="description" control={control} />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              columnGap={1}
              justifyContent="end"
              px={3}
              pb={3}
            >
              <PrimaryButton
                fontSize={12}
                title="Cancel"
                type="button"
                borderColor="1px solid #8a89fa"
                color="#8a89fa"
                borderRadius="30px"
                height={45}
                onClick={props.CloseModal}
              />
              <PrimaryButton
                fontSize={12}
                title="Create"
                type="submit"
                borderColor="1px solid #8a89fa"
                backgroundColor="#8a89fa"
                borderRadius="30px"
                height={45}
              />
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
