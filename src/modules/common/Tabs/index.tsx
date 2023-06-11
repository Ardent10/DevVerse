import { Box, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { sxStyles } from "./index.styles";
import {
  GlobalTabsPropsInterface,
  TabInterface,
  TabPanelPropsInterface,
} from "./interfaces";

function TabPanel(props: TabPanelPropsInterface) {
  const { children, value, index, ...other } = props;
  return <>{value === index && <>{children}</>}</>;
}

export function GlobalTabs(props: GlobalTabsPropsInterface) {
  function handleChange(event: React.SyntheticEvent, newValue: number) {
    props.NavigateTabs
      ? props.NavigateTabs && props.setCurrentTab(newValue)
      : props.setCurrentTab(props.currentTab);
  }

  const theme = useTheme();
  const styleProps = {
    theme: theme,
    fontSize: props.fontSize,
    height: props.height,
    width: props.width,
    color: props.color,
    padding: props.padding,
    fontWeight: props.fontWeight,
    indicatorBgColor: props.indicatorBgColor,
    tabBgColor: props.tabBgColor,
    hoverBgColor: props.hoverBgColor,
    minWidth: props.minWidth,
    minHeight: props.minHeight,
    margin: props.margin,
    borderBottom: props.borderBottom,
    borderColor: props.borderColor,
    displayTabIndicator: props.displayTabIndicator,
    indicatorHeight: props.indicatorHeight,
    textTransform: props.textTransform,
    selectedTabColor: props.selectedTabColor,
    selectedtabBgColor: props.selectedtabBgColor,
    tabIconWithState: props.TabIconWithState,
    backgroundColor: props.backgroundColor,
  };

  const styles = sxStyles(styleProps);

  return (
    <Box sx={styles.tabsContainerStyle}>
      <Tabs
        value={props.currentTab}
        onChange={handleChange}
        sx={{
          ...styles.tabsStyle,
        }}
        variant={props.variant}
      >
        {props.tabsArray?.map((tab: TabInterface) => {
          return (
            <Tab
              key={tab.id}
              value={tab.value}
              label={tab.label}
              sx={{
                ...styles.tabStyle,
                height: props.height,
              }}
            />
          );
        })}
      </Tabs>
      {props.tabsArray?.map((tab: TabInterface) => {
        return (
          <TabPanel
            key={tab.id}
            value={props.currentTab}
            index={tab.index}
            dir={theme.direction}
          >
            {tab.panel}
          </TabPanel>
        );
      })}
    </Box>
  );
}
