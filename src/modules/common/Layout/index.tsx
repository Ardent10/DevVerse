import { useAuth } from "@/modules/authentication/hooks";
import { useAppState } from "@/store";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import * as React from "react";
import { useContext, useEffect } from "react";
import { ColorModeContext } from "../DarkMode";
import { Loader } from "../Loder";
import { CustomSnackbar } from "../Snackbar";
import Header from "./Header";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

interface props {
  children: any;
  menuItems?: Array<any>;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  borderRight: "none",
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  borderRight: "none",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function Layout(props: props) {
  const [state, dispatch] = useAppState();
  const { getAccount } = useAuth();
  const { globalReducer } = state;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { mode } = useContext(ColorModeContext);

  const router = useRouter();

  useEffect(() => {
    const fetchAccount = async () => {
      await getAccount();
    };
    fetchAccount();
  }, []);

  useEffect(() => {
    dispatch({
      type: "setIsLoading",
      payload: {
        isLoading: true,
      },
    });

    const timeout = setTimeout(() => {
      dispatch({
        type: "setIsLoading",
        payload: { isLoading: false },
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CustomSnackbar
        open={state.toggleSnackbar.open}
        severity={
          state.toggleSnackbar.severity == "success" ? "success" : "error"
        }
        message={state.toggleSnackbar.message}
        vertical="top"
        horizontal="right"
      />
      <Box sx={{ display: "flex" }}>
        <Header open={open} handleOpenDrawer={handleDrawerOpen} mode={mode} />
        <Drawer id="main-drawer" variant="permanent" open={open}>
          <DrawerHeader
            id="Drawer-header"
            minHeight={10}
            display="flex"
            justifyContent="felx-end!important"
          >
            <img
              src="/space.webp"
              width={120}
              height={100}
              alt="devverse"
              style={{
                position: "absolute",
                zIndex: 10,
                top: "10px",
                left: "80px",
              }}
            />
            <Typography fontWeight={500}>Your Universe</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon sx={{ color: "#8a89fa" }} />
              )}
            </IconButton>
          </DrawerHeader>

          <Sidebar open={open} mode={mode} />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
          {state?.isLoading ? <Loader /> : props.children}
        </Box>
      </Box>
    </>
  );
}
