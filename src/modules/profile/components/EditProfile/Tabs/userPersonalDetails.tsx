import {
  Input,
  InputHeading,
  PrimaryButton,
  Selector,
  TextAreaInput,
} from "@/modules/common/index";
import { Box, Divider, Grid } from "@mui/material";
import LocationJson from "@utils/SampleData/location.json";

interface props {
  JumpToTab: (TabValue: number) => void;
  onNextClick: () => void;
  formData: any;
  CloseModal: () => void;
  control: any;
  resetForm: any;
  userData: any;
  isDirty: boolean;
}

export function UserPersonalDetails({
  CloseModal,
  onNextClick,
  JumpToTab,
  control,
  userData,
  isDirty,
}: props) {

  return (
    <Grid container>
      <Grid item xs={12} sm={8} md={12}>
        <Box display="flex" flexDirection="column">
          <Divider />
          <Grid item container spacing={2} px={2} pt={2} pb={3}>
            <Grid item container rowSpacing={1} xs={12}>
              <Grid item container columnSpacing={2} xs={12}>
                <Grid item xs={6}>
                  <Input
                    name="firstName"
                    control={control}
                    type="text"
                    placeholder="First Name*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabelFontSize={14}
                    inputHeadingLabel="First Name"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    name="lastName"
                    control={control}
                    type="text"
                    placeholder="Last Name*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabelFontSize={14}
                    inputHeadingLabel="Last Name"
                    required
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <InputHeading label="Bio" required fontSize={14} />
                <TextAreaInput name="bio" minRows={3} control={control} />
              </Grid>
              <Grid item container columnSpacing={2} xs={12}>
                <Grid item xs={6}>
                  <Input
                    name="email"
                    control={control}
                    type="text"
                    placeholder="Email*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabelFontSize={14}
                    inputHeadingLabel="Email"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <Selector
                    name="location"
                    control={control}
                    title="Location"
                    disable={false}
                    fontSize={14}
                    menuItemFontWeight={500}
                    color="#4b4b4b"
                    display="flex"
                    selectHeadingGridSpace={3}
                    selectFieldGridSpace={6}
                    margin={"0 0 5px"}
                    data={LocationJson}
                    required={true}
                  />
                </Grid>
              </Grid>
              <Grid item container columnSpacing={2} xs={12}>
                <Grid item xs={6}>
                  <Input
                    name="github"
                    control={control}
                    type="text"
                    placeholder="GitHub*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabelFontSize={14}
                    inputHeadingLabel="GitHub"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    name="portfolio"
                    control={control}
                    type="text"
                    placeholder="Portfolio*"
                    disable={false}
                    inputHeadingType="Bold"
                    inputHeadingLabelFontSize={14}
                    inputHeadingLabel="Portfolio"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="flex-end">
              <PrimaryButton
                fontSize={12}
                title="Next"
                type="button"
                borderColor="1px solid #8a89fa"
                backgroundColor="#8a89fa"
                borderRadius="8px"
                height={45}
                width={90}
                onClick={() => {
                  onNextClick();
                  JumpToTab(2);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
