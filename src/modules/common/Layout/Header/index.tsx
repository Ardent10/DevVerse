import { CustomTooltip, SearchBar } from "@common/index";
import { yupResolver } from "@hookform/resolvers/yup";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, Toolbar } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { SearchSchema } from "@utils/validations";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { DarkMode } from "../../DarkMode";
import { sxStyles } from "./index.styles";
import ProfileMenu from "./profileMenu";

interface props {
  open: any;
  handleOpenDrawer: any;
  mode:string;
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
const iconColor = props.mode === "dark" ? "#FFF" : "#000";
  return (
    <Box
      sx={styles.appBarBoxStyle}
      >
      <AppBar
        id="header"
        position="fixed"
        open={props.open}
        sx={{...styles.appBarStyle,
          borderBottom:props.mode === "dark" ? "1px solid #8a89fa" : "#FFFE"
        }}
      >
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
                <img src="/DevVerse-nobg.png" height={50} alt="DevVerse" />
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
            width={260}
          >
            {/* <IconButton>
              <WbSunnyRoundedIcon sx={{ color: "#8a89fa" }} />
            </IconButton>
            <IconButton>
              <BedtimeIcon sx={{ color: "#8a89fa" }} />
            </IconButton> */}
            <DarkMode />

            <CustomTooltip placement="bottom" label="⭐ Star on Github">
              <IconButton
                size="medium"
                href="https://github.com/Ardent10/DevVerse"
              >
                <GitHubIcon sx={{ color: iconColor }} fontSize="large" />
              </IconButton>
            </CustomTooltip>

            <ProfileMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
