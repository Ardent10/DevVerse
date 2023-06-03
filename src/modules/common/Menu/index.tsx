import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import { sxStyles } from "./index.styles";

interface props {
  height: number;
  width: number;
  menuItems?: Array<any>;
  fontSize?: number;
  fontWeight?: number;
}

export function Menu(props: props) {
  const styles = sxStyles({
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
  });
  return (
    <Paper sx={{ width: props.width, maxWidth: "100%", height: props.height }}>
      <MenuList sx={{padding:2}}>
        {props.menuItems?.map((item, idx) => (
          <MenuItem sx={styles.menuItemStyle} key={idx}>
            <ListItemIcon sx={styles.menuListIconStyle}>{item.icon}</ListItemIcon>
            <ListItemText sx={styles.menuListItemsStyle}>
              {item.title}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
