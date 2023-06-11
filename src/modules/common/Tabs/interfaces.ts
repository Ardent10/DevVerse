import { ReactElement } from "react";

export interface TabInterface {
  id: number;
  value: number;
  index: number;
  label: string;
  panel: ReactElement;
  borderColor?: string;
  renderTab?: boolean;
}

export interface TabPanelPropsInterface {
	children?: ReactElement;
	value: number;
	index: number;
	dir?: string;
	backgroundColor?: string;
}

type variant = "standard" | "scrollable" | "fullWidth";
export enum textTransform {
  uppercase = "uppercase",
  lowercase = "lowercase",
  capitalize = "capitalize",
  none = "none",
}

export enum justifyContent {
  spaceBetween = "space-between",
  spaceAround = "space-around",
  spaceEvenly="space-evenly",
}

export interface GlobalTabsPropsInterface {
	tabsArray: TabInterface[];
	currentTab: number;
	defaultTab?: number;
	setCurrentTab: (newValue: number) => void;
	backgroundColor?: string;
	NavigateTabs?: boolean;
	variant?: variant;
	displayTabIndicator?: string;
	indicatorHeight?: string;
	minWidth?: number;
	maxWidth?: number;
	minHeight?: number;
	maxHeight?: number;
	fontSize?: number;
	margin?: string;
	height?: number;
	width?: number;
	color?: string;
	padding?: string | number;
	fontWeight?: number;
	tabBgColor?: string;
	indicatorBgColor?: string;
	hoverBgColor?: string;
	borderBottom?: number;
	borderColor?: string;
	selectedTabColor?: string;
	tabsBgColor?: string;
	selectedtabBgColor?: string;
	textTransform?: textTransform;
	TabIconWithState?: string | ReactElement<any, string> | undefined;
	justifyContent?:justifyContent;
}
