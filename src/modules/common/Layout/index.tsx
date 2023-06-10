import { useAppState } from "@/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
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
    id: 1,
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    id: 2,
    title: "Notifications",
    icon: (
      <Badge color="secondary" badgeContent={5}>
        <NotificationsIcon />
      </Badge>
    ),
    link: "/notifications",
  },
  {
    id: 3,
    title: "Friends",
    icon: <PeopleAltIcon />,
    link: "/friends",
  },
  {
    id: 4,
    title: "Bookmarks",
    icon: <BookmarkIcon />,
    link: "/bookmarks",
  },
  {
    id: 5,
    title: "Events",
    icon: <WhatshotIcon />,
    link: "/events",
  },
  {
    id: 6,
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/profile",
  },
  {
    id: 7,
    title: "User Settings",
    icon: <ManageAccountsIcon />,
    link: "/user-settings",
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
    }, 1000);

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
            {/* <Image src="/sidebar.jpg" width={120} height={50} alt="devverse" /> */}
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
