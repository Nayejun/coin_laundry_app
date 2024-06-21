import { ReactNode } from "react";

export type ToggleSwitchProps = {
  deviceType?: "Web" | "Android" | "IOS";
  initialChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  knobSizeOff?: string;
  knobSizeOn?: string;
  knobColorOff?: string;
  knobColorOn?: string;
  knobOpacityOff?: number;
  knobOpacityOn?: number;
  knobMarginOff?: string;
  knobMarginOn?: string;
  trackColorOff?: string;
  trackColorOn?: string;
  trackOpacityOff?: number;
  trackOpacityOn?: number;
  borderColor?: string;
  borderThickness?: string;
  borderOpacity?: number;
  opacity?: number;
  disabled?: boolean;
};

export type ActionButtonProps = {
  label: string;
  onClick: () => void;
};

export type ValidationFormWithTitleProps = {
  hasTitle: boolean;
};

export type RatingStarsProps = {
  defaultValue: number;
  onChange: (value: number) => void;
};

export type CTAButtonProps = {
  buttonWidth?: string;
  buttonHeight?: string;
  buttonColor?: string;
  borderColor?: string;
  borderThickness?: string;
  borderRadius?: string;
  buttonText?: string;
  buttonTextSize?: string;
  buttonTextColor?: string;
  buttonTextWeight?: number;
  onClick?: () => void;
  disabled?: boolean;
};

export type DividerProps = {
  color?: string;
  thickness?: string;
  vertical?: boolean;
  length?: string;
  margin?: string;
}

export type RadiusBoxProps = {
  boxWidth: string;
  boxHeight: string;
  borderThickness?: string;
  additionalClasses?: string;
};

export type BasicDividerProps = {
  variant: "thick" | "normal";
  vertical?: boolean;
  className?: string;
  width?: string;
}

export type ReviewProps = {
  rating?: number;
  review?: string;
  date?: string;
  storeName?: string;
  images?: string[];
};

export type TopNavigationProps = {
  text: string;
  onClick: () => void;
  children?: ReactNode;
};

export type PageProps = {
  label: string;
  onClick: () => void;
};

export interface Option {
  value: string;
  label: string;
}

export type CustomSelectProps = {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<{ value: string }>) => void;
  options?: Option[]; // Make options optional since we'll provide a default value
};

