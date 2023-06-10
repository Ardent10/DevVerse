import { useAppState } from "@/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Badge, Box } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect } from "react";
import { Loader } from "../Loder";
import { CustomSnackbar } from "../Snackbar";
import Header from "./Header";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

interface props {
  children: any;
  menuItems?: Array<any>;
}

const menuItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "Notifications",
    icon: (
      <Badge color="secondary" badgeContent={5}>
        <NotificationsIcon />
      </Badge>
    ),
  },
  {
    title: "Bookmarks",
    icon: <BookmarkIcon />,
  },
  {
    title: "Events",
    icon: <WhatshotIcon />,
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
  },
  {
    title: "User Settings",
    icon: <ManageAccountsIcon />,
  },
];

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

  const router = useRouter();

  useEffect(() => {

    dispatch({
      type: "setIsLoading",
      payload: true,
    });

    const timeout = setTimeout(() => {
       dispatch({
         type: "setIsLoading",
         payload: false,
       });
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

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

          <Sidebar open={open} menuItems={menuItems} />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          {state.isLoading ? <Loader /> : props.children}
        </Box>
      </Box>
    </>
  );
}
