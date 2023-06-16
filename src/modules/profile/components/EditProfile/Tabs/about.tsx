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

export function About({
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
            <Grid item xs={12}>
              <InputHeading label="About" required fontSize={16} />
              <TextAreaInput name="about" minRows={8} control={control} />
            </Grid>
            <Grid item xs={12}>
              <ChipSelector
                name="skills"
                control={control}
                data={tags}
                label="Skills"
                required
                color="#8a89fa"
              />
            </Grid>
            <Grid item xs={12}>
              <ChipSelector
                name="languages"
                control={control}
                data={LanguageJson}
                label="languages"
                required
                color="#8a89fa"
              />
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
                    JumpToTab(1);
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
                  JumpToTab(3);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
