import { useAppState } from "@/store";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import * as React from "react";
import { CustomSnackbar } from "../Snackbar";
import Header from "./Header";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

interface props {
  children: any;
  menuItems: Array<any>;
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  console.log(state);
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
        <Header open={open} handleOpenDrawer={handleDrawerOpen} />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader
            id="Drawer-header"
            minHeight={10}
            display="flex"
            justifyContent="space-between!important"
          >
            Your Developer's Social
            {/* <Image src="/sidebar.jpg" width={120} height={50} alt="scorelab" /> */}
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon sx={{ color: "#8a89fa" }} />
              )}
            </IconButton>
          </DrawerHeader>

          <Sidebar open={open} menuItems={props?.menuItems} />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          {props.children}
        </Box>
      </Box>
    </>
  );
}
