import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { CustomTooltip } from "../../../Tooltip";
import { sxStyles } from "../index.styles";

export function PostMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = sxStyles();

  return (
    <>
      <CustomTooltip label="Post Menu" placement="right">
        <IconButton onClick={handleClick} aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      </CustomTooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: styles.menuStyle,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {[
          { label: "Edit", icon: <EditIcon sx={{ color: "#8a89fa" }} /> },
          {
            label: "Delete",
            icon: <DeleteForeverRoundedIcon sx={{ color: "red" }} />,
          },
        ].map((item, idx) => (
          <MenuItem key={idx} sx={{ fontWeight: 600 }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
