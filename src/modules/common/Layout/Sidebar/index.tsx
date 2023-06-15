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

interface props {
  menuItems: Array<any>;
  open: any;
}

export default function Sidebar(props: props) {
  const router = useRouter();

  const styles = sxStyles({ open: props.open });
  return (
    <List sx={{ pt: 2 }}>
      {props.menuItems.map((item) => (
        <Link key={item.id} href={item.link} style={{color:"#8a89fa"}}>
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
