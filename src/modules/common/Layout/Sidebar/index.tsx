import { useAppState } from "@/store";
import { CustomTooltip } from "@common/Tooltip";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { sxStyles } from "./index.style";

interface props {
  menuItems: Array<any>;
  open: any;
}

export default function Sidebar(props: props) {
  const [state, dispatch] = useAppState();
  const styles = sxStyles({ open: props.open });

  return (
    <List sx={{ pt: 2 }}>
      {props.menuItems.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <CustomTooltip placement="right" label={item.title}>
            <ListItemButton sx={styles.listItemBtnStyles}>
              <ListItemIcon sx={styles.listItemIconStyle}>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.title}
                sx={styles.listItemTextStyle}
              />
            </ListItemButton>
          </CustomTooltip>

          {index === 3 && <Divider />}
        </ListItem>
      ))}
    </List>
  );
}
