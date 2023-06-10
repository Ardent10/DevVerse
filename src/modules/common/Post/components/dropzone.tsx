import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Box, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";

interface props {
  setDragAndDropFiles: any;
}

export default function Dropzone({ setDragAndDropFiles }: props) {
  const onDrop = (acceptedFiles: { name: string }[]) => {
    setDragAndDropFiles(acceptedFiles);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <Box
      border="2px solid #8a89fa"
      borderRadius="8px"
      sx={{
        borderStyle: "dashed",
        cursor: "pointer",
      }}
      p={5}
      {...getRootProps({ className: "dropzone-fileupload row" })}
    >
      <input
        {...getInputProps()}
        type="file"
        accept="png jpg jpeg gif bmp webp"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="#8a89fa"
      >
        <FileUploadOutlinedIcon fontSize="large" />
        <Typography fontWeight={500} color="#8a89fa">
          {isDragActive
            ? "Drop the files here..."
            : "Choose or Drag & drop files here"}
        </Typography>
      </Box>
    </Box>
  );
}
