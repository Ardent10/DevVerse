import { SearchBar } from "@common/index";
import { yupResolver } from "@hookform/resolvers/yup";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { Box, IconButton, Toolbar } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SearchSchema } from "../../../../utils/validations";
import { sxStyles } from "./index.styles";
import ProfileMenu from "./profileMenu";

interface props {
  open: any;
  handleOpenDrawer: any;
}
const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header(props: props) {
  const defaultValues = {
    Search: "",
  };

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(SearchSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    alert(JSON.stringify(data));
    reset(defaultValues);
  });

  const styles = sxStyles();

  return (
    <Box sx={styles.appBarBoxStyle}>
      <AppBar position="fixed" open={props.open} sx={styles.appBarStyle}>
        <Toolbar sx={styles.toolBarStyle}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={props.handleOpenDrawer}
              edge="start"
              sx={{
                ...(props.open && { display: "none" }),
              }}
            >
              <MenuIcon sx={{ color: "#8a89fa" }} fontSize="large" />
            </IconButton>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box display="flex" justifyContent="start" alignItems="center">
                <img src="/DevVerse1.jpg" height={50} alt="DevVerse" />
              </Box>
            </Link>
          </Box>
          <form onSubmit={onSubmit}>
            <Box width={400} position="relative" display="flex">
              <IconButton type="submit" sx={styles.searchIconBtnStyle}>
                <SearchIcon sx={styles.searchStyle} />
              </IconButton>
              <SearchBar
                name="Search"
                control={control}
                placeholder="Search"
                placeHolderFontSize="14px"
              />
            </Box>
          </form>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={220}
          >
            <IconButton>
              <WbSunnyRoundedIcon sx={{ color: "#8a89fa" }} />
            </IconButton>
            <IconButton>
              <BedtimeIcon sx={{ color: "#8a89fa" }} />
            </IconButton>

            <ProfileMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
