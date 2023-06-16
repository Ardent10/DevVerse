import { useAppState } from "@/store/index";
import { PrimaryButton } from "@common/index";
import Dropzone from "@modules/common/Post/components/dropzone";
import { sxStyles } from "@modules/common/Post/components/index.styles";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import {
  Alert,
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";

interface props {
  JumpToTab: (TabValue: number) => void;
  onNextClick: () => void;
  CloseModal: () => void;
  control: any;
  setValue: any;
  errorMsg?: string;
  resetForm: any;
  formData: any;
  onSubmit: any;
  postData: any;
}

export function UploadImageTab({
  CloseModal,
  onSubmit,
  JumpToTab,
  onNextClick,
  control,
  errorMsg,
  setValue,
}: props) {
  const [selectedFilePath, setSelectedFilePath] = useState<string[]>([]);
  const [fileSizeErrorMsg, setFileSizeErrorMsg] = useState<string>("");
  const [fileTaken, setFile] = useState<File[] | null[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useAppState();
  const styles = sxStyles();

  function handleChange(files: File[] | FileList | null) {
    fileSizeErrorMsg != "" && setFileSizeErrorMsg("");
    if (files != null && files["length"] != 0) {
      const file: File = files[0];
      if (file?.size > 4000000) {
        setFileSizeErrorMsg("Image size should be less than 4MB.");
      }
      setFile((oldArray: any[]) => {
        return oldArray.includes(file) ? [...oldArray] : [...oldArray, file];
      });
      const filePath: string = URL.createObjectURL(file);
      setSelectedFilePath((oldArray: any[]) => {
        return oldArray.includes(filePath)
          ? [...oldArray]
          : [...oldArray, filePath];
      });
    } else {
      URL.revokeObjectURL(selectedFilePath[0]);
      setFileSizeErrorMsg("");
      setSelectedFilePath([]);
      setFile([]);
    }
  }

  function selectFile() {
    if (fileInputRef.current != null) {
      fileInputRef.current.click();
    }
  }

  function editFile(index: number) {
    if (fileInputRef.current != null) {
      fileInputRef.current.click();
    }
    setFile((file: any[]) => [
      ...file.slice(0, index),
      ...file.slice(index + 1, file.length),
    ]);
    setSelectedFilePath((paths: any[]) => [
      ...paths.slice(0, index),
      ...paths.slice(index + 1, paths.length),
    ]);
  }

  function removeImage(index: number) {
    URL.revokeObjectURL(selectedFilePath[index]);
    setFile((file: any[]) => [
      ...file.slice(0, index),
      ...file.slice(index + 1, file.length),
    ]);
    setSelectedFilePath((paths: any[]) => [
      ...paths.slice(0, index),
      ...paths.slice(index + 1, paths.length),
    ]);
  }

  const handleUpload = () => {
    if (fileTaken.length !== 0) {
      setValue("userImage", fileTaken);
    } else {
      errorMsg = "Please select a file";
      return errorMsg;
    }
    // props.CloseModal();
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={8} md={12}>
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
        <form onSubmit={onSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Divider />
            <Grid
              item
              container
              xs={12}
              rowSpacing={2}
              component="form"
              noValidate
              p={3}
            >
              <Typography fontSize={14} fontWeight={500} color="#8a89fa">
                Selection Sequence for Images
                <ol>
                  <li> Avatar</li>
                  <li> Background Image</li>
                </ol>
              </Typography>
              <Grid item xs={12}>
                <Dropzone
                  control={control}
                  name="userImage"
                  setDragAndDropFiles={(files: any) => {
                    handleChange(files);
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              {selectedFilePath.length !== 0 && (
                <Box px={3}>
                  <Typography fontSize={16} fontWeight={500} color="#8a89fa">
                    File name
                  </Typography>
                  <Box sx={{ flexGrow: 1, overflowY: "auto", height: "150px" }}>
                    {fileTaken.map((file: any, index: number) => {
                      return (
                        <Box sx={styles.fileContainerStyle} key={index}>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography sx={styles.fileNameStyle}>
                              {file.name.length > 20
                                ? file.name.slice(0, 20) + "..."
                                : file.name}
                            </Typography>
                            <Typography sx={styles.fileSizeStyle}>
                              {Math.floor(file.size / 1000)} KB
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <IconButton
                              onClick={() => {
                                editFile(index);
                              }}
                            >
                              <EditIcon sx={{ color: " #8a89fa" }} />
                            </IconButton>
                            <IconButton
                              onClick={() => {
                                removeImage(index);
                              }}
                            >
                              <CloseIcon sx={{ color: " #8a89fa" }} />
                            </IconButton>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              )}
            </Grid>

            <Grid item p={2} display="flex" justifyContent="flex-end">
              <Grid item xs={2}>
                <PrimaryButton
                  fontSize={12}
                  title="Back"
                  type="button"
                  borderColor="1px solid #8a89fa"
                  backgroundColor="#8a89fa"
                  borderRadius="8px"
                  width={80}
                  height={45}
                  onClick={() => {
                    onNextClick();
                    JumpToTab(3);
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <PrimaryButton
                  fontSize={12}
                  title="Upload"
                  type="submit"
                  borderColor="1px solid #8a89fa"
                  backgroundColor="#8a89fa"
                  borderRadius="8px"
                  height={45}
                  disabled={selectedFilePath.length === 0}
                  onClick={handleUpload}
                  showLoaderonBtn={true}
                />
              </Grid>
            </Grid>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
}
