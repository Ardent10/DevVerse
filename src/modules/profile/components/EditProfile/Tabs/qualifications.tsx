import {
  ChipSelector,
  InputHeading,
  PrimaryButton,
  TextAreaInput,
  Input,
} from "@/modules/common/index";
import { Box, Divider, Grid } from "@mui/material";
import LanguageJson from "@utils/SampleData/language.json";

interface props {
  JumpToTab: (TabValue: number) => void;
  onNextClick: () => void;
  formData: any;
  CloseModal: () => void;
  control: any;
  resetForm: any;
  userData: any;
  isDirty: boolean;
  setValue: any;
}

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

export function Qualifications({
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
          <Grid item container rowSpacing={2} px={2} pt={2} pb={3}>
            <Grid item container columnSpacing={2} xs={12}>
              <Grid item xs={6}>
                <Input
                  name="company"
                  control={control}
                  type="text"
                  placeholder="Experience*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabelFontSize={14}
                  inputHeadingLabel="Company Name"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  name="jobTitle"
                  control={control}
                  type="text"
                  placeholder="Job Title*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabelFontSize={14}
                  inputHeadingLabel="Job Title"
                  required
                />
              </Grid>
            </Grid>
            <Grid item container columnSpacing={2} xs={12}>
              <Grid item xs={6}>
                <Input
                  name="startJobDate"
                  control={control}
                  type="date"
                  placeholder="Experience*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabelFontSize={14}
                  inputHeadingLabel="Start Date"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  name="endJobDate"
                  control={control}
                  type="date"
                  placeholder="Job Title*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabelFontSize={14}
                  inputHeadingLabel="End Date"
                  required
                />
              </Grid>
            </Grid>
            <Grid item container columnSpacing={2} xs={12}>
              <Grid item xs={6}>
                <Input
                  name="university"
                  control={control}
                  type="text"
                  placeholder="University*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabelFontSize={14}
                  inputHeadingLabel="University"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  name="degree"
                  control={control}
                  type="text"
                  placeholder="Course*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabelFontSize={14}
                  inputHeadingLabel="Course"
                  required
                />
              </Grid>
            </Grid>
            <Grid item container columnSpacing={2} xs={12}>
              <Grid item xs={6}>
                <Input
                  name="startDegreeDate"
                  control={control}
                  type="date"
                  placeholder="Experience*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabelFontSize={14}
                  inputHeadingLabel="Start Date"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  name="endDegreeDate"
                  control={control}
                  type="date"
                  placeholder="Job Title*"
                  disable={false}
                  inputHeadingType="Bold"
                  inputHeadingLabelFontSize={14}
                  inputHeadingLabel="End Date"
                  required
                />
              </Grid>
            </Grid>

            <Grid
              item
              container
              columnSpacing={2}
              xs={12}
              display="flex"
              justifyContent="flex-end"
            >
              <Grid item xs={3}>
                <PrimaryButton
                  fontSize={12}
                  title="Back"
                  type="button"
                  borderColor="1px solid #8a89fa"
                  color="#8a89fa"
                  borderRadius="8px"
                  height={45}
                  width={90}
                  onClick={() => {
                    JumpToTab(2);
                  }}
                />
              </Grid>
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
                  JumpToTab(4);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
