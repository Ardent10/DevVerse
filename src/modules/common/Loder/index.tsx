import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const breathingAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export function Loader() {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={9999}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          animation: `${breathingAnimation} 1.5s infinite`,
          overflow: "hidden",
        }}
      >
        <img src="/DevVerse-nobg.png" height={50} alt="DevVerse" />
        <Box
          width="100%"
          marginTop={1}
          sx={{
            backgroundColor: "#8a89fa",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <LinearProgress
            variant="indeterminate"
            sx={{
              ".MuiLinearProgress-bar": { backgroundColor: "#FFFF" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

// import { keyframes } from "@emotion/react";
// import { Box } from "@mui/material";
// import LinearProgress from "@mui/material/LinearProgress";

// const breathingAnimation = keyframes`
//   0% {
//     transform: scale(1);
//     opacity: 1;
//   }
//   50% {
//     transform: scale(1.1);
//     opacity: 0.7;
//   }
//   100% {
//     transform: scale(1);
//     opacity: 1;
//   }
// `;

// export function Loader() {
//   return (
//     <Box
//       width="100%"
//       height="100vh"
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       sx={{
//         animation: `${breathingAnimation} 1.5s infinite`,
//         overflowY: "hidden",
//       }}
//     >
//       <img src="/DevVerse1.jpg" height={50} alt="DevVerse" />
//       <LinearProgress
//         variant="indeterminate"
//         sx={{
//           width: "20%",
//           marginTop: 1,
//           backgroundColor: "#8a89fa",
//           ".MuiLinearProgress-bar": {
//             backgroundColor: "#FFFF",
//           },
//         }}
//       />
//     </Box>
//   );
// }
