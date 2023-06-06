import { useAuth } from "@/modules/authentication/hooks";
import { CustomTooltip } from "@common/index";
import LogoutIcon from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import { sxStyles } from "./index.styles";
import { useRouter } from "next/router";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = sxStyles();
  const { Logout } = useAuth();

  async function handleLogout() {
    await Logout();
  }

  const router = useRouter();

  return (
    <>
      <Box display="flex" alignItems="center" textAlign="center">
        <CustomTooltip label="Profile Menu" placement="bottom">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt="profile-icon"
              src="/Images/boy.png"
              sx={{ width: 35, height: 35 }}
            />
          </IconButton>
        </CustomTooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: styles.menuStyle,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar
            alt="profile-icon"
            src="/Images/boy.png"
            sx={{ width: 35, height: 35 }}
          />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>router.push('/settings')}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => handleLogout()}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
