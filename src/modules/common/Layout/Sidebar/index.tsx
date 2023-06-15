import { CustomTooltip } from "@common/Tooltip";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { sxStyles } from "./index.style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Badge } from "@mui/material";

interface props {
  menuItems?: Array<any>;
  open: any;
  mode: string;
}

export default function Sidebar(props: props) {
  const router = useRouter();
  const styles = sxStyles({ open: props.open });

  const iconColor= props.mode==='dark'? '#FFF':""

  const menuItems = [
    {
      id: 1,
      title: "Home",
      icon: <HomeIcon sx={{ color: iconColor }} />,
      link: "/home",
    },
    {
      id: 2,
      title: "Notifications",
      icon: (
        <Badge color="secondary" badgeContent={5}>
          <NotificationsIcon sx={{ color: iconColor }} />
        </Badge>
      ),
      link: "/notifications",
    },
    {
      id: 3,
      title: "Friends",
      icon: <PeopleAltIcon sx={{ color: iconColor }} />,
      link: "/friends",
    },
    {
      id: 4,
      title: "Bookmarks",
      icon: <BookmarkIcon sx={{ color: iconColor }} />,
      link: "/bookmarks",
    },
    {
      id: 5,
      title: "Events",
      icon: <WhatshotIcon sx={{ color: iconColor }} />,
      link: "/events",
    },
    {
      id: 6,
      title: "Profile",
      icon: <AccountCircleIcon sx={{ color: iconColor }} />,
      link: "/profile",
    },
    {
      id: 7,
      title: "User Settings",
      icon: <ManageAccountsIcon sx={{ color: iconColor }} />,
      link: "/user-settings",
    },
  ];

  return (
    <List sx={{ pt: 2 }}>
      {menuItems.map((item) => (
        <Link key={item.id} href={item.link} style={{ color: "#8a89fa" }}>
          <ListItem
            key={item.id}
            disablePadding
            sx={{ display: "block", pb: 1 }}
          >
            <CustomTooltip placement="right" label={item.title}>
              <ListItemButton
                sx={
                  router.pathname === item.link
                    ? styles.listItemSelectedBtnStyles
                    : styles.listItemBtnStyles
                }
              >
                <ListItemIcon
                  sx={
                    router.pathname === item.link
                      ? styles.listItemSelectedBtnIconStyle
                      : styles.listItemIconStyle
                  }
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.title}
                  sx={styles.listItemTextStyle}
                />
              </ListItemButton>
            </CustomTooltip>

            {item.id === 4 && <Divider />}
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
